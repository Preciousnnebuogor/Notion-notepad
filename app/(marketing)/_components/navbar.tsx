"use client";
import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "./logo";

import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";


export default function Navbar() {
  const {isAuthenticated, isLoading} = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
       {isLoading && (
        <p>Loading...</p>
       )}
        {!isAuthenticated && !isLoading && (
          <>
          <SignInButton mode="modal">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </SignInButton>

          <SignInButton mode="modal">
            <Button size="sm">
              Get Notion free
            </Button>
          </SignInButton>
          </>
        )}
        <ModeToggle/>
      </div>
    </div>
  );
}
