import { React } from 'react';
import { NavLink } from 'react-router-dom';
import mod from './Navbar.module.css';


const Navbar = () => {
   return (
      <nav className={mod.nav}>
         <ul className={mod.ul}>
            <li className={mod.li}><NavLink activeClassName={mod.active} to="/profile">Profile</NavLink></li>
            <li className={mod.li}><NavLink activeClassName={mod.active} to="/dialogs">Messages</NavLink></li>
            <li className={mod.li}><NavLink activeClassName={mod.active} to="/news">News</NavLink></li>
            <li className={mod.li}><NavLink activeClassName={mod.active} to="/music">Music</NavLink></li>
            <li className={mod.li}><NavLink activeClassName={mod.active} to="/settings">Settings</NavLink></li>
         </ul>
      </nav>
   )
}


export default Navbar;