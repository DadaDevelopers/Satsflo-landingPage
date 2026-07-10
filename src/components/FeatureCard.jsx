import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border border-[#ffccdd] rounded-[20px] p-[40px] text-center bg-white transition-all duration-300 hover:-translate-y-[8px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
      <div className="w-[120px] h-[120px] bg-[#ff4081] rounded-full flex justify-center items-center mx-auto">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-[70px] mix-blend-screen" />
        ) : (
          React.createElement(icon, { size: 56, color: '#FFFFFF', strokeWidth: 1.75 })
        )}
      </div>
      <h3 className="mt-[35px] text-[28px] md:text-[32px] font-serif font-bold text-[#090909] leading-none tracking-[-0.04em]">
        {title}
      </h3>
      <p className="mt-[15px] text-[#555555] text-[16px] leading-[1.5] font-sans">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
