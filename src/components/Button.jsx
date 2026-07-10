import React from 'react';

const Button = ({ children, onClick, className = 'py-[18px] px-[32px] bg-[#FF4081] text-white border-none rounded-[12px] text-base font-semibold cursor-pointer transition-all duration-300 hover:bg-[#e73475] hover:-translate-y-[2px]' }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
