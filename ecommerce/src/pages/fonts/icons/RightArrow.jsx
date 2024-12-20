import React from 'react';

const RightArrow = ({ size, color }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='-77 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M98 460L64 426 227 262 64 98 98 64 294 262 98 460Z' />
    </svg>
  );
};

export default RightArrow;
