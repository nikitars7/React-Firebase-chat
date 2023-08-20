import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKEZ9p_eENxkH6lZ22yoWdp85boQAtuYE",
  authDomain: "reactchat-eb86c.firebaseapp.com",
  projectId: "reactchat-eb86c",
  storageBucket: "reactchat-eb86c.appspot.com",
  messagingSenderId: "624352808809",
  appId: "1:624352808809:web:e9c20671ac26942a83b7f8",
  measurementId: "G-ZM66CHGL1P",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getStorage(app);
export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      auth,
      firestore,
      app,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);
