import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { FaSquareInstagram, FaSquareWhatsapp, FaSquareXTwitter, FaDiscord, FaFacebook, FaTelegram } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "BAC · Socials",
  description: "Social Links",
};

export default async function SocialsPage() {
  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    border: '2px solid #bbb',
    borderRadius: '10px',
    marginBottom: '10px',
    width: '350px',
  };

  const iconStyle = {
    marginRight: '10px',
    width: '30px',
    height: '30px',
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
        
        <li style={linkStyle}>
          <a href="https://instagram.com/bangaloreanimeclub/" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaSquareInstagram size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Instagram</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://x.com/BLRAnimeClub" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaSquareXTwitter size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Twitter</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://whatsapp.com/channel/0029Va4WaK1I1rcnkEFOnV35" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaSquareWhatsapp size = {30}/>&nbsp;&nbsp;<span style={textStyle}>WhatsApp (Channel)</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://chat.whatsapp.com/FoLaQKZc7Lq3gdPVkkOIZJ" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaSquareWhatsapp size = {30}/>&nbsp;&nbsp;<span style={textStyle}>WhatsApp (Community)</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://discord.gg/EumfnhyZvB" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaDiscord size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Discord</span>
          </a>
        </li>
        
        <li style={linkStyle}>
          <a href="https://www.facebook.com/bangaloreanimeclub" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaFacebook size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Facebook (Page)</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://facebook.com/groups/BangaloreAnimeClub/" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaFacebook size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Facebook (Group)</span>
          </a>
        </li>

        <li style={linkStyle}>
          <a href="https://t.me/joinchat/U4PbJ5tLTovcFNnz" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <FaTelegram size = {30}/>&nbsp;&nbsp;<span style={textStyle}>Telegram</span>
          </a>
        </li>

      </ul>
      

    </div>
  </div>
  );
}
