import { React } from 'react';
import mod from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Message/Message';




const Dialogs = (props) => {


   let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)




   let messagesElemets = props.messages.map( m => <MessageItem message={m.message} id={m.id}/>)

   return (
      <div className={mod.dialogs__inner}>
         <div className={mod.dialogs__chats}>
            <h1 className={mod.dialogs__title}>
               Dialogs
            </h1>
            <ul className={mod.dialogs__chat}>
               {dialogsElements}
            </ul>
         </div>
         <span className={mod.dialogs__line}></span>
         <div className={mod.dialogs__screen}>
            <div className={mod.dialogs__screen_messages}>
               <div className={mod.dialogs__screen_who}>
                  <img className={mod.dialogs__screen_foto} src="https://png.pngtree.com/png-clipart/20210115/ourlarge/pngtree-smile-face-3d-emoji-png-image_2742611.jpg" alt="img" />
                  <div className={mod.dialogs__screen_name}>
                     Kirill
                  </div>
               </div>
               {messagesElemets}
            </div>
            </div>
         </div>

         )
}




         export default Dialogs