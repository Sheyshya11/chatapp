import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { CheckIcon } from "@heroicons/react/20/solid";

const socket = io.connect("http://localhost:5000");

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [recieveMsg, setReceiveMsg] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message: msg });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceiveMsg(data.message);
    });
  }, [socket]);
  return (
    <div className="flex flex-col mx-auto  justify-center relative isolate px-6 pt-6 lg:px-8">
      <input onChange={(e) => setMsg(e.target.value)} />
      <button
        type="button"
        onClick={() => sendMessage()}
        className="mt-5 inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
        Send Message
      </button>
     
      <div className=" mt-10 h-24">
        
        {recieveMsg}</div>
    </div>
  );
};

export default Chat;
