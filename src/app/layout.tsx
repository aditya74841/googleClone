import React from "react";
import "./globals.css";

export const metadata = {
  title: "Google ",
  description: "Aditya Ranjan",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
