import React from 'react';

export const Box = ({ children, pullDown, pullUp, className, style, bg }) => (
  <div className={`mb3 z4 bg-gray-faint ${className} `} style={style}>
    <div
      className={`${bg} scroll-styled scroll-auto hmax360`}
      style={{ minHeight: '248px' }}
    >
      {children}
    </div>
  </div>
);
