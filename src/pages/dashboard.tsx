import { FeedCard } from '@/components/feed/cards';
import { FeedItem } from '@/types/feed';

const Dashboard=() => {
  const feeds: FeedItem[]=[
    {
      title: 'How to build the right team',
      description: 'Learn how to build the right team from scratch',
      image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-startupgrind/events/ai%2520prodcutivity.jpg',
      slug: 'how-to-build-a-product-roadmap',
      category: 'Startup Talks',
      tags: ['Product', 'Startup', 'Roadmap'],
      type: 'event',
    },
  ];

  for (let i=0; i<10; i++) {
    feeds.push(feeds[0]);
  }

  return (
    <div>
      <div className='flex justify-center min-h-screen'>
        <div className='flex items-start max-w-screen-xl space-x-4'>
          {/* feed */}
          <div className='rounded-lg ring-1 ring-gray-600 dark:bg-sail-900 flex-4/5 mt-4'>
            {feeds.map((feed, key) => (
              <div key={key}>
                <FeedCard {...feed} key={key} />
                {key!==feeds.length-1&&(
                  <hr className='my-6 border-gray-300 dark:border-gray-600' />
                )}
              </div>
            ))}
          </div>
          <div className='hidden md:flex sticky top-20 rounded-lg ring-1 ring-gray-600 dark:bg-sail-900 flex-1/5 flex-col space-y-4 p-4'>
            <p>Search and Filters</p>
            <div className='flex-col'>
              {
                ['All', 'Events', 'Jobs', 'Discussions'].map((item, key) => (
                  <button
                    key={key}
                    className='button-small'
                  >
                    {item}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;