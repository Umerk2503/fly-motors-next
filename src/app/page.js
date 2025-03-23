import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Carousel></Carousel>

      <Link href='/inventory'><h1>Inventory</h1></Link>

    </div>
  );
}
