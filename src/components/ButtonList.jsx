import React from 'react';
const ButtonList = () => {
  const list = ['All', 'Trading', 'Stock Market', 'Movies', 'Development', 'Comedy', 'Music', 'Podcast', 'Vlogs', 'Business'];

  return (
    <div className='ml-10'>
      {list.map((item) => (
        <button key={item} className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{item}</button>
      ))}
    </div>
  );
};

export default ButtonList;
