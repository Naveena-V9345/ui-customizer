import React from 'react';
import './Preview.css'; // write simple styling here

const Preview = ({ theme, font, layout }) => {
  return (
    <div className={`preview ${theme} ${layout}`} style={{ fontFamily: font }}>
      <h2>Live Preview Area</h2>
      <p>This text reflects your theme, font, and layout changes in real time.</p>
    </div>
  );
};

export default Preview;
