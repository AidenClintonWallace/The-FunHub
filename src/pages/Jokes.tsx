import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ghost } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Joke {
  setup: string;
  delivery: string;
}

export default function Jokes() {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  async function fetchJoke() {
    setLoading(true);
    console.log("Button clicked");

    try {
      const response = await axios.get(
        "http://localhost:8100/api/jokes/random",
      );
      setError(null);

      setJoke(response.data);
    } catch (error) {
      setError("Failed to Connect to Server");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
  <div className="min-h-screen flex items-center justify-center px-4 py-12 ">

    <Card className="w-full max-w-2xl shadow-2xl border bg-background/95 backdrop-blur-xl">

      <CardHeader className="space-y-4">

        <div className="flex items-center gap-3">

          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer rounded-full"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <CardTitle className="text-3xl font-bold tracking-tight">
            Joke Generator
          </CardTitle>

        </div>

        <p className="text-muted-foreground">
          Generate random jokes instantly with a single click.
        </p>

      </CardHeader>

      <CardContent className="space-y-6 min-h-[260px] flex flex-col justify-center">

        {/* Loading State */}
        {loading && (

          <div className="flex flex-col items-center justify-center gap-4 py-8">

            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />

            <span className="text-muted-foreground animate-pulse">
              Getting joke...
            </span>

          </div>
        )}

        {/* Joke */}
        {joke && !loading && (

          <div className="rounded-2xl border bg-muted/40 p-8 shadow-sm text-center space-y-5 transition-all">

            <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">

              {joke.setup}

            </h2>

            <div className="w-16 h-[2px] bg-border mx-auto rounded-full" />

            <p className="text-lg leading-relaxed">

              {joke.delivery}

            </p>

          </div>
        )}

        {/* Empty State */}
        {!joke && !loading && (

          <div className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">

            Press the button below to generate a joke

          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-500">
            {error}
          </div>
        )

        }

      </CardContent>

      <div className="p-6 pt-0">

        <Button
          className="w-full cursor-pointer text-base py-6 rounded-full bg-gray-700 text-white"
          onClick={fetchJoke}
          disabled={loading}
        >
          {loading ? "Loading..." : "Generate Joke"}
        </Button>

      </div>

    </Card>

  </div>
);
}
