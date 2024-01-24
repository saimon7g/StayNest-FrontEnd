import React from "react";
import NAV from "@/Components/navBar";

export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NAV />
        {children}
      </body>
    </html>
  )
}