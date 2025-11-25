"use client";
import Experiences from "./components/homepage-details/experiences";
import Hiring from "./components/homepage-details/hiring";
import Partnership from "./components/homepage-details/partnership";
import Solutions from "./components/homepage-details/solutions";

import "./globals.css";
import "./app.css";
import Recognition from "./components/homepage-details/recognition";
import Services from "./components/homepage-details/services";
import Projects from "./components/homepage-details/projects";
import Partners from "./components/homepage-details/partners";

export default function Home() {
  return (
    <div className="overflow-hidden max-w-9xl mx-auto">
      <Hiring />
      <Solutions />
      <Experiences />
      <Partnership />
      <Recognition />
      <Services />
      <Projects />
      <Partners />
    </div>
  );
}
