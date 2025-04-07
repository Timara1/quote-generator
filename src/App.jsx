import { useState, useEffect } from "react";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import QuoteButtons from "./components/QuoteButtons";
import { getRandomQuote } from "./services/quoteAPI";

function App() {
  // Default quote
  const defaultQuote = {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  };

  const [quote, setQuote] = useState(defaultQuote.quote);
  const [author, setAuthor] = useState(defaultQuote.author);
  const [showCopyPopUp, setShowCopyPopUp] = useState(false); // State to control pop-up visibility

  // Fetch quote from an external API
  const fetchQuote = async () => {
    const { quote, author } = await getRandomQuote();
    setQuote(quote);
    setAuthor(author);
  };

  useEffect(() => {
    // Fetch a new quote after the app loads
    fetchQuote();
  }, []);

  // Handlers for QuoteButtons
  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`"${quote}" — ${author}`);
    setShowCopyPopUp(true); // Show the pop-up after copying
    setTimeout(() => setShowCopyPopUp(false), 2000); // Hide it after 2 seconds
  };

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen bg-blue-300 flex flex-col items-center justify-center px-4">
      <Header />
      <div className="max-w-xl w-full">
        <QuoteCard quote={quote} author={author} />
        <QuoteButtons
          onNewQuote={handleNewQuote}
          onCopy={handleCopy}
          onSpeak={handleSpeak}
        />
        {/* Conditional rendering of the pop-up */}
        {showCopyPopUp && (
          <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
            Quote copied to clipboard!
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
