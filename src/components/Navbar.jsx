import { React } from 'react';



const Navbar = () => {
   return (
      <nav className="app-nav">
         <ul className="app-ul">
            <li className="app-li"><a href="#">Profile</a></li>
            <li className="app-li"><a href="#">Messages</a></li>
            <li className="app-li"><a href="#">News</a></li>
            <li className="app-li"><a href="#">Music</a></li>
            <li className="app-li"><a href="#">Settings</a></li>
         </ul>
      </nav>
   )
}


export default Navbar;