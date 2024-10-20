'use client'
import { StickyScroll } from "./ui/sticky-scroll-reveal"
import "../Styles/WhyChooseUs.css"

const reasons = [
    {
      title: "Expert Instructors",
      description: "Our instructors are professional musicians with years of experience, ensuring top-quality lessons and guidance for all students."
    },
    {
      title: "Personalized Learning",
      description: "We offer customized lesson plans that cater to each student's unique learning style, pace, and goals."
    },
    {
      title: "Wide Range of Instruments",
      description: "From guitar to piano, drums, and more, we offer lessons for a variety of instruments to suit your musical interests."
    },
    {
      title: "Flexible Scheduling",
      description: "Our flexible class timings make it easy for you to fit music lessons into your busy schedule."
    },
    {
      title: "Performance Opportunities",
      description: "Students get a chance to showcase their progress in recitals, concerts, and events throughout the year."
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Our modern studios and equipment create an inspiring and comfortable environment for learning."
    },
    {
      title: "Affordable Pricing",
      description: "We provide competitive rates and flexible payment options, making quality music education accessible to everyone."
    },
  ];
  
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={reasons}/>
    </div>
  )
}

export default WhyChooseUs