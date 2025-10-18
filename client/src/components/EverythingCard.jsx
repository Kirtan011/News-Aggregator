import React from "react";

function EverythingCard(props) {
  return (
    <div className="flex justify-center mt-16 px-2">
      <div className="group border-y-2 relative flex flex-col items-center p-4 gap-4 max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
        {/* Title */}
        <h2 className="text-xl font-bold text-center text-orange-100 dark:text-gray-100 ">
          {props.title}
        </h2>

        {/* Main Image */}
        {props.imgUrl && (
          <div className="w-full h-64 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 rounded-xl"
              src={props.imgUrl}
              alt="News"
            />
          </div>
        )}

        {/* Description */}
        <div className="text-center px-2">
          <p className="text-gray-700 dark:text-gray-300 text-base leading-6">
            {props.description?.substring(0, 200)}...
          </p>
        </div>

        {/* Source */}
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400 text-sm gap-1">
          <span className="font-medium text-gray-500 dark:text-gray-400">
            Source
          </span>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline break-words font-semibold"
          >
            {props.source?.substring(0, 60)}
          </a>
        </div>

        {/* Author and Publish Date */}
        <div className="w-full mt-3 border-t pt-3 flex justify-between text-gray-600 dark:text-gray-400 text-sm">
          <p>
            <span className="font-semibold">Author: </span>
            {props.author || "Unknown"}
          </p>
          <p>
            <span className="font-semibold">Published: </span>
            {props.publishedAt
              ? new Date(props.publishedAt).toLocaleDateString()
              : "Unknown"}
          </p>
        </div>

        {/* Optional Bottom Section */}
        {props.cardTitle && (
          <div className="w-full mt-4 px-2">
            <h3 className="text-gray-900 dark:text-gray-100 font-bold text-lg mb-1">
              {props.cardTitle}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {props.cardDescription}
            </p>

            {/* Optional Author Info */}
            {props.authorImage && (
              <div className="flex items-center mt-3 gap-3">
                <img
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  src={props.authorImage}
                  alt={props.authorName}
                />
                <div className="text-sm">
                  <p className="text-gray-900 dark:text-gray-100 font-semibold">
                    {props.authorName}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {props.publishedDate}
                  </p>
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
