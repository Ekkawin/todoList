import React from 'react';

export const TaskCard = (props) => {
  return (
    <div className="flex justify-start items-center w-full border border-gray-600 py-2 px-2 rounded-md text-base text-black mt-4">
      {props.children}
    </div>
  );
};
