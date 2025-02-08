"use client";
import React from 'react';
import { useToggleMenuContext } from "@/shared/context/toggleMenuProvider";

export default function NavBlurEffect() {
  const { isOpen } = useToggleMenuContext();

  return (
    <>




<div

style={{
  position: "fixed", 
  top: 0,
  left: 0,
  width: "100vw", 
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(10px)",
  zIndex: 10,
  visibility: isOpen ? "visible" : "hidden", // Sửa lại biến visibility
  opacity: isOpen ? 1 : 0, // Điều chỉnh hiển thị bằng opacity
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out", // Hiệu ứng mượt mà cho opacity và visibility
}}
></div>
 
     
    </>
  );
}






// "use client";
// import React from 'react';
// import { useToggleMenu } from "@/context/toggleMenuProvider";

// export default function NavBlurEffect() {
//   const { isOpen } = useToggleMenu();

//   return (
//     <>
//       <div
//         style={{
//           position: "fixed", 
//           top: 0,
//           left: 0,
//           width: "100vw", 
//           height: "100vh",
//           backgroundColor: "rgba(0, 0, 0, 0.3)",
//           backdropFilter: "blur(10px)",
//           zIndex: 10,
//           opacity: isOpen ? 1 : 1, // Điều chỉnh hiển thị bằng opacity
//           transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out", // Hiệu ứng mượt mà cho opacity và visibility
//         }}
//       ></div>
//     </>
//   );
// }

