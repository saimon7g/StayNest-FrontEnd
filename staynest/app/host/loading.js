import React from "react";

export default function GuestLoading() {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center h-screen">
          <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg p-10">
            Loading...
          </div>
        </div>
      </body>
    </html>
  );
}