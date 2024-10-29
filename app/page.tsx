import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-10">

        <div style= {{'display': 'flex', 'justifyContent': 'center'}}>
          <img src="/images/logo-full-2.svg" alt="BAC Logo" style={{ 'width': '50%', 'height': 'auto' }} className="block dark:hidden"/>
          <img src="/images/logo-light-full.svg" alt="BAC Logo" style={{ 'width': '50%', 'height': 'auto' }} className="hidden dark:block"/>
        </div>

        <div className="container flex flex-col gap-4 text-center">
          
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            <span style={{ color: '#ea4167' }}>Nyamaskara!</span> Welcome to the anime and manga headquarters of Nyamma Bengaluru. Looking for events, contests, cosplay, fanart, recommendations, or just a space for discourse and connecting with fellow fans? <span style={{ color: '#ea4167' }}>We&#39;ve got you covered.</span>
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/upcoming-events"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Events
            </Link>
            <Link
              href={siteConfig.links.linktree}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              Socials
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-0">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Blogs
        </h2>
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
            post.published && (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
            )
          ))}
        </ul>
      </section>
    </>
  );
}
