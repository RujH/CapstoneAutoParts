import AboutUs from "./aboutUs/page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from "./landingPage/page";
import Services from "./services/page";
import ContactUs from "./contactUs/page";
export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <LandingPage />
        <Services />
        <AboutUs />
        <ContactUs /> 
        <Footer />
    </div>
  );
}
