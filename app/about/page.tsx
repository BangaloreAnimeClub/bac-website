import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileCard from "@/components/ui/profilecard";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAC · About",
  description: "About us",
};

const profiles = [
  {
      name: "medha/ᐠ.ꞈ.ᐟ\\",
      designation: "Support/Moderation/Online",
      imageSrc: "/images/pfps/medha.jpg",
      bio: "Cat enthusiast, purrveyor of all things cute 🌸", 
  },
  {
      name: "Fak",
      designation: "Meetups",
      imageSrc: "/images/pfps/futtaim.jpg",
      bio: "Yeah you bleed, just to know you’re alive.",
    },
    {
        name: "Aravind",
        designation: "Archival/IT",
        imageSrc: "/images/pfps/aravind.jpeg",
        bio: "I leave tomorrow's problems to tomorrow's me.", 
    },
  {
      name: "EnigmaDB",
      designation: "Publicity",
      imageSrc: "/images/pfps/harish.jpg",
      bio: "Have fun people.",
  },
  {
      name: "Sakaido",
      designation: "Admin/Sensei",
      imageSrc: "/images/pfps/sakaido.jpg",
      bio: "Washed up former admin who is sticking on in an advisory role due to chronic joblessness. Used to conduct BAC Reikai and quizzes, neither of which were well liked. Big fan of Mushishi, Yuru Camp, Shinsekai Yori, K-On, Revue Starlight, Texhnolyze, Maiko-san chi no Makanai-san, Delicious in Dungeon, Gunslinger Girl, Witch Hat Atelier, Kieli, Boogiepop, The Mimosa Confessions, and a bunch of other things. Just an enjoyer in general.", 
  },
  {
      name: "Rutu (ルトゥ)",
      designation: "Archival",
      imageSrc: "/images/pfps/rutu.jpg",
      bio: "Initially joined BAC to spread the Haikyuu!!/Chihayafuru propaganda, but was later revealed to be a generic sports/romance fan. You can find me lurking on the BAC Manga WhatsApp group giving random romance recommendations for all demographics (I also throw in some wack ones from time to time). Drop on by to chat!   My favourite quote obviously comes from Haikyuu!! - 村人 B も 戦えます。Check it out if you haven't already (and do it again if you already have).",
  },
  {
      name: "Atharva",
      designation: "Publicity (caped crusader)",
      imageSrc: "/images/pfps/arthava.jpeg",
      bio: "I like my planet the same way like my cereal: with no aliens on it.", 
  },
  {
      name: "Rohit",
      designation: "Meetups",
      imageSrc: "/images/pfps/rohit.jpeg",
      bio: "Trying to adult, but mostly just leveling up in games and life",
  },
  {
      name: "Viraj",
      designation: "IT",
      imageSrc: "/images/pfps/viraj.jpeg",
      bio: "I like computers, music & night skies",
  },
  {
      name: "Dixi",
      designation: "Events and Movie Screening",
      imageSrc: "/images/pfps/wolf.jpg",
      bio: "I am a try-er",
  }
];


export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Us
          </h1>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start pb-5">
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
      <h2 className="inline-block font-black text-3xl lg:text-4xl mb-6">
            Meet the Team
      </h2>
      {/* <hr className="my-4" /> */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-3 w-full max-w-[1200px] mx-auto space-y-3 pb-28">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              designation={profile.designation}
              imageSrc={profile.imageSrc}
              bio={profile.bio}
            />
          ))}
      </div>

    </div>
  );
}
