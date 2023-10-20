import { Headerprops, NavBarItem } from '@/types';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import ThemeSelector from './layout/theme_chooser';
import { IoLogOut } from 'react-icons/io5';
import { FaCalendar, FaHome, FaUser } from 'react-icons/fa';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '@/types/database.types';

const NavbarItem=({ title, route, icon }: NavBarItem) => {
  const router=useRouter();
  const active=router.pathname===route;

  return (
    <button
      className={`${active? 'bg-light-purple text-white':''} group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2`}
      onClick={() => !active? router.push(route):{}}
    >
      {icon}
      <p>{title}</p>
    </button>
  );
}

const SideNavbar=() => {

  const navbaritems: NavBarItem[]=[
    {
      title: 'Home',
      icon: <FaHome className="mr-2 h-5 w-5" />,
      route: '/dashboard',
    },
    {
      title: 'Events',
      icon: <FaCalendar className="mr-2 h-5 w-5" />,
      route: '/events',
    },
    {
      title: 'Profile',
      icon: <FaUser className="mr-2 h-5 w-5" />,
      route: '/profile',
    },
  ];

  const supabase=useSupabaseClient<Database>();
  const router=useRouter();

  const handleLogout=async () => {
    await supabase.auth.signOut();
    router.push('/');
  }

  return (
    <div className="p-4 ring-1 ring-gray-200 dark:ring-white h-screen w-56 flex flex-col justify-between dark:bg-black">
      <div>
        <Link className='flex items-center font-display text-2xl mb-8' href='/'>
          <Image
            title='Founders Hub logo'
            alt='Founders Hub logo'
            src='/logo.png'
            className='mr-2 rounded-lg'
            height={50}
            width={220}
            style={{ color: 'transparent' }}
          />
        </Link>
        {
          navbaritems.map((item, key) => (
            <NavbarItem {...item} key={key} />
          ))
        }
      </div>
      <div>
        <button
          className='flex items-center space-x-2 button-small bg-red-700 border-red-900 my-2 w-full'
          onClick={handleLogout}
        >
          <IoLogOut />
          <p>Logout</p>
        </button>
        <ThemeSelector />
      </div>
    </div>
  );
}

export const Drawer=({ setIsDrawerOpen }: Headerprops) => {
  return (

    <div className="fixed top-0 left-0 w-full h-full min-h-screen z-40 flex items-center backdrop-blur-sm bg-white/50 dark:bg-black/50 flex">
      <SideNavbar />
      <section
        className=" w-full h-full cursor-pointer "
        onClick={() => setIsDrawerOpen(false)}
      ></section>
    </div>
  )
}

export default SideNavbar;