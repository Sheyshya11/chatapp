import React from "react";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";



const App = () => {
  return (
    <div>
      <div className="flex h-screen ">
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to ='/'/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
