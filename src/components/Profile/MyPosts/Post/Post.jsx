import { React } from 'react';
import mod from './Post.module.css';
import PostInfo from './PostInfo/PostInfo';




const Post = (props) => {
   return (
      <div className={mod.article__inner}>
         <div className={mod.article__comments}>
            <img className={mod.article__ava} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYV_UvyMYUR4mzeF8jW3Ksp5Vwa6RYLnlbg&usqp=CAU" alt="alt"></img>
            <div className={mod.article__comment}>{props.message}</div>
         </div>
         <div className={mod.article__like}>{props.like}</div>
      </div>
   )
}


export default Post;