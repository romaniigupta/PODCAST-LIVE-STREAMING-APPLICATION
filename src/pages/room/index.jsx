// import React from "react";
// import { useParams } from "react-router-dom";
// import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
// const RoomPage=()=>{
//     const{roomId}=useParams();
//     const myMeeting =async(element)=>{
//       const appID =1415096272;
//   const serverSecret = "da1b5ae2dd84da6a5b018c11fff61609";
//   const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
//     serverSecret,
//     roomId,
//     Date.now().toString(),"Romani Gupta"
// );
// const zp = ZegoUIKitPrebuilt.create(kitToken);
// zp.joinRoom({
//   container: element,
//   scenario:{
//     mode:ZegoUIKitPrebuilt.LiveStreaming,

//   },
// });
//     };
//     return <div className="room-page"><div ref={myMeeting}/>

//     </div>
// };
// export default RoomPage;


import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();
  const roomContainer = useRef(null);

  useEffect(() => {
    const initRoom = async () => {
      const appID = 935993418; // Replace with your ZEGOCLOUD App ID
      const serverSecret = "e8de78b9bce8c3cdbb467bea4806747b"; // Replace with your server secret
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "User-" + Math.random().toString(36).substring(2, 8)
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: roomContainer.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
        },
      });
    };

    initRoom();
  }, [roomId]);

  return (
    <div className="room-page">
      <h2>Room: {roomId}</h2>
      <div ref={roomContainer} style={{ width: "100%", height: "500px" }} />
    </div>
  );
};

export default RoomPage;
