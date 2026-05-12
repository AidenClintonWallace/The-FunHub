import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface Quote {
  quote: string;
  author: string;
}

export default function Quotes() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchQuote() {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:8100/api/quotes/random",
      );

      setQuote(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <Button
          onClick={fetchQuote}
          disabled={loading}
          className=" hover:cursor-pointer w-30 h-30 px-4 py-2 bg-purple-500 text-white rounded-full disabled:opacity-50"
        >
          {loading ? "Loading..." : "Generate Quote"}
        </Button>

        {loading && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <span>Fetching quote...</span>
          </div>
        )}

        {quote && !loading && (
          <div className="mt-6 max-w-md p-6 bg-white shadow-lg rounded-xl text-center">
            <p className="text-xl italic">"{quote.quote}"</p>

            <p className="mt-4 font-bold">- {quote.author}</p>
          </div>
        )}
      </div>
    </>
  );
}
