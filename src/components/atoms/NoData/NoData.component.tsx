export const NoData = () => {
  return (
    <div className="flex flex-col items-center justify-center p-16 bg-white rounded-lg shadow-md border border-gray-100">
      <svg
        className="w-16 h-16 text-gray-300 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold text-gray-700">No data found</h2>
      <p className="text-lg text-gray-500 mt-2">Please check back later.</p>
    </div>
  );
};
