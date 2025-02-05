import Image from "next/image";
import AboutUs from "./aboutUs/page";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <AboutUs />
        <Footer />
    </div>
  );
}
