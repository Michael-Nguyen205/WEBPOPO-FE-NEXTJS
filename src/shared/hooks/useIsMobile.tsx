
// "use client"
// import { useState, useEffect } from "react";

// const useIsMobile = (breakpoint: number = 768) => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < breakpoint) {
//         console.log("man hinh mobile");
//         setIsMobile(true);  // Màn hình nhỏ
//         // window.location.reload();
//       } else {
//         console.log("man hinh desktop");
//         setIsMobile(false); // Màn hình lớn
//         // window.location.reload();
//         // window.location.reload();
//       }
//     };

//     // Lắng nghe sự thay đổi kích thước cửa sổ
//     window.addEventListener("resize", handleResize);

//     // Kiểm tra kích thước khi component mount
//     handleResize();

//     // Dọn dẹp event listener khi component unmount
//     return () => window.removeEventListener("resize", handleResize);
//   }, []); // Re-run nếu breakpoint thay đổi

//   return isMobile;
// };
// export default useIsMobile;




"use client"
import { useState, useEffect } from "react";
const useIsMobile = (breakpoint: number = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    console.log("useIsMobile");
    
    const handleResize = () => {
        // window.location.reload();
        console.log("handleResize");
        
      const isMobileNow = window.innerWidth < breakpoint;
      
      // Chỉ thay đổi trạng thái và reload khi cần thiết
      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);  // Cập nhật trạng thái isMobile
        
        if (!isMobileNow) {
          // Reload trang khi chuyển từ mobile sang desktop
          console.log("Man hinh desktop - Reload trang");
          window.location.reload();
        } else {
          console.log("Man hinh mobile");
        }
      }
    };

    // Lắng nghe sự thay đổi kích thước cửa sổ
    window.addEventListener("resize", handleResize);
    // Kiểm tra kích thước khi component mount
    handleResize();

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile, breakpoint]); // Thêm isMobile vào dependency array

  return isMobile;
};

export default useIsMobile;
