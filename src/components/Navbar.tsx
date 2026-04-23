import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import "@/index.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center-safe">
        <NavigationMenu className="fixed rounded-b-full bg-blue-100 shadow-lg">
          <NavigationMenuList className="p-4">

            <div className="flex flex-row text-3xl ">
            <NavigationMenuItem >
              <Link to="/">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">Go to Home</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/About">
                <NavigationMenuLink className=" p-4 text-3xl hover:animate-pulse">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            </div>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}
