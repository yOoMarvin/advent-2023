"use client";

import React, { useState, useRef, useEffect } from "react";

const ShowMore = ({ content, maxChar }) => {
  const [expanded, setExpanded] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setScrollHeight(contentRef.current.scrollHeight);
    }
  }, [content]);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setScrollHeight(contentRef.current.scrollHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`w-full rounded-lg border border-neutral-100 bg-neutral-50 p-4 max-h-${
        expanded ? "none" : "100"
      } overflow-hidden`}
      ref={contentRef}
    >
      <p>{expanded ? content : content.slice(0, maxChar) + " ..."}</p>
      {content.length > maxChar && scrollHeight > 100 && (
        <button
          className="transition__base mt-4 rounded-md bg-blue-100 px-3 py-2 font-medium text-blue-600 shadow-sm hover:bg-blue-200 hover:text-blue-700"
          onClick={() => {
            toggleExpanded();
            console.log(scrollHeight);
          }}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default ShowMore;
