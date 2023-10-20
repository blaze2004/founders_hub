import InteractiveEditor from '@/components/feed/editor';
import { Database } from '@/types/database.types';
import { FeedItem } from '@/types/feed';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { GetStaticPaths, GetStaticProps } from 'next';

const Post=({ category, title, tags, content }: FeedItem) => {
  return (
    <div className='flex items-center justify-center min-h-screen w-full my-4'>
      <div className='w-full max-w-screen-lg px-2 sm:px-0'>
        <h2 className='mt-2 font-display text-3xl font-bold drop-shadow-sm md:text-5xl'>{title}</h2>
        <div className='button-small inline-block mt-4'>
          {category}
        </div>
        <InteractiveEditor defaultContent={content!} setValue={() => { }} editMode={false} title={''} />
        <div className='flex flex-wrap space-x-2 mt-2'>
          {tags&&tags.map(tag => (
            <span
              key={tag}
              className='px-2 py-1 text-sm font-medium text-gray-400 ring-1 ring-gray-600 rounded-lg'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths=async () => {
  const supabase=createPagesBrowserClient<Database>();

  const { data, error }=await supabase.from('Feed').select('*')
    .limit(10);

  if (error||!data) {
    return {
      paths: [],
      fallback: true,
    }
  }

  return {
    paths: data.map((item) => ({ params: { id: `${item.id}` } })),
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps=async ({ params }) => {

  const supabase=createPagesBrowserClient<Database>();
  const slug=params?.id;

  if (!slug) {
    return {
      notFound: true
    }
  }

  const { data, error }=await supabase.from('Feed').select('*').eq('id', parseInt(slug as string)).limit(1);

  if (error||!data) {
    return {
      notFound: true
    }
  }

  const feed: FeedItem={
    type: data[0].category!,
    title: data[0].title!,
    description: data[0].description||'',
    content: data[0].content!,
    image: data[0].banner||'',
    slug: data[0].id!,
    tags: data[0].tags!,
    category: data[0].category!,
  };

  console.log(feed);

  return {
    props: {...feed}
  };
}

export default Post;