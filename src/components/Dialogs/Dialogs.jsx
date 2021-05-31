import { React } from 'react';
import mod from './Dialogs.module.css'




const Dialogs = () => {
   return (
      <div className={mod.dialogs__inner}>
         <div className={mod.dialogs__chats}>
            <h1 className={mod.dialogs__title}>
               Dialogs
            </h1>
            <ul className={mod.dialogs__chat}>
               <li className={`${mod.dialogs__chat_name} ${mod.active}`}>
                  Kirill
               </li>
               <li className={mod.dialogs__chat_name}>
                  Denis
               </li>
               <li className={mod.dialogs__chat_name}>
                  Sasha
               </li>
            </ul>
         </div>
         <span className={mod.dialogs__line}></span>
         <div className={mod.dialogs__screen}>
            <div className={mod.dialogs__screen_messages}>
               <div className={mod.dialogs__screen_who}>
                  <img className={mod.dialogs__screen_foto} src="https://png.pngtree.com/png-clipart/20210115/ourlarge/pngtree-smile-face-3d-emoji-png-image_2742611.jpg"/>
                  <div className={mod.dialogs__screen_name}>
                     Kirill
                  </div>
               </div>
               <div className={mod.dialogs__screen_message}>
                  Hi bro, how are u?
               </div>
            </div>
         </div>
      </div>

   )
}




export default Dialogs