import Link from "next/link";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sport",
  "technology",
];

export default function Navbar() {
  return (
    <nav>
      <div className="md:flex lg:gap-4 gap-2 text-xs uppercase hidden">
        {categories.map((category) => (
          <Link
            className="hover:text-white hover:bg-slate-500 transition duration-300 h-full w-full p-3"
            key={category}
            href={`#${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}
