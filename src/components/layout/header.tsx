import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun, FaDesktop } from 'react-icons/fa';

const Header=() => {

  const [isScrolled, setIsScrolled]=useState(false);
  const { theme, setTheme }=useTheme();

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
      className={`fixed top-0 w-full bg-black ${isScrolled
        ? 'border-b border-black-100 '
        :'bg-white/0'} z-30 transition-all text-white`}
    >
      <div className='mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto'>
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
          {/* <p className='font-display text-2xl font-bold drop-shadow-sm md:text-3xl'>
            Founder&apos; Hub
          </p> */}
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
    </div>
  )
}

export default Header;