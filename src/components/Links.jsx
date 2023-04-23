import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All Articles' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} activeClassName="text-blue-900 border-b-2 dark:text-blue-950 border-blue-700 pb-2">{text}</NavLink>
    ))}
  </div>
);
