"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all ${scrolled ? "bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b" : "bg-transparent"}`}>
      <div className="mx-auto flex h-14 sm:h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 font-semibold text-primary">
          <span className="inline-block h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-sm bg-accent" />
          <span className="text-sm sm:text-base">Starway Link</span>
        </Link>

        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary underline underline-offset-4"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Button asChild className="ml-2">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 sm:w-72 p-4 sm:p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="mt-4 sm:mt-2 flex flex-col gap-3 sm:gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setIsSheetOpen(false)}
                    className={`text-sm sm:text-base rounded-md px-3 py-2.5 sm:px-2 sm:py-2 ${
                      isActive(item.href)
                        ? "font-semibold text-primary bg-secondary"
                        : "font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsSheetOpen(false)}>
                  <Button className="w-full mt-2 sm:mt-0">Get a Free Consultation</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
