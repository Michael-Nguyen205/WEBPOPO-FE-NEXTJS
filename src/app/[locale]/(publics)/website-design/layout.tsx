

  import { Metadata } from "next";
  
  export const metadata: Metadata = {
    title: "Authentication - My App",
    description: "Authentication pages for the app",
  };
  
  export default function WebDesignLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
     
       
          <div className="auth-layout">
          
          </div>
            {/* Phần này chỉ có layout riêng cho trang xác thực */}
            {children} {/* Trang con như login hoặc register sẽ render ở đây */}
      
      </>
    );
  }
  