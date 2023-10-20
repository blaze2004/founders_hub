import { SnackbarProps } from '@/types';
import React, { useState } from 'react';

const Snackbar=({ message, type }: SnackbarProps) => {
  const [isOpen, setIsOpen]=useState(true);

  const getColor=() => {
    if (type==='error') {
      return 'bg-red-500';
    } else if (type==='success') {
      return 'bg-green-500';
    }
  };

  return (
    isOpen&&(
      <div
        className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${getColor()}`}
      >
        {message}
        <button
          className="ml-2 bg-white text-black p-2 rounded-full"
          onClick={() => setIsOpen(false)}
        >
        Close
        </button>
      </div>
    )
  );
};

export default Snackbar;
