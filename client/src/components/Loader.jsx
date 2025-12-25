import React, { useEffect, useState } from "react";

const newsFacts = [
  "Around 60% of people now consume news digitally.",
  "Fake news spreads 6× faster than real news on social platforms.",
  "Nearly 40% of readers never read past the headline.",
  "Over 70% of readers consume news on mobile devices.",
  "AI is now used for summarizing and detecting fake news.",
  "An estimated 1.5 million+ news articles are published every day.",
  "Short summaries increase reading completion by over 60%.",
  "Dark mode reduces eye strain by nearly 50% while reading news.",
  "Breaking news traffic can spike 5× within minutes.",
  "Voice-based news assistants are slowly replacing morning newspapers.",
  "People trust news more when multiple sources confirm the same story.",
];

const Loader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % newsFacts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container w-full absolute flex flex-col items-center justify-center gap-6 top-0 left-0">
      <span className="loader"></span>

      <div className="fact-box fade-text">
        <p>{newsFacts[index]}</p>
      </div>
    </div>
  );
};

export default Loader;
