import Typography from "./Typography";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

// const nav = [
//   { value: "About", href: "#about" },
//   { value: "Experience", href: "#experience" },
//   { value: "Project", href: "#project" },
// ];
const nav = [
  { value: "Nav 1", href: "#about" },
  { value: "Nav 2", href: "#experience" },
  { value: "Nav 3 ", href: "#project" },
];
const icons = [
  {
    icon: <FaGithub />,
    link: "https://github.com/",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
];
export default function NavBar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-col gap-2">
          {/* <Typography variant="title">Shaffan Mohd</Typography> */}
          <Typography variant="title">Title 1 </Typography>
          {/* <Typography variant="subtitle">Frontend developer</Typography> */}
          <Typography variant="subtitle">title 2</Typography>
          {/* <Typography variant="p">
                        Passionate front-end engineer with a keen eye for design,
                        transforming ideas into seamless and visually appealing
                        digital experiences
                      </Typography> */}
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </div>
        <div className="mt-8">
          {nav.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="  h-20  flex items-center cursor-pointer ">
                <Typography
                  variant="subtitle"
                  className="pl-4 h-full flex items-center border-l-8 transition duration-400 ease-in-out border-aquamarine-300 hover:hover:text-aquamarine-800 hover:border-aquamarine-800 "
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
