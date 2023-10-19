import Image from 'next/image';
import { useRouter } from 'next/router';
import { FeatureCardProps } from '@/types';
import mentors from '@/assets/images/mentors.svg';
import events from '@/assets/images/events.svg';
import grants from '@/assets/images/grants.svg';
import resources from '@/assets/images/resources.png';

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

      <div className="flex items-center justify-between w-full max-w-screen-md my-16">
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

      <div className='flex flex-col sm:flex-row sm:space-x-4 w-full max-w-screen-sm'>
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full px-4 py-2 rounded-md focus:outline-none ring-2 ring-purple-600 focus:border-transparent'
        />
        <button
          className='button-large'
        >
          Join&nbsp;Now
        </button>
      </div>
    </div>
  );
}

export default Hero;