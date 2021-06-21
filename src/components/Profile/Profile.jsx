import { React } from 'react';
import MyPosts from './MyPosts/MyPosts';
import mod from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {


   return (
      <article className={mod.article}>
         <ProfileInfo />
         <MyPosts postData={props.postData} />
      </article>
   )
}


export default Profile;