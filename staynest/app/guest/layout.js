import React from "react";
import { QueryParamsProvider } from '@/contexts/queryParamsContext';
import Navbar from "@/Components/GuestSide/GuestNavBar";


export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body>
                <Navbar />
                {children}
      
      </body>
    </html>
  )
}