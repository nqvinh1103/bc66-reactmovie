import React, { useEffect, useState } from 'react';
import Child from './Child';
import PostList from './PostList';

const DemoUseEffect = () => {
  // Rule của hooks
  /*
  - Chỉ sử dụng hooks trong function component
  - Đặt ở top level của body function component hoặc custom hooks
  */
  const [count, setCount] = useState(1);
  const [isClick, setIsClick] = useState(false);

  // TH1: có 1 tham số
  // useEffect(() => {
  //   // Chạy mỗi khi component được render
  //   console.log('Effect');
  // });

  // TH2: có 2 tham số là callback function và dependance - mảng rỗng
//   useEffect(() => {
    // Chạy 1 lần duy nhất sau khi component được render
    // Thường được dùng để call api
  //   console.log('Effect');
  // }, []);

  // TH3
  // useEffect(() => {
  //   console.log('Effect');
//   if(count<20){
  //   // setCount(count * 2);
// }
  // }, [count]);

  // TH4
  // useEffect();

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      {/* DemoUseEffect
      <hr />
      <p>Number: {count}</p>
      <button className="px-3 py-2 rounded bg-green-700 text-white" onClick={handleClick}>
        Click Me!
      </button>
      <button className="px-3 py-2 rounded bg-green-700 text-white" onClick={handleClick2}>
        Click Me 2!
      </button>
      <hr />
      {count == 5 && <Child />} */}
      <PostList/>
    </div>
  );
};

export default DemoUseEffect;
