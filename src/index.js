import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBslCmgB100hvxNdeJ3E6pBrUA879pngBM",
  authDomain: "react-chat-app-793f5.firebaseapp.com",
  databaseURL: "https://react-chat-app-793f5-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-793f5",
  storageBucket: "react-chat-app-793f5.appspot.com",
  messagingSenderId: "1042668708512",
  appId: "1:1042668708512:web:6defdf33dfcc106cb89fc5",
  measurementId: "G-ZSG3L61B79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
