"use client";
import { NavigationContext } from "@/context/navigationContext";
import Typography from "./Typography";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useContext } from "react";

const nav = [
  { value: "About", href: "#about", id: "about" },
  { value: "Experience", href: "#experience", id: "experience" },
  { value: "Project", href: "#project", id: "project" },
];
const icons = [
  {
    icon: <FaGithub />,
    link: "https://github.com/shaffanmohd99",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/shaffanmohd/",
  },
];
export default function NavBar() {
  const { position } = useContext(NavigationContext);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col gap-2">
          <Typography
            variant="title"
            className="bg-gradient-to-r from-aquamarine-300 to-colorText bg-clip-text text-transparent"
          >
            Shaffan Mohd
          </Typography>
          <Typography
            variant="subtitle"
            className="bg-gradient-to-r from-aquamarine-300 to-colorText bg-clip-text text-transparent"
          >
            Software Developer
          </Typography>
          <Typography variant="p">
            Passionate software developer with a passion for crafting seamless
            user experience.
          </Typography>
        </div>
        <div className="mt-8">
          {nav.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="  h-20  flex items-center cursor-pointer ">
                <Typography
                  variant="subtitle"
                  className={`pl-4 h-full flex items-center border-l-8 transition duration-500 ease-in-out  hover:text-aquamarine-600 hover:border-aquamarine-600 ${
                    position === item.id
                      ? "text-aquamarine-800 border-aquamarine-800"
                      : "border-aquamarine-300"
                  }`}
                >
                  {item.value}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="text-aquamarine-300 hover:text-aquamarine-700 hover:scale-110 cursor-pointer text-[32px] transition duration-300 ease-in-out"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
