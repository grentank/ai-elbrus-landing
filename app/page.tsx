import AboutTheIntensive from "@/components/sections/about-the-intensive";
import ExpertsSection from "@/components/sections/experts-section";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import HowTrainingWorks from "@/components/sections/how-training-works";
import PaymentSection from "@/components/sections/payment-section";
import Programm from "@/components/sections/programm";
import QuestionWithModal from "@/components/sections/question-with-modal";
import ResultsSection from "@/components/sections/results-section";
import TechLogos from "@/components/sections/tech-logos";
import TestimonialsSection from "@/components/sections/testimonials-section";
import WhoIsThisFor from "@/components/sections/who-is-this-for";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <HeroSection />
      <AboutTheIntensive />
      <TechLogos />
      <WhoIsThisFor />
      <ExpertsSection />
      <HowTrainingWorks />
      <Programm />
      <ResultsSection />
      <TestimonialsSection />
      <PaymentSection />
      <QuestionWithModal />
      <Footer />
    </div>
  );
}
