import React from "react";

function EverythingCard(props) {
  return (
    <div className="flex justify-center mt-8">
      <div className="group relative flex flex-col items-center p-4 gap-4 max-w-md w-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg rounded-2xl transition-all duration-300 hover:scale-105  dark:hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]">

        {/* Title */}
        <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-100">
          {props.title}
        </h2>

        {/* Main Image */}
        {props.imgUrl && (
          <div className="w-full h-40 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-500"
              src={props.imgUrl}
              alt="Main Visual"
            />
          </div>
        )}

        {/* Description */}
        <div className="text-center px-2">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-6 font-light">
            {props.description?.substring(0, 200)}
          </p>
        </div>

        {/* Source Link */}
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400 text-sm gap-1">
          <span className="text-lg font-thin">Source:</span>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline hover:font-bold text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-center break-words"
          >
            {props.source?.substring(0, 60)}
          </a>
        </div>

        {/* Author and Publish Date */}
        <div className="w-full mt-4 border rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
          <div className="p-3 flex flex-col items-center text-center gap-2">
            <p className="text-lg font-thin text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Author: </span>{props.author || "Unknown"}
            </p>
            <p className="text-lg font-thin text-gray-600 dark:text-gray-400">
              <span className="font-semibold">Published: </span>{props.publishedAt ? new Date(props.publishedAt).toLocaleDateString() : "Unknown"}
            </p>
          </div>
        </div>

        {/* Optional Bottom Section */}
        {props.cardTitle && (
          <div className="w-full p-3 flex flex-col text-start">
            <h3 className="text-gray-900 dark:text-gray-100 font-bold text-lg mb-1">
              {props.cardTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {props.cardDescription}
            </p>

            {/* Author Info (Optional) */}
            {props.authorImage && (
              <div className="flex items-center mt-3">
                <img
                  className="w-8 h-8 rounded-full mr-3 grayscale hover:grayscale-0 transition-all duration-500"
                  src={props.authorImage}
                  alt="Author"
                />
                <div className="text-sm">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">{props.authorName}</p>
                  <p className="text-gray-600 dark:text-gray-400">{props.publishedDate}</p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default EverythingCard;
