import { FeedItem } from '@/types/feed';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const FeedCard=({ title, description, image, slug, category, tags }: FeedItem) => {
  const router=useRouter();
  const banner=image.length>0? image:'https://lxwqnvavqhptvyysvimw.supabase.co/storage/v1/object/sign/avatars/back_ground_img_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2JhY2tfZ3JvdW5kX2ltZ18xLmpwZyIsImlhdCI6MTY5NzgxMzgyNiwiZXhwIjoyMDEzMTczODI2fQ.ecVWiASk6bYyj4TWITjmZQaYKP1ayinXkKr2jcauFBE';
  
  return (
    <div className='text-white p-4 flex flex-col sm:flex-row sm:items-center' onClick={()=>router.push(`post/${slug}`)}>
      <div className='p-6'>
        <div className='py-2 text-sm font-medium text-gray-200'>
          {category}
        </div>
        <h2 className='mb-2 text-xl font-semibold text-white'>{title}</h2>
        <p className='mb-4 text-gray-400 max-w-screen-md'>{description}</p>
        <div className='flex flex-wrap space-x-2'>
          {tags.map(tag => (
            <span
              key={tag}
              className='px-2 py-1 text-sm font-medium text-gray-400 ring-1 ring-gray-600 rounded-lg'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='rounded-lg'>
        <Image
          className='object-cover w-full h-48 rounded-lg'
          src={banner}
          alt='thumbanil'
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}