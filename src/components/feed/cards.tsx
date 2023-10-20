import { FeedItem } from '@/types/feed';
import Image from 'next/image';

export const FeedCard=({ title, description, image, slug, category, tags }: FeedItem) => {
  return (
    <div className='text-white p-4 flex flex-col sm:flex-row'>
      <div className='p-6'>
        <div className='py-2 text-sm font-medium text-gray-200'>
          {category}
        </div>
        <h2 className='mb-2 text-xl font-semibold text-white'>{title}</h2>
        <p className='mb-4 text-gray-400'>{description}</p>
        <div className="py-2 text-sm my-2">
                    published in <p className="font-medium text-gray-200 inline-flex">{'Founders Hub'}</p>
        </div>
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
          src={image}
          alt='thumbanil'
          width={150}
          height={150}
        />
      </div>
    </div>
  );
}