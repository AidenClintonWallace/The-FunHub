import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import jokeImage from "@/assets/lol.png";
import memeImage from "@/assets/meme.png";
import quoteImage from "@/assets/philosopher.png";

type Features = {
  title: string;
  description: string;
  image: string;
  link: string;
};

function Listings() {
  const features: Features[] = [
    {
      title: "Joke Generator",
      description: "Click a button to generate a random joke",
      image: jokeImage,
      link: "/Jokes",
    },
    {
      title: "Meme Viewer",
      description: "Browse random memes from the internet",
      image: memeImage,
      link: "/Memes",
    },
    {
      title: "Quote Generator",
      description: "Get inspired with random quotes",
      image: quoteImage,
      link: "/Quotes",
    },
    
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {features.map((item, index) => (
        <Link key={index} to={item.link}>
          <Card className="hover:scale-105 transition-transform duration-300">
            <div>
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.title}
              />
            </div>

            <CardContent>
              <h1 className="text-5xl">{item.title}</h1>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}

      </div>
    </div>
  );
}

export default Listings;
