import { Event, StartupProfileProps } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';

const StartupProfile=({ name, description, website, banner, logo }: StartupProfileProps) => {
  return (
    <div>
      Hi
    </div>
  );
}

export const getStaticPaths: GetStaticPaths=async () => {
  // fetch from database to test add example paths
  // it means only events/test and events/test2 will be working
  return {
    paths: [
      { params: { username: 'test' } },
      { params: { username: 'test2' } },
    ],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps=async () => {
  // fetch from database to test simply pass example data
  return {
    props: {
      title: 'test',
      description: 'test',
      speaker: 'test',
      speakerInfo: 'test',
      eventInfo: 'test',
      eventVideo: 'test',
    },
  };
}

export default StartupProfile;