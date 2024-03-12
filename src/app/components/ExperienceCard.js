import Typography from "./Typography";

// const data = [
//   {
//     position: "Sofware Engineer",
//     company: "Invoke Solutions ",
//     duration: "Aug 2023 - Present",
//     description:
//       "Specialize in crafting engaging and seamless user experiences by building robust frontend interfaces. I actively collaborate with cross-functional teams to integrate new APIs and contribute to designing user flows and interfaces. I thrive on staying at the forefront of industry trends, consistently learning and implementing new technologies to enhance the overall functionality and aesthetics of web applications.",
//   },
// ];

const data = [
  {
    position: "Position here",
    company: "Company here",
    duration: "Aug 2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
    skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
  },
  {
    position: "Position here",
    company: "Company here",
    duration: "Aug 2023 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
    skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
  },
];
export default function ExperienceCard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div key={index} className="border border-[#ccd6f6] p-4 rounded-lg">
            <div key={index} className=" flex lg:flex-row flex-col gap-4 ">
              <div className="lg:w-1/3 w-full">
                <Typography variant="body" className="font-bold">
                  {item.position}
                </Typography>
                <Typography variant="p" className="text-lightColorText">
                  {item.company}
                </Typography>
                <Typography variant="p" className="text-lightColorText">
                  {item.duration}
                </Typography>
              </div>
              <div className="lg:w-2/3 w-full">
                <Typography>{item.description}</Typography>
              </div>
            </div>
            <div className="mt-4 flex gap-2 flex-wrap">
              {item.skills.map((skill, indexSkill) => (
                <Typography
                  key={indexSkill}
                  variant="caption"
                  className="bg-aquamarine-700 py-1 px-2 rounded-xl"
                >
                  {skill}
                </Typography>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
