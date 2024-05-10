import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Page",
  description: "News Page for technical test Binar Labs ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" sizes="76x76" href="static/favicon.ico" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
