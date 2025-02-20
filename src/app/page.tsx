'use client'
import FeaturedCourses from "../components/FeaturedCourses";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Instructors from "../components/Instructors";
import Testimonials from "../components/Testimonials";
import UpcomingEvents from "../components/UpcomingEvents";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <div >
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingEvents/>
      <Instructors/>
      <Footer/>
      </main>
    </div>
  );
}
