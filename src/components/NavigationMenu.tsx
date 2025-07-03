
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const MainNavigationMenu = () => {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        {/* Browse Artists */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Browse Artists</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple-500/50 to-blue-500/50 p-6 no-underline outline-none focus:shadow-md"
                    to="/artists"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Find Perfect Artists
                    </div>
                    <p className="text-sm leading-tight text-purple-100">
                      Browse through thousands of verified artists across India
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/artists?category=musicians" title="Musicians">
                Singers, instrumentalists, and bands
              </ListItem>
              <ListItem to="/artists?category=dancers" title="Dancers">
                Classical, modern, and folk dancers
              </ListItem>
              <ListItem to="/artists?category=speakers" title="Speakers">
                Motivational and keynote speakers
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Join as Artist */}
        <NavigationMenuItem>
          <Link to="/onboarding">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join as Artist
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* How it Works */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>How it Works</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem to="/how-it-works" title="For Clients">
                How to find and book artists
              </ListItem>
              <ListItem to="/how-it-works#artists" title="For Artists">
                How to join and get bookings
              </ListItem>
              <ListItem to="/how-it-works#pricing" title="Pricing">
                Transparent pricing structure
              </ListItem>
              <ListItem to="/how-it-works#support" title="Support">
                24/7 customer support
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Success Stories */}
        <NavigationMenuItem>
          <Link to="/success-stories">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Success Stories
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <Link to="/about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MainNavigationMenu;
