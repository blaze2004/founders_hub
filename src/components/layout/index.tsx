import { CustomComponentProps } from '@/types';
import Footer from './footer';
import Header from './header';
import Head from 'next/head';

const IndexLayout=({ children }: CustomComponentProps) => {
  return (
    <div className='dark:bg-black'>
      <Head>
        <title>Founder&apos;s Hub</title>
        <meta
          name='description'
          content='Founders Hub - The global community of founders.'
        />
        <meta property='og:title' content='Founders Hub' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/logo.png' />
        <meta property='og:description' content='Founders Hub - The global community of founders.' />
        <meta name='theme-color' content='#6B13FA' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo.png' />
      </Head>
      <Header />
      <div className='w-full py-5 text-center self-end'>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default IndexLayout;