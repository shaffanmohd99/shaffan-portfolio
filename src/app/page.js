"use client";
import Typography from "./components/Typography";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import { NavigationContext } from "@/context/navigationContext";
import { useContext, useEffect } from "react";

const text = [
  "I graduated from the University of Malaya with a bachelor's degree in mechanical engineering back in 2022. My first exposure to tech was during my internship days as a product manager. Little did I know, this experience would open my eyes to the world of product development, sparking my interest in software engineering.",
  "When I was applying for my first job, I stumbled upon an exciting opportunity to delve into software development. It was a chance for me to embark on a journey toward becoming a full-stack software developer while gaining practical experience in a professional setting. Without hesitation, I seized the opportunity, eager to immerse myself in the dynamic world of software engineering.",
  "Now I realised that the tech world is always changing, and I know I need to keep up. That's why I'm constantly seeking out new ways to learn and grow. Whether it's through online courses or hands-on projects, I'm always eager to expand my skillset and stay ahead of the curve.",
];

export default function Home() {
  const [refCallback, isVisible] = useElementOnScreen();
  const { setposition } = useContext(NavigationContext);
  useEffect(() => {
    setposition(isVisible);
  }, [isVisible]);

  return (
    <div className="flex flex-col">
      <div id="about" ref={refCallback} className="lg:min-h-[400px] py-8 mb-24">
        <Typography variant="subtitle" className="text-aquamarine-300 mb-10">
          About
        </Typography>
        <div className="flex flex-col gap-3">
          {text.map((item, index) => (
            <Typography key={index} variant="p">
              {item}
            </Typography>
          ))}
        </div>
      </div>
      <div id="experience" ref={refCallback} className="   py-8 mb-24">
        <Typography variant="subtitle" className="text-aquamarine-300 mb-10">
          Experience
        </Typography>
        <div>
          <ExperienceCard />
        </div>
      </div>
      <div id="project" ref={refCallback} className=" py-8 mb-24">
        <Typography variant="subtitle" className="text-aquamarine-300 mb-10">
          Projects
        </Typography>
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
// #ccd6f6
