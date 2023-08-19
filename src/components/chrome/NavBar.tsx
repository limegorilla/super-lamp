"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Icons } from "../Icons";
import { Key, Sun } from "lucide-react";

// const tools: { title: string; href: string; description: string }[] = [
//   {
//     title: "@limegorilla/ui",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
// ];

export default function NavigationMenuDemo() {
  return (
    <div className="fixed z-30 flex w-screen items-center gap-5 bg-white/20 p-5 font-sans backdrop-blur-xl">
      {/* Branding */}
      <div className="flex-grow">
        <Icons.logo className="h-8 w-8 text-[#57ff60]" />
        <span className="hidden">limegorilla</span>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Docs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent className="min-w-[300px]">
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-lime-500 to-lime-300 p-6 no-underline outline-none focus:shadow-md"
                      href="/docs/limegorilla/ui"
                    >
                      <div className="inline-flex items-center gap-1 rounded font-serif font-bold">
                        <Icons.logo className="h-4 w-4" />
                        <span>ui</span>
                      </div>
                      <div className="my-2 font-serif text-xl font-bold">
                        @limegorilla/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Adapted from @shadcn/ui, powered by Radix UI and
                        TailwindCSS - it&apos;s all of my components, open
                        source and ready to use.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem
                  href="/docs/limegorilla/starter"
                  title="@limegorilla/starter"
                >
                  Quickly launch your next project.
                </ListItem>
                <ListItem href="/docs/carkit" title="CarKit">
                  Next-gen connectivity for your last-gen vehicle.
                </ListItem>
                <ListItem href="/roofspy" title="RoofSpy">
                  Check to make sure my roof is down! Powered by CarKit.
                </ListItem>
                <ListItem href="/docs/super-lamp" title="super-lamp">
                  A beautiful website for a beautiful me.
                </ListItem>
                <ListItem href="/docs/nothorror" title="nothorror">
                  A horror game with no horror. Collage project made in Unreal.
                </ListItem>

                <div className="flex gap-2">
                  <Link href="/auth/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "inline-flex flex-grow basis-0 items-center gap-2"
                      )}
                    >
                      <Key className="h-5 w-5" />
                      Login
                    </NavigationMenuLink>
                  </Link>

                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "inline-flex flex-grow basis-0 items-center gap-2"
                    )}
                    onClick={() => console.log("clicked")}
                  >
                    <Sun className="h-5 w-5" />
                    Theme
                  </NavigationMenuLink>
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
