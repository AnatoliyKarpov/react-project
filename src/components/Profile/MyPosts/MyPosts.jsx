import { React } from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   


   let posts = props.postData.map( p => <Post id={p.id} message={p.message} like={p.likesCount} />)
   return (
      <div>
         <div className={mod.article__posts}>
            <div className={mod.article__title}>My posts</div>
            <textarea className={mod.article__textarea} placeholder="your news..." />
            <button className={mod.article__btn}>Send</button>
         </div>
         {posts}
      </div>
   )
}


export default MyPosts;
