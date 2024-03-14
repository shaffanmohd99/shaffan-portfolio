"use client";
import Typography from "./components/Typography";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import useElementOnScreen from "@/hooks/useElementOnScreen";
import { NavigationContext } from "@/context/navigationContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const [refCallback, isVisible] = useElementOnScreen();
  const { setposition } = useContext(NavigationContext);
  useEffect(() => {
    setposition(isVisible);
  }, [isVisible]);

  return (
    <div className="flex flex-col">
      <div id="about" ref={refCallback} className="lg:min-h-[400px] py-8 mb-24">
        <Typography variant="subtitle">Lorem ipsum dolor sit amet</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
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
          Nav 3
        </Typography>
        <div>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
// #ccd6f6
