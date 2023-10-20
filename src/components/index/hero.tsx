import Image from 'next/image';
import { useRouter } from 'next/router';
import { FeatureCardProps } from '@/types';
import mentors from '@/assets/images/mentors.svg';
import events from '@/assets/images/events.svg';
import grants from '@/assets/images/grants.svg';
import resources from '@/assets/images/resources.png';
import { useState } from 'react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const FeatureCard=({ title, icon, link }: FeatureCardProps) => {
  const router=useRouter();

  return (
    <button onClick={() => router.push(link)}>
      <div className='flex flex-col items-center space-y-4'>
        <Image
          src={icon.src}
          alt={title}
          width={100}
          height={100}
        />
        <p className='font-bold'>{title}</p>
      </div>
    </button>
  );
}

const Hero=() => {

  const [email, setEmail]=useState<string>('');
  const [error, setError]=useState<string>('');
  const [message, setMessage]=useState<string>('');
  const [loading, setLoading]=useState<boolean>(false);

  const features: FeatureCardProps[]=[
    {
      title: 'Mentors',
      icon: mentors,
      link: '/mentors'
    },
    {
      title: 'Events',
      icon: events,
      link: '/events'
    },
    {
      title: 'Resources',
      icon: resources,
      link: '/resources'
    },
    {
      title: 'Grants',
      icon: grants,
      link: '/grants'
    }
  ];

  const supabase=useSupabaseClient();

  const handleAuth=async () => {
    setLoading(true);
    if (email&&email.length>0) {
      try {
        const { data, error }=await supabase.auth.signInWithOtp({ email: email });
        if (error) {
          setError(error.message);
          setMessage('');
        } else {
          console.log(data);
          setMessage('Check your email for the magic link.');
          setError('');
        }
      } catch (error) {
        console.log(error);
        setError('Something went wrong. Please try again later.');
        setMessage('');
      }
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center max-w-screen-xl">
      <h1
        className='mt-8 text-center font-display text-4xl font-bold drop-shadow-sm md:text-7xl'
      >
        Join the World&apos;s Most
      </h1>
      <h1
        className='bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text py-4 text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl'
      >
        Passionate Startup Community
      </h1>
      <p className="max-w-screen-md text-center text-gray-300">
        The Founders Hub is a volunteer-driven community of startup enthusiasts and entrepreneurs who are passionate about creating an impact and fostering collective growth
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-screen-md my-16">
        {
          features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              link={feature.link}
            />
          ))
        }
      </div>

      <div className='flex flex-col sm:flex-row sm:space-x-4 sm:w-full space-y-4 sm:space-y-0 max-w-screen-sm p-4'>
        <input
          type='email'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          className='w-full px-4 py-2 rounded-md focus:outline-none ring-2 ring-purple-600 text-black dark:text-white focus:border-transparent'
        />
        <button
          className='button-large'
          onClick={handleAuth}
          disabled={loading}
        >
          {
            loading? (
              <svg className="w-5 h-5 mr-3 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            ):
              <p>Get&nbsp;Started</p>
          }
        </button>
      </div>

      <div className={`text-center ${message.length>0? '':'text-red-500'}`}>
        <p>{error||message}</p>
      </div>

    </div>
  );
}

export default Hero;