import { React } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/profile';



const App = () => {
   return (
      <div className="app-wrapper">
         <div className="app-inner">
            <Header/>
            <Navbar/>
         </div>
      </div>
   )
}




export default App;
