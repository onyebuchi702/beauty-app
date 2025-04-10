import React from "react";

export const Error = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-white rounded-lg shadow-md border border-gray-100">
      <svg
        className="w-16 h-16 text-red-400 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-2xl font-bold text-gray-700">Error</h2>
      <p className="text-lg text-red-500 mt-2">{message}</p>
    </div>
  );
};
