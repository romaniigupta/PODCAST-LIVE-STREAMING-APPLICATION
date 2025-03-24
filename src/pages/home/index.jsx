// import React ,{useState}from 'react';
// import { useNavigate } from 'react-router-dom';
// const HomePage=()=>{
//   const[roomCode,setRoomCode]=useState("");
//   const navigate=useNavigate();
// const handleFormSubmit=(ev)=>{
//   ev.preventDefault();
//   navigate(`/room/${roomCode}`);

// };
//   return(
//     <div className="home-page">
// <form onSubmit={handleFormSubmit} className='form'>
//   <div>
//     <label>Enter Room code</label>
//     <input value={roomCode} onChange={e=>setRoomCode(e.target.value)} type="text" required placeholder="enter room code" />
//   </div>
//   <button type='submit'>Enter Room</button>
// </form>
//     </div>
//   );
// };
// export default HomePage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './index.css';

// const HomePage = () => {
//   const [roomCode, setRoomCode] = useState("");
//   const navigate = useNavigate();

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     navigate(`/room/${roomCode}`);
//   };

//   const generateRoomCode = () => {
//     const generatedCode = `room-${Math.random().toString(36).substring(2, 8)}`;
//     setRoomCode(generatedCode);
//   };

//   return (
//     <div className="home-page">
//       <form onSubmit={handleFormSubmit} className="form">
//         <div>
//           <label>Enter or Generate Room Code</label>
//           <input
//             value={roomCode}
//             onChange={(e) => setRoomCode(e.target.value)}
//             type="text"
//             required
//             placeholder="Enter or generate room code"
//           />
//         </div>
//         <button type="button" onClick={generateRoomCode}>
//           Generate Room Code
//         </button>
//         <button type="submit">Enter Room</button>
//       </form>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css';

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  const generateRoomCode = () => {
    const generatedCode = `room-${Math.random().toString(36).substring(2, 8)}`;
    setRoomCode(generatedCode);
  };

  return (
    <div className="home-page">
      <div className="form-container">
        <h1>Welcome to the Room</h1>
        <form onSubmit={handleFormSubmit} className="form">
          <div className="input-group">
            <label>Enter or Generate Room Code</label>
            <input
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              type="text"
              required
              placeholder="Enter or generate room code"
            />
          </div>
          <div className="buttons-container">
            <button type="button" className="generate-btn" onClick={generateRoomCode}>
              Generate Room Code
            </button>
            <button type="submit" className="enter-btn">Enter Room</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
