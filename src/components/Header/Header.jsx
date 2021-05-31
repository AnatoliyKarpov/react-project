import { React } from 'react';
import header from './Header.module.css';


const Header = () => {
   return (
      <header className={`${header.header} ${header.active}`}>
         <img className={header.img} src="https://i.pinimg.com/originals/e4/49/15/e4491587c4357fc379045e576aa3f65e.jpg" alt="alt" />
      </header>
   )
}


export default Header;