import Link from "next/link";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";
import "./globals.css";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Universities in Germany",
  description: "Browse public and private universities across all 16 German states.",
};

// Runs before the page paints so the saved (or system) theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand"><span className="brand-mark" aria-hidden="true" />Uni Germany</Link>
            <nav aria-label="Main">
              <Link href="/">Universities</Link>
              <Link href="/guide">Student guide</Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
