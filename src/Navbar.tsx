import React, { useState } from 'react';

interface NavLink {
  name: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [active, setActive] = useState<string>(links[0]?.href || '');

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 justify-center">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`text-white px-3 py-2 rounded transition font-medium ${
                active === link.href ? 'font-bold bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
