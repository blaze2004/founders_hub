import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Category, FormInputField, NewFeedItemCreateType } from '@/types/feed'


const FormInputField=({ value, setValue, title, palceholder }: FormInputField) => {
  return (
    <div className="relative rounded-md">
      <h3 className="text-sm font-medium p-3">
        {title}
      </h3>
      <input
        type="text"
        className="w-full rounded-md p-3"
        placeholder={palceholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

const CreateContent=() => {

  const [category, setCategory]=useState<Category>(Category.Idea);
  const [title, setTitle]=useState<string>('');
  const [content, setContent]=useState<object>({});

  const categories: NewFeedItemCreateType[]=[
    {
      title: Category.Event,
      fields: [
        {
          title: 'Title',
          palceholder: 'Enter title',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Content',
          palceholder: 'Enter description',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Tags',
          palceholder: 'Enter tags',
          value: title,
          setValue: setTitle,
        },
      ],
    },
    {
      title: Category.Idea,
      fields: [
        {
          title: 'Title',
          palceholder: 'Enter title',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Description',
          palceholder: 'Enter description',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Tags',
          palceholder: 'Enter tags',
          value: title,
          setValue: setTitle,
        },
      ],
    },
    {
      title: Category.Resource,
      fields: [
        {
          title: 'Title',
          palceholder: 'Enter title',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Description',
          palceholder: 'Enter description',
          value: title,
          setValue: setTitle,
        },
        {
          title: 'Tags',
          palceholder: 'Enter tags',
          value: title,
          setValue: setTitle,
        },
      ],
    }
  ];

  return (
    <div className='p-8 min-h-screen'>

      <div className='flex justify-center items-center w-full'>
        <div className="w-full max-w-screen-lg px-2 sm:px-0">
          <h2 className='text-left mt-2 font-display text-3xl font-bold drop-shadow-sm md:text-5xl'>New Post</h2>
          <Tab.Group>
            <div className='px-2 py-16 sm:px-0'>
              <Tab.List className="flex max-w-lg space-x-1 rounded-xl bg-blue-900/20 p-1 dark:bg-deep-purple/60">
                {categories.map((category) => {

                  ({ selected }: { selected: boolean }) => {
                    selected? setCategory(category.title):null;
                  }

                  return ((
                    <Tab
                      key={category.title}
                      className={({ selected }: { selected: boolean }) =>
                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-deep-purple dark:text-white focus:outline-none
                    ${selected? 'bg-white text-deep-purple dark:bg-deep-purple shadow':'hover:bg-deep-purple/40 hover:text-white'}`
                      }
                    >
                      {category.title}
                    </Tab>
                  ));
                })
                }
              </Tab.List>
            </div>
            <Tab.Panels className="mt-2">
              {categories.map((category, idx) => (
                <Tab.Panel
                  key={idx}
                  className=''
                >
                  <div>
                    {
                      category.fields.map((field, idx) => (
                        <FormInputField
                          key={idx}
                          {...field}
                        />
                      ))
                    }
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <button className='button-large mt-4'>Post</button>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;