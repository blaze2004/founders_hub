import React from 'react'

const FindMentor = () => {
  return (
    <div className="bg-black flex flex-col p-4 py-10 justify-center items-center">
      <div className="text-white p-4">
        <h1 className="text-center font-display text-4xl font-bold drop-shadow-sm md:text-6xl">
          Find a{" "}
          <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-red-600 mb-4 bg-clip-text text-center font-display font-bold text-transparent drop-shadow-sm">
            Mentor
          </span>
        </h1>
      </div>
      <div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-2xl pt-4 pb-2 font-semibold leading-7 text-white">
            Super Charge your Career
          </h2>
          <p className="mt-1 text-md leading-6 text-gray-300">
            Get support, feedback, and guidance from mentors
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-300"
              ></label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First Name"
                  className="block w-full rounded-full pl-4 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  placeholder="Last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-full pl-4 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email"
                  className="block w-full rounded-full pl-4 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block font-medium leading-6 text-white text-xl"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-lg px-4 border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-white hover:bg-black hover:text-white border border-white text-black font-bold py-2 px-6 rounded-full">
        Find a Mentor
      </button>
    </div>
  );
}

export default FindMentor