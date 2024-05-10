import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListNews from "@/components/ListNews";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header/>
      <Filter/>
      <ListNews/>
      <Pagination/>
      <Footer/>
    </div>
  );
}
