/**
 * Menu component for main navigation
 * 
 * @constant {Array} NAV - List of al items in menu
 * @returns {JSX.Element} - The React component that display the nav
 */

import { NavLink } from 'react-router-dom';
import STYLES from './nav.module.css';

const NAV = [
  {
    id: 0,
    url: '/',
    title: 'All'
  },
  {
    id: 1,
    url: '/favorites',
    title: 'My faves'
  }
];

export const Nav = () => {
  return (
    <div className={STYLES.main}>
      {NAV.map(({ id, url, title }) => (
        <NavLink to={url} className={({ isActive }) => `${STYLES.button} ${isActive ? STYLES.buttonActive : ''}`} key={id}>
          {title}
        </NavLink>
      ))}
    </div>
  );
};
