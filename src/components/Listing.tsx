import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

function Listings() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link to="/Jokes">
          <Card className="hover:scale-105 transition-transform duration-300">
            <div className="h-60 md:h-72 lg:h-80 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src="https://source.unsplash.com/random/800x600"
                alt="card"
              />
            </div>

            <CardContent>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Joke Generator
              </h1>
              <p className="text-sm md:text-base">
                Click a button to generate a random joke
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/Memes">
          <Card className="hover:scale-105 transition-transform duration-300">
            <div className="h-60 md:h-72 lg:h-80 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src="https://source.unsplash.com/random/801x600"
                alt="card"
              />
            </div>

            <CardContent>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Meme Viewer
              </h1>
              <p className="text-sm md:text-base">
                Browse random memes from the internet
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/Quotes">
          <Card className="hover:scale-105 transition-transform duration-300">
            <div className="h-60 md:h-72 lg:h-80 overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src="https://source.unsplash.com/random/802x600"
                alt="card"
              />
            </div>

            <CardContent>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Quote Generator
              </h1>
              <p className="text-sm md:text-base">
                Get inspired with random quotes
              </p>
            </CardContent>
          </Card>
        </Link>
        
      </div>
    </div>
  );
}

export default Listings;
