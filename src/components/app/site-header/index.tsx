import Link from "next/link";
import { SiteHeaderMainNav } from "./main-nav";
import { SiteHeaderMobileNav } from "./mobile-nav";
import { buttonVariants } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constant";
import { SiteHeaderModeToggle } from "./mode-toggle";
import { Icons } from "@/components/atoms/icons";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <SiteHeaderMainNav />
        <SiteHeaderMobileNav />

        <div className="flex-1"></div>

        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <SiteHeaderModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
