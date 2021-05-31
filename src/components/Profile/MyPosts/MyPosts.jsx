import { React } from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
   return (
      <div>
         <div className={mod.article__posts}>
            <div className={mod.article__title}>My posts</div>
            <textarea className={mod.article__textarea} placeholder="your news..." />
            <button className={mod.article__btn}>Send</button>
         </div>
         <Post message='Hello' like='like: 20' />
         <Post message='world' like='like: 15' />
      </div>
   )
}


export default MyPosts;