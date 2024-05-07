import React, { useEffect, useState } from "react";
import { FaWifi } from "react-icons/fa6";

const NetworkStatus = () => {
  const [isOnline, setOnline] = useState(Boolean(navigator.onLine)); // Initial online state

  useEffect(() => {
    function handleOnlineStatus() {
      setOnline(true);
    }
    function handleOfflineStatus() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return (
    <div style={{ position: "absolute", top: "10%", right: "1%" }} className="">
      {isOnline == true ? (
        <>
          <FaWifi style={{ color: "green", fontSize: "2rem" }} />
          {/* <p style={{fontSize:"0.5rem" , fontWeight:500, letterSpacing:"2px"}}>ONLINE</p> */}
        </>
      ) : (
        <>
          <FaWifi style={{ color: "red", fontSize: "2rem" }} />
          {/* <p style={{fontSize:"0.5rem" , fontWeight:500, letterSpacing:"2px"}}>OFFLINE</p> */}
        </>
      )}
    </div>
  );
};

export default NetworkStatus;

// import React, { useEffect, useState } from 'react';
// import { AiOutlineGlobal } from 'react-icons/ai';

// const NetworkStatus = () => {
//   const [isOnline, setOnline] = useState(Boolean(navigator.onLine)); // Initial online state
//   const [connectionType, setConnectionType] = useState(null);

//   useEffect(() => {
//     console.log("useEffect hook running");

//     function handleOnlineStatus() {
//       setOnline(true);
//       if (navigator.connection && navigator.connection.effectiveType) {
//         setConnectionType(navigator.connection.effectiveType);
//       }
//     }

//     function handleOfflineStatus() {
//       setOnline(false);
//       setConnectionType(null); // Reset connection type when offline
//     }

//     window.addEventListener("online", handleOnlineStatus);
//     window.addEventListener("offline", handleOfflineStatus);

//     return () => {
//       window.removeEventListener("online", handleOnlineStatus);
//       window.removeEventListener("offline", handleOfflineStatus);
//     };
//   }, []);

//   const getConnectionSpeedText = () => {
//     if (connectionType) {
//       switch (connectionType) {
//         case "slow-2g":
//           return "Slow Connection";
//         case "2g":
//           return "2G";
//         case "3g":
//           return "3G";
//         case "4g":
//           return "4G";
//         default:
//           return "Unknown";
//       }
//     }
//     return null;
//   };

//   return (
//     <div style={{ position: "absolute", top: "10%", right: "2%" }}>
//       {isOnline ? (
//         <>
//           <AiOutlineGlobal style={{ color: "green", fontSize: "2rem" }} />
//           <p style={{ fontSize: "1rem", fontWeight: 500, letterSpacing: "2px" }}>
//             ONLINE - {getConnectionSpeedText()}
//           </p>
//         </>
//       ) : (
//         <>
//           <AiOutlineGlobal style={{ color: "red", fontSize: "2rem" }} />
//           <p style={{ fontSize: "0.5rem", fontWeight: 500, letterSpacing: "2px" }}>
//             OFFLINE
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

// export default NetworkStatus;
