import React from 'react';
const ButtonList = () => {
  const list = ['All', 'Trading', 'Stock Market', 'Development', 'Comedy', 'Music', 'Podcast', 'Vlogs', 'Business'];

  return (
    <div>
      {list.map((item) => (
        <button key={item} className='px-5 py-2 m-2 ml-5 bg-gray-200 rounded-lg'>{item}</button>
      ))}
    </div>
  );
};

export default ButtonList;
