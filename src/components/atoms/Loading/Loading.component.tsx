export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-white rounded-lg shadow-md border border-gray-100">
      <svg
        className="w-16 h-16 text-violet-400 mb-4 animate-spin"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      <h2 className="text-2xl font-bold text-gray-700">Loading</h2>
      <p className="text-lg text-gray-500 mt-2">
        Please wait while we fetch your data.
      </p>
    </div>
  );
};
