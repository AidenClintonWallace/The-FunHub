import iphone from "@/assets/iphone.jpeg";
import shoes from "@/assets/shoes.jpeg";
import laptop from "@/assets/laptop.jpeg"

const listings = [
  { id: 1, title: "iphone", price: 5000, image : iphone },
  { id: 2, title: "Shoes", price: 1200, image : shoes},
  { id: 3, title: "Laptop", price: 7000, image : laptop},
  { id: 3, title: "Laptop", price: 7000, image : laptop},
  { id: 3, title: "Laptop", price: 7000, image : laptop}
];

import { Link } from "react-router-dom";
import { Card, CardContent} from "./ui/card";

function Listings() {
  return (
    <div className="flex flex-row gap-4 p-2">
      {listings.length === 0 ? (
        <p>No listings yet</p>
      ) : (
        listings.map((listings) => (
        <Link to="/About" >
          <Card key={listings.id} >
            <div className="h-80 overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover" src={listings.image}/>
            </div>
            <CardContent>
              <h1>{listings.title}</h1>
              <p>{listings.price}</p>
            </CardContent>
          </Card>
          </Link>
        ))
      )}
    </div>
  );
}

export default Listings;
