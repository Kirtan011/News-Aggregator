import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EverythingCard from "./EverythingCard";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

function CountryNews() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const pageSize = 29;

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  useEffect(() => {
    // Handle restricted countries
    if (params.iso.toLowerCase() !== "us") {
      setData([]);
      setError("Cannot load this due to restrictions from NewsAPI.");
      return;
    }

    setIsLoading(true);
    setError(null);

    fetch(
      `https://news-aggregator-backend-ymh6.onrender.com/country/${params.iso}?page=${page}&pageSize=${pageSize}`
    )
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok");
      })
      .then((myJson) => {
        if (myJson.success) {
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || "An error occurred");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch news. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, params.iso]);

  const RestrictionCard = () => (
    <div className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-10 mt-16 mx-4 sm:mx-auto max-w-md border border-gray-700">
      <FontAwesomeIcon
        icon={faTriangleExclamation}
        className="text-yellow-400 text-5xl mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Access Unavailable</h2>
      <p className="text-gray-300">
        News data for this country cannot be displayed because it requires a
        <span className="text-blue-400 font-medium"> paid NewsAPI plan</span>.
      </p>
      <p className="mt-4 text-sm opacity-80">
        Currently, only{" "}
        <span className="font-semibold text-blue-400">US news</span> is
        available under the free plan.
      </p>
    </div>
  );

  return (
    <>
      {/* Error or Restriction */}
      {error && params.iso.toLowerCase() !== "us" ? (
        <RestrictionCard />
      ) : (
        <>
          {error && (
            <div className="text-red-500 mb-4 text-center font-medium mt-6">
              {error}
            </div>
          )}

          {/* News Cards */}
          <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
            {!isLoading ? (
              data.length > 0 ? (
                data.map((element, index) => (
                  <EverythingCard
                    key={index}
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    publishedAt={element.publishedAt}
                    url={element.url}
                    author={element.author}
                    source={element.source.name}
                  />
                ))
              ) : (
                !error && (
                  <p className="text-center opacity-80 mt-6">
                    No news articles found for this criteria.
                  </p>
                )
              )
            ) : (
              <Loader />
            )}
          </div>

          {/* Pagination */}
          {!isLoading && data.length > 0 && (
            <div className="pagination flex justify-center gap-14 my-10 items-center">
              <button
                disabled={page <= 1}
                className="pagination-btn"
                onClick={handlePrev}
              >
                Prev
              </button>
              <p className="font-semibold opacity-80">
                {page} of {Math.ceil(totalResults / pageSize)}
              </p>
              <button
                disabled={page >= Math.ceil(totalResults / pageSize)}
                className="pagination-btn"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default CountryNews;
