
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <img
        src={"/assets/logo/icon.png"}
        alt="Coresyncro Icon"
        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <img
        src={"/assets/logo/LogoText2.png"}
        alt="Coresyncro Infotech"
        className="h-8 object-contain group-hover:brightness-110 transition-all duration-300"
      />
    </Link>
  );
};

export default NavbarLogo;
