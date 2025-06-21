import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabhanshu Sharma - Portfolio",
  description: "Experienced Web Designer with 11+ years of expertise in creating user-centric, responsive, and accessible digital experiences. Initially focused on web design, I have evolved to specialize in both UI Design (Figma, Photoshop, Illustrator, and UX principles) and UI Development (HTML5, CSS3, JavaScript, React.js). I bridge the gap between design and development, transforming ideas into visually appealing, interactive, and WCAG-compliant websites. Continuously learning and growing, I am currently expanding my front-end development skills with React.js to build dynamic, high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
