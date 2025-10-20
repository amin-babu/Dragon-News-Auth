import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
