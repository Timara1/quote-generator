import { useState, useEffect } from "react";

function QuoteCard({ quote, author }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger fade-in effect when the quote changes
    setFade(true);
  }, [quote]); // Trigger fade when quote changes

  return (
    <div
      key={quote} // Ensure the component is re-mounted on quote change
      className={`p-4 bg-white rounded-xl shadow-md text-center transition-opacity duration-1000 ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-xl italic font-serif">"{quote}"</p>
      <p className="mt-2 text-right font-semibold">- {author}</p>
    </div>
  );
}

export default QuoteCard;
