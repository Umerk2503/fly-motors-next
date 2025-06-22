import { Carousel } from "@/components/Carousel";
import { Navbar } from "@/components/Navbar";
import CardSection from "@/components/Card_Section/CardSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <CardSection></CardSection>
      {/* <Link href='/inventory'><h1>Inventory</h1></Link> */}

    </div>
  );
}
