import React from 'react';

const SectionTitle = ({ overline, title }) => {
  return (
    <div className="heading">
      <span>{overline}</span>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  );
};

export default SectionTitle;
