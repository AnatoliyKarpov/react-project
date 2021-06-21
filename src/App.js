import { React } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = (props) => {


   return (
      <BrowserRouter>
         <div className="app-wrapper">
            <div className="app-inner">
               <Header />
               <Navbar />
               <div className="grid-wrapper">
                  <Route path="/dialogs" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs} />} />
                  <Route path="/profile" render={() => <Profile postData={props.postData} />} />
                  <Route path="/news" />
                  <Route path="/music"  />
                  <Route path="/settings"/>
               </div>
            </div>
         </div>
      </BrowserRouter>
   )
}




export default App;
