function QuoteButtons({ onNewQuote, onCopy, onSpeak }) {
  return (
    <div className="mt-4 flex justify-center gap-4">
      <button
        onClick={onNewQuote}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all duration-100 transform active:scale-95"
      >
        New Quote
      </button>
      <button
        onClick={onCopy}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-100 transform active:scale-95"
      >
        Copy
      </button>
      <button
        onClick={onSpeak}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-all duration-100 transform active:scale-95"
      >
        Speak
      </button>
    </div>
  );
}

export default QuoteButtons;
