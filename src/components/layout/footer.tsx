const Footer=() => {
  return (
    <div className='w-full border-t border-gray-200 dark:border-white-200 py-5 text-center self-end bg-white dark:bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center'>
        <div className='text-center sm:text-left'>
          <p className='text-sm dark:text-white'>
            &copy; 2023 Founders Hub. All rights reserved.
          </p>
        </div>
        <div className='flex flex-col mt-4 sm:mt-0 sm:flex-row'>
          <a
            href='#'
            className='text-gray-800 hover:text-gray-400 ml-4 dark:text-white'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;