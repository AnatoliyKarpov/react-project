import { React } from 'react';
import { NavLink } from 'react-router-dom';
import mod from './DialogItem.module.css';


const DialogItem = (props) => {
   return (
      <li className={mod.dialogs__chat_name}>
         <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </li>
   )
}





export default DialogItem