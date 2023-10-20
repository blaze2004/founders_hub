import { Database } from '@/types/database.types';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Profile=() => {
  const [isEditing, setIsEditing]=useState(false);
  const [avatar, setAvatar]=useState('URL_TO_DEFAULT_AVATAR'); // Set a default avatar URL
  const [name, setName]=useState('Your Name');
  const [bio, setBio]=useState('Your Bio');

  const supabase=useSupabaseClient<Database>();
  const session=useSession();

  const fetchUserProfile=useCallback(async () => {
    const { data, error }=await supabase.from('profiles').select().eq('id', session?.user.id!);

    if (!data) {
      return;
    }
    if (data.length>0) {
      const profile=data[0];
      setAvatar(profile.avatar_url!);
      setName(profile.full_name!);
      setBio(profile.bio!);
    }
  }, [supabase, session]);

  useEffect(() => {
    if (session) {
      fetchUserProfile();
    }
  }, [fetchUserProfile, session]);

  const handleEditProfile=() => {
    setIsEditing(true);
  };

  const handleSaveProfile=async () => {
    // Perform the update to the Supabase database here
    // Make sure to validate user input and update the "profiles" table

    setIsEditing(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center">
        <Image
          src={avatar}
          alt="Avatar"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
      <div className="mt-4 text-center">
        {isEditing? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded p-2 w-full"
          />
        ):(
          <h2 className="text-2xl font-bold">{name}</h2>
        )}

        {isEditing? (
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="border rounded p-2 w-full mt-2"
          />
        ):(
          <p className="mt-2">{bio}</p>
        )}

        {isEditing? (
          <button
            onClick={handleSaveProfile}
            className="bg-blue-500 text-white p-2 rounded mt-4"
          >
            Save Profile
          </button>
        ):(
          <button
            onClick={handleEditProfile}
            className="bg-gray-400 text-white p-2 rounded mt-4"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;