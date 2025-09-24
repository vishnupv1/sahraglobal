import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto w-full px-3 py-12 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2 font-semibold text-primary">
              <span className="inline-block h-3 w-3 rounded-sm bg-accent" />
              <span>Starway Link</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Modern solutions for UAE businesses: web, marketing, finance, logistics, data entry, and visa services.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/industries" className="hover:underline">Industries</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Dubai, United Arab Emirates</li>
              <li>Phone: +971-XXX-XXXX</li>
              <li>Email: info@sahraglobal.ae</li>
              <li>License: UAE DED Registered</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">X (Twitter)</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Starway Link. All rights reserved.
          </p>
          <p>Made with care in the UAE.</p>
        </div>
      </div>
    </footer>
  );
}


