import React from 'react';

const FontSelector = ({ font, setFont }) => {
  return (
    <div>
      <label>Font Style: </label>
      <select value={font} onChange={(e) => setFont(e.target.value)}>
        <option value="Arial">Arial</option>
        <option value="Courier New">Courier New</option>
        <option value="Georgia">Georgia</option>
        <option value="Verdana">Verdana</option>
      </select>
    </div>
  );
};

export default FontSelector;
