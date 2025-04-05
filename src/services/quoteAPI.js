const API_URL = "https://api.quotable.io/random";

export const getRandomQuote = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log("Quote data:", data);  // Check what's being returned
      return { quote: data.content, author: data.author };
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      return { quote: "Failed to load quote.", author: "" };
    }
  };
  
