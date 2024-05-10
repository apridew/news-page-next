import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FilterBox from "@/components/FilterBox";
import ListNews from "@/components/ListNews";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Page",
  description: "News Page for technical test Binar Labs ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" sizes="76x76" href="static/favicon.ico" />
      <body className={inter.className}>
        <div className="max-w-screen-2xl mx-auto px-2">
          <Header />
          <FilterBox />
          <ListNews />
          <Pagination />
          <Footer />
          {children}
        </div>
      </body>
    </html>
  );
}
