import React from "react";
import { useNavigate } from "react-router";

interface EmptyStateProps {
  searchQuery?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchQuery }) => {
  const navigate = useNavigate();

  const handleClearSearch = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center w-full bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Search/Empty Icon (SVG) */}
      <div className="bg-indigo-50 p-6 rounded-full mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 text-indigo-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        No products found
      </h2>

      <p className="text-gray-500 max-w-md mb-8 leading-relaxed">
        We couldn't find anything matching{" "}
        {searchQuery ? (
          <span className="font-semibold text-gray-700">"{searchQuery}"</span>
        ) : (
          "your search"
        )}
        . Please try adjusting your search term or filters.
      </p>

      {/* Action Button */}
      <button
        onClick={handleClearSearch}
        className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-300 shadow-md shadow-indigo-200 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
        Clear Search
      </button>
    </div>
  );
};

export default EmptyState;
