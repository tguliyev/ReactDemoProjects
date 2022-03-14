import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Content() {
//   return (
//     <div>
//       <h1>Hello My Incredible Future</h1>
//       <p>I Will See You Very Soon</p>
//     </div>
//   );
// }

var Content = document.createElement("h1");
Content.textContent = "Hello My Incredible Future!!!";
document.getElementById("root").append(Content);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Content />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <ul>
//     <li>Hello My Incredible Future!!!</li>
//     <li>This will be very soon</li>
//   </ul>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();