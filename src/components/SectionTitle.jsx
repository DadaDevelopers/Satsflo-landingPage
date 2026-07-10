import React from 'react';

const SectionTitle = ({ overline, title }) => {
  return (
    <div className="text-center mb-[70px]">
      <span className="text-[#ff4081] tracking-[3px] text-[16px] font-bold font-serif uppercase">
        {overline}
      </span>
      <h2
        className="mt-[15px] text-[26px] md:text-[48px] leading-[1.2] text-[#090909] font-sans font-bold"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
};

export default SectionTitle;
