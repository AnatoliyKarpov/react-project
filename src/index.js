import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogs = [
   { id: 1, name: 'Kirill' },
   { id: 2, name: 'Masha' },
   { id: 3, name: 'Stas' },
   { id: 4, name: 'Stepa' },
   { id: 5, name: 'Anton' }
]

let messages = [
   { id: 1, message: 'Hello bro' }
]


let postData = [
   {id: 1, message: 'Hello', likesCount: 20}, 
   {id: 2, message: 'how are you?', likesCount: 10}
]
ReactDOM.render(

  <React.StrictMode>
    <App postData={postData} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
