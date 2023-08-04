import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyPost from './myPost';
import reportWebVitals from './reportWebVitals';


const informations = {
  id: 0,
  avatar:"../public/img/kenAvatar.png",
  name: "KenB",
  nickname: "@KenBarby",
  date: " 02/08/2023",
  text: "It's definitly yours?? It's yellow",
  content: "kenPost",  
  comments: 7,
  repost: 5,
  like: 15
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyPost {...informations}/>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
