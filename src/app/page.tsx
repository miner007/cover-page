// app/page.tsx
//import Link from "next/link";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { HyperText } from "@/components/magicui/hyper-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <RetroGrid className="bg-gray-100 w-full h-full" />

      {/* Centered Logo and Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
        <HyperText className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
          R W A I
        </HyperText>
        <a
          href="https://discord.gg/XvW8YF9bZe"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨Launch App✨</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </a>
        {/*<Link href="/second">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨Launch App✨</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </Link>*/}
      </div>
    </div>
  );
}
