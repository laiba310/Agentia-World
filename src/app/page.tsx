import AnimatedSection from "@/components/AnimatedSection";
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
   <AnimatedSection><Features/></AnimatedSection>
   <AnimatedSection><NeuralCapabilities/></AnimatedSection>
   <AnimatedSection><Pricing/></AnimatedSection>
   <AnimatedSection> <ContactForm/></AnimatedSection>
   <Footer/>
   </>
  );
}
