  import Link from "next/link";

  export default function Footer() {
    return (
      <footer className="bg-white">
        <div className="mx-auto w-full px-3 py-12 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Branding Section */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600">
                  <span className="text-lg font-bold text-white">V</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Starway Link</span>
              </div>
            <p className="mb-6 text-sm text-gray-600">
              We help businesses scale with modern web, marketing, and operations solutions.
            </p>
            <div className="flex gap-3">
              {/* <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700">
                <span className="text-sm font-bold">f</span>
              </a> */}
              <a href="https://www.instagram.com/starwaylinkservices/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              {/* <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700">
                <span className="text-sm font-bold">X</span>
              </a> */}
              <a href="https://www.linkedin.com/company/109030932" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Menu</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link href="/services" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Integration</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link></li>
              </ul>
            </div>

            {/* Template Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Template</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Style Guide</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">License</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Changelog</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">404</Link></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +1 (800) 123-4567
                </li>
              <li className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                admin@starwaylinkservices.com
                </li>
              <li className="flex items-center gap-2">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                <span>
                  Sharjah Media City (Shams Free Zone)
                  <br />
                  Business park in Al Bataeh, United Arab Emirates
                </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Watermark and Credits Section */}
          <div className="relative mt-16 pt-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold text-gray-100 select-none">Starway Link</span>
            </div>
            <div className="relative text-center">
              <p className="text-sm text-gray-500">
                Designed by <a href="#" className="text-blue-600 hover:underline">Starway Link</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }


