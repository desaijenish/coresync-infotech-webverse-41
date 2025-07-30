
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="w-10 h-10 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <span className="text-white font-bold text-lg">C</span>
      </div>
      <span className="text-xl font-bold text-foreground group-hover:text-coresync-primary-light transition-colors duration-300">Coresync Infotech</span>
    </Link>
  );
};

export default NavbarLogo;
