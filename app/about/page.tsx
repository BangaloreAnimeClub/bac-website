import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAC · About",
  description: "About us",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Who are we?
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer
          </p>
        </div> */}
        <p className="text-muted-foreground text-lg py-4">
        Bengaluru Anime Club is a community of anime enthusiasts based in the city of Bengaluru. Whether you’re a seasoned otaku or new to the world of anime and manga, this club offers a welcoming space to connect with fellow fans, share your love for Japanese animation, and explore diverse genres and series.
        <br/>
        <br/>
        From regular meetups and watch parties to discussions on the latest episodes, cosplaying events, and manga swaps, the Bengaluru Anime Club fosters a sense of belonging among anime fans of all ages. We also host special screenings, anime trivia nights, and cultural events to celebrate the rich art and storytelling of Japan.
        <br/>
        <br/>
        Join us to dive deep into the world of anime, make new friends, and be part of a growing community that shares your passion for all things anime!
        </p>
      </div>
    </div>
  );
}
