import 'react-tagsinput/react-tagsinput.css'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Category, Feed, FormInputField, InputType, NewFeedItemCreateType } from '@/types/feed'
import InteractiveEditor from '@/components/feed/editor';
import TagsInput from 'react-tagsinput'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '@/types/database.types';
import { SnackbarProps } from '@/types';
import Snackbar from '@/components/snackbar';
import { FormInputFieldComponent } from '@/components/form';

const CreateContent=() => {

  const supabase=useSupabaseClient<Database>();
  const session=useSession();

  const [category, setCategory]=useState<Feed['category']>(Category.Idea);
  const [title, setTitle]=useState<Feed['title']>('');
  const [description, setDescription]=useState<Feed['description']>('');
  const [content, setContent]=useState<Feed['content']>({});
  const [tags, setTags]=useState<string[]>([]);
  const [isloading, setIsLoading]=useState<boolean>(false);
  const [snackbar, setSnackbar]=useState<SnackbarProps&{ show: boolean }>({ message: '', type: 'success', show: false });

  const titleField: FormInputField={
    title: 'Title',
    palceholder: 'Type title',
    value: title,
    setValue: setTitle,
    inputType: InputType.Text,
  };

  const descriptionField: FormInputField={
    title: 'Description',
    palceholder: 'Type description',
    value: description,
    setValue: setDescription,
    inputType: InputType.Text,
  }

  const contentField: FormInputField={
    title: 'Content',
    palceholder: 'Type content',
    value: title,
    setValue: setTitle,
    inputType: InputType.TextArea,
  };

  const tagsField: FormInputField={
    title: 'Tags',
    palceholder: 'Add tags',
    value: tags,
    setValue: setTags,
    inputType: InputType.Tags,
  };

  const categories: NewFeedItemCreateType[]=[
    {
      title: Category.Event,
      fields: [
        titleField,
        descriptionField,
        contentField,
        tagsField,
      ],
    },
    {
      title: Category.Idea,
      fields: [
        titleField,
        descriptionField,
        contentField,
        tagsField,
      ],
    },
    {
      title: Category.Resource,
      fields: [
        titleField,
        descriptionField,
        contentField,
        tagsField,
      ],
    }
  ];

  const handlePost=async () => {

    if (!title||!content||!tags||!category||!description) {
      return;
    }

    try {
      setIsLoading(true);

      const { error }=await supabase.from('Feed').insert({
        title: title,
        content: content,
        tags: tags as Feed['tags'],
        category: category as string,
        author: session?.user.id!,
        description: description,
      });

      if (error) {
        setSnackbar({
          message: 'Something unexpected happened while posting.',
          type: 'error',
          show: true,
        });
      } else {
        setSnackbar({
          message: 'Posted Successfully.',
          type: 'success',
          show: true,
        });
      }

    } catch (error) {
      setSnackbar({
        message: 'Something unexpected happened while posting.',
        type: 'error',
        show: true,
      });

    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className='p-8 min-h-screen mt-4'>
      {
        snackbar.show&&(<Snackbar message={snackbar.message} type={snackbar.type} />)
      }

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
                >
                  <div>
                    {
                      category.fields.map((field, idx) => (
                        field.inputType===InputType.TextArea?
                          (<InteractiveEditor key={idx} defaultContent={content} setValue={setContent} editMode title={field.title} />):(
                            field.inputType===InputType.Tags? (
                              <>
                                <h3 className="text-sm font-medium p-3 mt-4">
                                  {field.title}
                                </h3>
                                <TagsInput value={field.value as string[]} onChange={field.setValue} />
                              </>):(
                              <FormInputFieldComponent key={idx} {...field} />
                            )
                          )
                      ))
                    }
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <button className='button-large mt-4' onClick={handlePost}>
            {isloading&&(
              <svg className="w-5 h-5 mr-3 -ml-1 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
            )}
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateContent;