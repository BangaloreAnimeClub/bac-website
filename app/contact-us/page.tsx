import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "BAC · Contact Us",
  description: "Contact Us",
};


export default async function ContactUsPage() {
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

  const emailusStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    border: '0px solid #bbb',
    borderRadius: '10px',
    marginBottom: '0px',
    width: '350px',
    fontWeight: '700',
  };

  const purposeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    border: '0px solid #bbb',
    borderRadius: '10px',
    marginBottom: '0px',
    marginTop: '-10px',
    width: '350px',
    fontWeight: '400',
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
            Contact Us
          </h1>
        </div>
      </div>
      <hr className="my-8" />

    <div style={{ display: 'flex', justifyContent: 'center' }}>

      <ul style={{ listStyleType: 'none', padding: 0 }}>

        {/* <li style = {emailusStyle}>
          Email us at
        </li> */}
        
        <br/>
        
        <li style = {purposeStyle}>
          Collaborations & Marketing Inquiries
        </li>

        <li style={linkStyle}>
          <a href="mailto:pr@bac.moe" target="_blank" style={{ display: 'flex', alignItems: 'center'}}>
            <span style={textStyle}>pr@bac.moe</span>
          </a>
        </li>

        <br/>

        <li style = {purposeStyle}>
          Events Inquiries
        </li>

        <li style={linkStyle}>
          <a href="mailto:events@bac.moe" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={textStyle}>events@bac.moe</span>
          </a>
        </li>

        <br/>

        <li style = {purposeStyle}>
          General Inquiries & Feedback
        </li>

        <li style={linkStyle}>
          <a href="mailto:support@bac.moe" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
            <span style={textStyle}>support@bac.moe</span>
          </a>
        </li>

      </ul>

    </div>
  </div>
  );
}
