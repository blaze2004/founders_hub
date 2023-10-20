import { FeedCard } from '@/components/feed/cards';
import { DashboardProps } from '@/types';
import { Database } from '@/types/database.types';
import { Category, FeedItem } from '@/types/feed';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSideProps } from 'next';

const Dashboard=({ feedList }: DashboardProps) => {
  return (
    <div className='mt-4'>
      <div className='flex justify-center min-h-screen py-8'>
        <div className='flex items-start max-w-screen-xl space-x-4'>
          <div className='rounded-lg ring-1 ring-gray-600 dark:bg-sail-900 flex-4/5 mt-4'>
            {feedList.map((feed, key) => (
              <div key={key}>
                <FeedCard {...feed} key={key} />
                {key!==feedList.length-1&&(
                  <hr className='my-6 border-gray-300 dark:border-gray-600' />
                )}
              </div>
            ))}
          </div>
          <div className='hidden md:flex sticky top-20 rounded-lg ring-1 ring-gray-600 dark:bg-sail-900 flex-1/5 flex-col space-y-4 p-4'>
            <p>Filters</p>
            <div className='flex-col space-y-4'>
              {
                Object.values(Category).map((item, key) => (
                  <button
                    key={key}
                    className='button-small block'
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

export const getServerSideProps: GetServerSideProps=async (context) => {
  const supabase=createPagesServerClient<Database>(context);

  const { data, error }=await supabase.from('Feed').select('*')
    .limit(10);

  if (error) {
    console.log(error)
    return {
      notFound: true
    }
  }

  const feeds: FeedItem[]=[];

  if (data) {
    data.forEach((item) => {
      feeds.push({
        title: item.title!,
        description: item.description!,
        type: item.category!,
        image: item.banner||'',
        category: item.category!,
        tags: item.tags!,
        slug: item.id
      });
    });
  }

  return {
    props: {
      feedList: feeds
    },
  };
}

export default Dashboard;