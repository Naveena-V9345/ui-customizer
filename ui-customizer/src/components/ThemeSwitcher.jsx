import React from 'react';

const ThemeSwitcher = ({ theme, setTheme }) => {
  return (
    <div>
      <label>Theme: </label>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
