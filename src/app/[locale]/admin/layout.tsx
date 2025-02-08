
import "../../globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <h1>this is admin layout</h1>
        {children}
      </body>
    </html>
  );
}
