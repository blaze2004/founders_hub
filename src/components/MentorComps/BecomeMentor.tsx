import React from 'react'

const BecomeMentor = () => {
  return (
    <div id="become-a-mentor" className="flex flex-col p-4 justify-center items-center bg-white">
      <div className="text-black p-4">
        <h1 className="text-center font-display text-4xl font-bold drop-shadow-sm md:text-6xl">
          Become a{' '}
          <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text text-center font-display font-bold text-transparent drop-shadow-sm">
            Mentor
          </span>
        </h1>
      </div>
      <div className="bg-white flex flex-row w-[70%]">
        {/* Left */}
        <div className="w-1/2 text-black flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Help</h1>
            <p className="text-xs">Help Others Achieve Their Goals</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-xs">Contribute to the community and give back</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Careers</h1>
            <p className="text-xs">Help flourishing Individual&apos;s careers</p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 pt-4">
            <button className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-2 px-6 rounded-full">
              Become a Mentor
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="w-1/2 flex items-center justify-center">
          <img src="/becomeMentor.gif" />
        </div>
      </div>
    </div>
  );
}

export default BecomeMentor
