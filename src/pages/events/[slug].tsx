import { Event } from '@/types';
import { GetStaticProps } from 'next';

const EventInfo=({ title, description, speaker, speakerInfo, eventInfo, eventVideo }: Event) => {
  return (
    <div>
      Hi
    </div>
  );
}

export const getStaticProps: GetStaticProps=async () => {
  return {
    props: {

    },
  };
}

export default EventInfo;