import { React } from 'react';
import navbar from './Navbar.module.css';


const Navbar = () => {
   return (
      <nav className={navbar.nav}>
         <ul className={navbar.ul}>
            <li className={navbar.li}><a href="#s">Profile</a></li>
            <li className={navbar.li}><a href="#s">Messages</a></li>
            <li className={navbar.li}><a href="#s">News</a></li>
            <li className={navbar.li}><a href="#s">Music</a></li>
            <li className={navbar.li}><a href="#s">Settings</a></li>
         </ul>
      </nav>
   )
}


export default Navbar;