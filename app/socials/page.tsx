import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FaInstagram, FaWhatsapp, FaXTwitter, FaDiscord, FaFacebook, FaTelegram } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "BAC · Socials",
  description: "Social Links",
};

export default async function SocialsPage() {

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px',
    border: '0px solid #bbb',
    borderRadius: '5px',
    marginBottom: '5px',
    width: '350px',
  };

  const textStyle = {
    fontWeight: '500',
  };

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Social Links
          </h1>
        </div>
      </div>
      <hr className="my-8" />

    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        <li style = {buttonStyle}>
          <Link href="https://instagram.com/bangaloreanimeclub/" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaInstagram size = {35}/>&nbsp;&nbsp;<span style={textStyle}>Instagram</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://x.com/BLRAnimeClub" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaXTwitter size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Twitter</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://whatsapp.com/channel/0029Va4WaK1I1rcnkEFOnV35" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaWhatsapp size = {30}/>&nbsp;&nbsp;<span style={textStyle}>WhatsApp (Channel)</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://chat.whatsapp.com/FoLaQKZc7Lq3gdPVkkOIZJ" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaWhatsapp size = {30}/>&nbsp;&nbsp;<span style={textStyle}>WhatsApp (Community)</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://discord.gg/EumfnhyZvB" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaDiscord size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Discord</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://www.facebook.com/bangaloreanimeclub" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaFacebook size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Facebook (Page)</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://facebook.com/groups/BangaloreAnimeClub/" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaFacebook size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Facebook (Group)</span>
          </Link>
        </li>

        <li style = {buttonStyle}>
          <Link href="https://t.me/joinchat/U4PbJ5tLTovcFNnz" target="_blank"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full")}>
            <FaTelegram size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Telegram</span>
          </Link>
        </li>

      </ul>
    
    </div>
  </div>
  );
}
