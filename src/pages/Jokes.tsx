import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Joke {
  setup: string;
  delivery: string;
}

export default function Jokes() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState<Joke | null>(null);

  async function fetchJoke() {
    setLoading(true);
    console.log("Button clicked");

    try {
      const response = await axios.get(
        "http://localhost:8100/api/jokes/random",
      );

      setJoke(response.data);
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
          className="w-30 h-30 rounded-full hover:cursor-pointer"
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Joke"}
        </Button>

        {loading && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span>Getting joke...</span>
          </div>
        )}

        <div>
          {joke && (
            <div className="mt-6 max-w-md p-6 bg-white shadow-lg rounded-xl text-center">
              <h2>{joke.setup}</h2>
              <p>{joke.delivery}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
