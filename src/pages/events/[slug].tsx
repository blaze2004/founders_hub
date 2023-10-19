import { Event } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';

const EventInfo=({ title, description, speaker, speakerInfo, eventInfo, eventVideo }: Event) => {
  return (
    <div>
      Hi
    </div>
  );
}

export const getStaticPaths: GetStaticPaths=async () => { 
  return {
    paths: [

    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps=async () => {
  return {
    props: {

    },
  };
}

export default EventInfo;