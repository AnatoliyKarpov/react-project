import { React } from 'react';
import mod from './Message.module.css';


const MessageItem = (props) => {
   return (
      <div className={mod.dialogs__screen_messages}>
         {props.message}
      </div>
   )
}





export default MessageItem;