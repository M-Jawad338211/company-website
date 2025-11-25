"use client";

import Bookings from "../components/portfolio-details/bookings";
import Partners from "../components/portfolio-details/partners";
import ServicesAccordion from "../components/portfolio-details/services-accordion";
import Testimonials from "../components/portfolio-details/testimonials";

export default function Portfolio() {
  return (
    <div className="max-w-9xl mx-auto">
      <Partners />
      <ServicesAccordion />
      <Testimonials />
      <Bookings />
    </div>
  );
}
