import Image from 'next/image';
import { useRouter } from 'next/router';
import { EventCardProps, EventSectionProps } from '@/types';
import { FaArrowAltCircleRight, FaArrowRight, FaUser } from 'react-icons/fa';

const EventCard=({ title, description, banner, speaker, slug, category }: EventCardProps) => {
  const router=useRouter();
  return (
    <div className='rounded-lg p-4 bg-white dark:bg-black ring-1 ring-gray-200 dark:ring-black'>
      <Image
        src={banner}
        alt={title}
        width={300}
        height={200}
        className='rounded-lg w-full max-h-48 object-cover'
      />
      <h4 className='text-2xl font-bold my-4'>{title}</h4>
      <p className='text-gray-600 dark:text-gray-300 mb-4'>{description}</p>
      <div className='flex items-center space-x-2'>
        <FaUser />
        <p>{speaker}</p>
      </div>
      <div className='flex justify-between mt-8 mb-2 text-white'>
        <div className='rounded-lg bg-light-purple p-2'>
          {category}
        </div>
        <button className='rounded-full p-2 px-4 bg-black text-white dark:ring-1 dark:ring-white' onClick={() => router.push(`events/${slug}`)}>
          <FaArrowRight />
        </button>
      </div>

    </div>
  );
}

const Events=({ events }: EventSectionProps) => {
  return (
    <div className='flex flex-col items-center'>
      <h1
        className='bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text py-4 text-center font-display text-4xl font-bold text-transparent drop-shadow-sm md:text-7xl'
      >
        Featured Events
      </h1>
      <p className="max-w-screen-md text-center text-gray-600 dark:text-gray-300">Masterclasses, workshops, founder stories and much more to help you grow your Startup</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
        {
          events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              banner={event.banner}
              speaker={event.speaker}
              slug={event.slug}
              category={event.category}
            />
          ))
        }
      </div>
      <button className='button-large'>
        View All Events
      </button>
    </div>
  );
}



export default Events;