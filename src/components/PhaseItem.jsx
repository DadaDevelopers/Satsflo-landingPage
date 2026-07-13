import React from 'react';

const PhaseItem = ({ color, title, text }) => {
  const gradients = {
    menstrual: 'from-[#F43B3B] to-[#8E2222]',
    follicular: 'from-[#EC59C0] to-[#F7D5FF]',
    ovulation: 'from-[#FFFF00] to-[#FF8800]',
    luteal: 'from-[#F0F0F1] to-[#70A9FE]'
  };

  return (
    <div className="flex items-start gap-[15px] text-left">
      <span className={`w-[18px] h-[18px] rounded-full mt-[3px] lg:mt-[4px] shrink-0 bg-gradient-to-b ${gradients[color]}`}></span>
      <p className="text-[14px] lg:text-[18px] leading-normal text-[#212121] font-sans font-semibold tracking-[-0.02em]">
        <strong className="font-bold tracking-[-0.02em]">{title}:</strong> {text}
      </p>
    </div>
  );
};

export default PhaseItem;
