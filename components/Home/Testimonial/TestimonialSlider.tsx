import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCards from './TestimonialCards';


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 2, partialVisibilityGutter: 40 },
  desktop: { breakpoint: { max: 1400, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};



const testimonials = [
  {
    name: "Elara Jennings",
    role: "Fashion Designer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci",
    avatar: "/images/testimonial1.png",
  },
  {
    name: "Wade Jennings",                                                                                                                                                                                  
    role: "Fashion Designer",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget justo incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci",
    avatar: "/images/testimonial2.png",
  },
  {
    name: "Aisha Bello",
    role: "Product Manager",
    text:
      "Short testimonial copy. Great service and professional staff. Highly recommendadipiscing elit. Phasellus eget jus    to incidunt faucibus. Nullam auctor, nisl vel pharetra consequat, nunc orci.",
    avatar: "/images/testimonial2.png",
  },
];



const TestimonialSlider = () => {
  return (
    
      <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            arrows={false}   
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
             dotListClass="flex justify-center mt-6 testimonial-dots-1"
            autoPlaySpeed={4000}
           
           
            >
                {testimonials.map((t, i) => (
                    <TestimonialCards
                     tname={t.name} 
                     trole={t.role} 
                     tavatar={t.avatar} 
                     text={t.text} i="hohn doe"  key={i} />
                ))}
                
</Carousel>
    
  )
}

export default TestimonialSlider
