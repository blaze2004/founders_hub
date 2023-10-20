import { Database } from '@/types/database.types';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Profile=() => {
  const [isEditing, setIsEditing]=useState(false);
  const [avatar, setAvatar]=useState(''); // Set a default avatar URL
  const [name, setName]=useState('Your Name');
  const [bio, setBio]=useState('Your Bio');

  const supabase=useSupabaseClient<Database>();
  const session=useSession();

  const fetchUserProfile=useCallback(async () => {
    const { data, error }=await supabase.from('profiles').select().eq('id', session?.user.id!);

    if (!data||error) {
      alert('Something unexpected happened while fetching your profile.')
      return;
    }

    if (data.length>0) {
      const profile=data[0];
      setAvatar(profile.avatar_url||'');
      setName(profile.full_name||'');
      setBio(profile.bio||'');
    }
  }, [supabase, session]);

  useEffect(() => {
    if (session) {
      fetchUserProfile();
    }
  }, [fetchUserProfile, session]);

  const handleSaveProfile=async () => {
    if (!name||!bio) {
      return;
    }

    const { error }=await supabase.from('profiles').update({
      full_name: name,
      bio: bio,
    }).eq('id', session?.user.id!);

    setIsEditing(false);
  };

  return (
    <div className="flex justify-center min-h-screen pt-8">
      <div className='max-w-screen-lg w-full'>
        <div className="flex justify-start">
          <Image
            src={avatar}
            alt="Avatar"
            width={50}
            height={50}
            className="w-20 h-20 rounded-full object-cover"
          />
        </div>
        <div className="mt-4 text-center">
          <div className="relative rounded-md">
            <h3 className="text-sm text-left font-medium p-3">
              Name
            </h3>
            <input
              type="text"
              className="w-full rounded-md p-3 ring-1 ring-gray-200 dark:ring-white focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className="relative rounded-md">
            <h3 className="text-sm text-left font-medium p-3">
              Bio
            </h3>
            <textarea
              className="w-full rounded-md p-3 ring-1 ring-gray-200 dark:ring-white focus:outline-none"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          {isEditing? (
            <button
              onClick={handleSaveProfile}
              className="bg-blue-500 text-white p-2 rounded mt-4"
            >
              Save Profile
            </button>
          ):(
            <button
              onClick={() => setIsEditing(true)}
              className="bg-gray-400 text-white p-2 rounded mt-4"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;