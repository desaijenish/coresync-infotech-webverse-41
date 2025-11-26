
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-Coresyncro-primary-light"
      aria-label="Toggle theme"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {theme === 'light' ? (
            <span className="text-xs">☀️</span>
          ) : (
            <span className="text-xs">🌙</span>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
