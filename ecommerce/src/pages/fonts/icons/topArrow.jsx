import React from 'react';
const TopArrow = ({ size, color }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='0 -6 524 524'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M460 321L426 355 262 192 98 355 64 321 262 125 460 321Z' />
    </svg>
  );
};

export default TopArrow;
