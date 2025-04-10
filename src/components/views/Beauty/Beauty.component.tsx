import { NoData } from "@/components/atoms";
import { BeautyResponse } from "@/types";
import Link from "next/link";

export const Beauty = ({ data }: { data: BeautyResponse[] }) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gradient-to-br from-violet-50 to-blue-50 rounded-xl shadow-sm">
      {data.map((item) => (
        <Link
          href={item.slug}
          key={item.slug}
          data-testid={`link-component-${item.slug}`}
          className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
        >
          <h2 className="text-xl font-semibold text-violet-800 mb-2">
            {item.name}
          </h2>
          <p className="text-gray-500 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              ></path>
            </svg>
            {item.url}
          </p>
        </Link>
      ))}

      {data && data.length === 0 && <NoData />}
    </div>
  );
};
