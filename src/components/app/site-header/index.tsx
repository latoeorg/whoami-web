import { SiteHeaderMainNav } from "./main-nav";
import { SiteHeaderMobileNav } from "./mobile-nav";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <SiteHeaderMainNav />
        <SiteHeaderMobileNav />
      </div>
    </header>
  );
};

export default SiteHeader;