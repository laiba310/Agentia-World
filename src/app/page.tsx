
import ContactForm from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NeuralCapabilities from "@/components/NeuralCapabilities";
import Pricing from "@/components/pricing";


export default function Home() {
  return (
   <>
   <Header />
   <Hero/>
   <Features/>
   <NeuralCapabilities/>
   <Pricing/>
<ContactForm/>
   <Footer/>
   </>
  );
}
