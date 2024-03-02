import React from "react";
import { QueryParamsProvider } from '@/contexts/queryParamsContext';


export default function GuestLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}