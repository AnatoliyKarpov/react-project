import { React } from 'react';



const Profile = () => {
   return (
      <article className="app-article">
         <img className="app-article__img" src="https://alexmartin.cloud/assets/images/blog/blog1/react-js-banner.png"></img>
         <div className="app-article__content">
            <img className="app-article__ava" src="https://img5.goodfon.ru/wallpaper/nbig/7/2d/yellow-smile-balloon-happy-smail-sharik-vozdushnyi-shar-zhel.jpg"></img>
            <div className="app-article__info">
               <div className="app-article__info-name">Anatoliy Karpov</div>
               <div className="app-article__info-birth">Date of Birtf: 23 may</div>
               <div className="app-article__info-city">City: Odessa</div>
               <div className="app-article__info-education">BSU`11</div>
               <div className="app-article__info-site">Web site: https://site.com</div>
            </div>
         </div>
         <div className="app-article__posts">
            <div className="app-article__posts-desc">My posts</div>
            <textarea className="app-article__posts-textarea" placeholder="your news..." />
            <button className="app-article__posts-btn">Send</button>
         </div>
         <div className="app-article__comments">
            <img className="app-article__ava" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYV_UvyMYUR4mzeF8jW3Ksp5Vwa6RYLnlbg&usqp=CAU"></img>
            <div className="app-article__comments-text">Anatoliy Karpov, hey whats up?</div>
            <div className="app-article__comments-text">Anatoliy Karpov, Wow, i like your avatar?</div>
         </div>
      </article>
   )
}


export default Profile;