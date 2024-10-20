'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
    {
      quote: "The instructors are amazing! I’ve learned so much in just a few months. The personalized attention really makes a difference.",
      name: "Sarah L.",
      title: "Incredible Learning Experience"
    },
    {
      quote: "I love the flexibility of their schedule. As a working professional, it's hard to find time, but they made it easy for me to pursue my passion.",
      name: "James K.",
      title: "Perfect for Busy People"
    },
    {
      quote: "My child has flourished since joining the school. The friendly environment and knowledgeable teachers have really nurtured her love for music.",
      name: "Emma R.",
      title: "Fantastic for Kids"
    },
    {
      quote: "The best decision I ever made! Not only have I improved my skills, but I've also had the chance to perform in front of live audiences.",
      name: "Michael P.",
      title: "Great Performance Opportunities"
    },
    {
      quote: "Highly recommended for anyone serious about music. The teachers are real professionals, and the school offers so much support.",
      name: "Alicia T.",
      title: "Exceptional Guidance"
    },
    {
      quote: "I was hesitant about learning online, but the virtual classes are excellent! The platform is easy to use, and I get the same quality instruction as in person.",
      name: "David G.",
      title: "Top-Notch Online Classes"
    },
    {
      quote: "The facilities are top-notch, and the atmosphere is so welcoming. I always feel inspired whenever I walk into the studio.",
      name: "Olivia M.",
      title: "Inspiring Environment"
    },
    {
      quote: "The school has an amazing sense of community. I've met so many fellow musicians, and we regularly collaborate on projects.",
      name: "Chris S.",
      title: "Great Community Vibe"
    },
    {
      quote: "Learning here has been a fantastic journey. The teachers are not only skilled but also incredibly supportive and encouraging.",
      name: "Nina W.",
      title: "Supportive Teachers"
    },
    {
      quote: "Affordable and excellent value for money! The quality of instruction far exceeds the price, and I’ve seen great improvement.",
      name: "Ryan D.",
      title: "Affordable and High Quality"
    }
  ];

  interface Testimonials {
    quote: string;
    name: string;
    title: string;
  }
  
const Testimonials = () => {
  return (
    <div className="py-10 h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-thin text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={testimonials}
                speed="slow"
                direction="left"
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials