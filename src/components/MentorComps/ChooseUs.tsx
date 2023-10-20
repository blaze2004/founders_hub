import React from 'react'

const ChooseUs = () => {
  return (
    <div className="flex flex-col p-4 justify-center items-center bg-white">
      <div className='text-black p-4'>
        <h1 className='text-center font-display text-4xl font-bold drop-shadow-sm md:text-6xl'>
                Why Choose {' '} 
          <span className='bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text text-center font-display font-bold text-transparent drop-shadow-sm'>Us</span>
        </h1>
      </div>
      <div className="bg-white flex flex-row w-[70%]">
        {/* Left */}
        <div className="w-1/2 text-black flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Learn</h1>
            <p className="text-xs">Learn multitudes Faster with us</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Network</h1>
            <p className="text-xs">Network with our mentors who will always be there to help you</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Excel</h1>
            <p className="text-xs">Ask your questions and talk to our experts live</p>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 flex items-center justify-center">
          <img src="/chooseUs.gif" />
        </div>
      </div>
    </div>
  );
}

export default ChooseUs