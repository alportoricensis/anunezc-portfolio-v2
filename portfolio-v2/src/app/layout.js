import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alex Nunez",
  description: "Alex Nunez-Carrasquillo's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://aframe.io/releases/1.4.2/aframe.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
        <footer className="fixed bottom-0 w-full bg-black/70 text-white text-sm px-4 py-8 z-50 flex justify-between items-center font-mono backdrop-blur-md border-t border-white/10">
          <div className="flex space-x-4">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <a href="/projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="/about" className="hover:text-cyan-400 transition">About</a>
            <a href="/skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="/education" className="hover:text-cyan-400 transition">Education</a>
            <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:anunezc@umich.edu" className="hover:text-green-400 transition">Email</a>
            <a href="https://www.linkedin.com/in/anunezcarrasquillo/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
            <a href="https://github.com/alportoricensis" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">GitHub</a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Resume</a>
          </div>
        </footer>
      </body>
    </html>
  );
}

