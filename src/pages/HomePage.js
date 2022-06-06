import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createRoom = e => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("created successfully");
    // console.log(textInput.current.value);
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Room Id and username is required");
      return;
    }

    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = e => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  // let textInput = React.createRef();
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="" alt="" />
        <h4 className="mainLabel">paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            // ref={textInput}
            type="text"
            className="inputBox"
            placeholder="Room Id"
            onChange={e => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="User Name"
            onChange={e => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a onClick={createRoom} href="" className="createNewBtn">
              new Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with ❤ &nbsp; by{" "}
          <a href="https://github.com/GhadiyaVishal">Vishal Ghadiya</a>
        </h4>
      </footer>
    </div>
  );
};

export default HomePage;
