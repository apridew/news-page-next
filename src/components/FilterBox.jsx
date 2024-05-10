"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FilterBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form className="flex justify-between py-2" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Type keywords here..."
        className="outline-none py-2 text-slate-600 w-full"
      />
      <button
        className="bg-slate-700 text-sm text-white p-2 transition-all disabled:bg-slate-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
}
