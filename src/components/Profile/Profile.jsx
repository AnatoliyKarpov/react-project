import { React } from 'react';
import MyPosts from './MyPosts/MyPosts';
import mod from './Profile.module.css';


const Profile = () => {
   return (
      <article className={mod.article}>
         <img className={mod.article__img} src="https://alexmartin.cloud/assets/images/blog/blog1/react-js-banner.png" alt="alt"></img>
         <div className={mod.article__content}>
            <img className={mod.article__ava} src="https://zastavok.net/main/minimalizm/1446487505.jpg" alt="alt"></img>
            <div className={mod.article__info}>
               <div className={mod.article__name}>Anatoliy Karpov</div>
               <div className={mod.article__data}>Date of Birtf: 23 may</div>
               <div className={mod.article__city}>City: Odessa</div>
               <div className={mod.article__edu}>BSU`11</div>
               <div className={mod.article__site}>Web site: https://site.com</div>
            </div>
         </div>
         <MyPosts/>
      </article>
   )
}


export default Profile;