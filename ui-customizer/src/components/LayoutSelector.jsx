import React from 'react';

const LayoutSelector = ({ layout, setLayout }) => {
  return (
    <div>
      <label>Layout: </label>
      <select value={layout} onChange={(e) => setLayout(e.target.value)}>
        <option value="grid">Grid</option>
        <option value="list">List</option>
      </select>
    </div>
  );
};

export default LayoutSelector;
