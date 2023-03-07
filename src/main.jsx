import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCF1VyMLH3tU6SMsFRbnK8gR1RUEfxDUAw",
  authDomain: "coder-react-2023.firebaseapp.com",
  projectId: "coder-react-2023",
  storageBucket: "coder-react-2023.appspot.com",
  messagingSenderId: "115985571222",
  appId: "1:115985571222:web:1b5f6bc3504801f91f11b7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
