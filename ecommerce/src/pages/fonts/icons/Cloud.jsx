import React from 'react';
const CloudIcon = ({ size, color }) => {
  return (
    <svg
      fill={color}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M17,9a4.08,4.08,0,0,0-.93.12,5,5,0,0,0-9,2.09A3,3,0,1,0,6,17H17a4,4,0,0,0,0-8Z'
        style={{
          fill: 'none',
          stroke: '#3498db',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '3',
        }}
      />
    </svg>
  );
};

export default CloudIcon;
