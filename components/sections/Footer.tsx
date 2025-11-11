"use client";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 pb-4 md:pt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Brand & Contact */}
          <div className="space-y-5">
            <h3 className="text-4xl md:text-5xl font-bold">
              NotBear.Collective
            </h3>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-light">
                Get in touch
              </p>
              <a
                href="mailto:hello@notbear.co"
                className="text-xl md:text-2xl text-white hover:text-[var(--color-yellow)] transition-colors duration-200 block"
              >
                hello@notbear.co
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
                aria-label="Behance"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
                aria-label="Dribbble"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Navigation */}
          <div className="flex justify-start md:justify-end">
            <nav className="space-y-6 text-left md:text-right">
              <a
                href="#home"
                className="block text-2xl md:text-3xl text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#work"
                className="block text-2xl md:text-3xl text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
              >
                Work
              </a>
              <a
                href="#about"
                className="block text-2xl md:text-3xl text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-2xl md:text-3xl text-white hover:text-[var(--color-yellow)] transition-colors duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright - Centered at bottom */}
        <div className="mt-5 text-center">
          <p className="text-white/60 text-sm md:text-base">
            ©2025 NotBear.Collective. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
