import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

const App = () => {
  return (
    <div>
      <div className="flex h-screen ">
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
