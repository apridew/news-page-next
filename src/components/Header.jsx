import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex items-center gap-2 justify-between py-4">
      {/* logo */}
      <div className="font-bold text-xl bg-slate-700 text-white p-2 hover:opacity-80 transition-all">
        <Link href={"/"}>News Page </Link>
      </div>

      {/* Navbar */}
      <Navbar />
    </header>
  );
}
