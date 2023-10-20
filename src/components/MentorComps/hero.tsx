import React from 'react'

const Hero = () => {
  return (
    <div className="bg-black flex justify-center items-center">
      <div className="pt-20 p-2 flex flex-wrap w-[70%]">
        {/* left */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 p-4">
          <h1 className="text-center font-display text-4xl font-bold drop-shadow-sm md:text-6xl">
            All you Need is a {' '}
            <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text text-center font-display font-bold text-transparent drop-shadow-sm">
              Mentor
            </span>
          </h1>
          <p className="text-gray-300">
            Founders Hub&apos;s mentorship platform empowers founders by connecting
            them with experienced mentors, fostering growth and innovation
            within the startup ecosystem
          </p>
          {/* Buttons */}
          <div className='flex flex-row flex-wrap gap-2'>
            <button className="bg-white hover:bg-black hover:text-white border border-white text-black font-bold py-2 px-6 rounded-full">
              Find a Mentor
            </button>
            <button className="bg-black-500 border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded-full">
              Become a Mentor
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/mentor.png" />
        </div>
      </div>
    </div>
  );
}

export default Hero