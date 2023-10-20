import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaDesktop } from 'react-icons/fa';
import { BiMenu, BiPlus } from 'react-icons/bi';
import { Headerprops } from '@/types';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

const Header=({ setIsDrawerOpen }: Headerprops) => {

  const [isScrolled, setIsScrolled]=useState(false);
  const { theme, setTheme }=useTheme();
  const session=useSession();
  const router=useRouter();

  useEffect(() => {
    const handleScroll=() => {
      const scrollTop=window.scrollY;
      if (scrollTop>0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full bg-black ${isScrolled||session
        ? 'border-b border-black-100 '
        :''} z-30 transition-all text-white`}
    >
      {
        session? (
          <div className='mx-5 flex max-w-screen-xl items-center justify-between md:justify-end xl:mx-auto'>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden"
            >
              <BiMenu />
            </button>
            <button
              className='flex items-center space-x-2 button-small my-4'
              onClick={() => router.push('/new')}
            >
              <BiPlus />
              <p>Create</p>
            </button>
          </div>
        ):
          (<div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link className='flex items-center font-display text-2xl' href='/'>
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
            <div className='flex items-center justify-center'>
              <button
                aria-label='change-theme'
                className='px-2 py-2 rounded-md hover:text-gray-500 sm:ml-4 focus:outline-none ring-2 ring-deep-purple'
                onClick={() => setTheme(theme==='dark'? 'light':'dark')}
              >
                {theme===undefined
                  ? <FaDesktop />
                  :theme==='dark'? <FaSun />:<FaMoon />}
              </button>
            </div>
          </div>
          )
      }
    </div>
  )
}

export default Header;