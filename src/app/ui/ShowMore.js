"use client";
import { useState } from "react";

const ShowMore = ({ content, maxChar }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="w-full rounded-lg border border-neutral-100 bg-neutral-50 p-4">
      <p>{expanded ? content : content.slice(0, maxChar) + " ..."}</p>
      {content.length > maxChar && (
        <button
          className="transition__base mt-4 rounded-md bg-blue-100 px-3 py-2 font-medium text-blue-600 shadow-sm hover:bg-blue-200 hover:text-blue-700"
          onClick={toggleExpanded}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
