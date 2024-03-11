import React from 'react';

const Highlight = ({ highlightColor, children }) => {
  return (
    <div style={{ backgroundColor: highlightColor }}>
      {children}
    </div>
  );
}

export default Highlight;
