import Events from '@/components/index/events';
import Hero from '@/components/index/hero';
import { EventCardProps, IndexPageProps } from '@/types';
import { GetStaticProps } from 'next';

const Home=({ events }: IndexPageProps) => {
  return (
    <>
      <div className='flex w-full p-8 flex-col items-center py-32 bg-black text-white'>
        <Hero />
      </div>
      <div className='flex w-full flex-col items-center py-32'>
        <Events events={events} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps=async () => {
  const events: EventCardProps[]=[
    {
      title: 'How to build the right team',
      description: 'Learn how to build the right team from scratch',
      speaker: 'John Doe',
      category: 'Startup Talks',
      banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-startupgrind/events/ai%2520prodcutivity.jpg',
      slug: 'how-to-build-a-product-roadmap',
    },
    {
      title: 'How to build the right team',
      description: 'Learn how to build the right team from scratch',
      speaker: 'John Doe',
      category: 'Startup Talks',
      banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-startupgrind/events/ai%2520prodcutivity.jpg',
      slug: 'how-to-build-a-product-roadmap',
    },
    {
      title: 'How to build the right team',
      description: 'Learn how to build the right team from scratch',
      speaker: 'John Doe',
      category: 'Startup Talks',
      banner: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-startupgrind/events/ai%2520prodcutivity.jpg',
      slug: 'how-to-build-a-product-roadmap',
    },
  ];

  return {
    props: {
      events: events,
    },
  };
}

export default Home;