import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubh Samaiya — Software Engineer",
  description:
    "Hey, I’m Shubh. I get curious, build things, and keep tweaking them. A little about me, my side projects, and what I’m learning at Habuild.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')||'dark'}catch(e){}})()` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
