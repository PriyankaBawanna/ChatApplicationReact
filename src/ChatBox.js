import React, { useEffect, useState } from "react";

import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";

const ChatBox = () => {
  const [userName, setUserName] = useState("");
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");

  const db = getDatabase();

  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
      console.log("user", data.val());
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, { name: userName, message: message });
    setMessage("  ");
  };

  return (
    <>
      <div>
        {userName ? null : (
          <input
            type="text"
            placeholder="Enter Your Name "
            onBlur={(e) => {
              setUserName(e.target.value);
            }}
          />
        )}
      </div>
      <div>
        {userName ? (
          <div>
            <h1>User:{userName}</h1>
            {chats.map((c, i) => (
              <div
                key={i}
                className={`chatContainer ${
                  c.name === userName ? "chatContainerMe " : ""
                } `}
              >
                <p className="chatBubble">
                  <strong> {c.name} :</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}

            <div className="bottomOperation">
              <input
                type="text"
                value={message}
                placeholder="chat..."
                onInput={(e) => {
                  setMessage(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  sendChat();
                }}
              >
                Send
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default ChatBox;
