import { CustomComponentProps } from '@/types';
import Footer from './footer';
import Header from './header';
import Head from 'next/head';
import { useState } from 'react';
import SideNavbar, { Drawer } from '../drawer';
import { useSession } from '@supabase/auth-helpers-react';

const IndexLayout=({ children }: CustomComponentProps) => {
  const [isDrawerOpen, setIsDrawerOpen]=useState(false);
  const session=useSession();

  return (
    <div className='dark:bg-black-800'>
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

      <div className='flex h-screen'>
        <div className="hidden md:block">
          {
            session&&(<SideNavbar />)
          }
        </div>
        <div className='w-full h-full overflow-y-scroll'>
          {(isDrawerOpen&&session)&&(<Drawer setIsDrawerOpen={setIsDrawerOpen} />)}
          <Header setIsDrawerOpen={setIsDrawerOpen} />
          <div className='w-full grow p-8 pt-16'>
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default IndexLayout;