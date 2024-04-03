import Typography from "./Typography";

const data = [
  {
    position: "Frontend Developer",
    company: "Invoke Solutions ",
    duration: "Aug 2023 - Present",
    description:
      "Specializing in developing compelling and intuitive user experiences, thriving on continuous learning and implementing new technologies to enhance the overall functionality and aesthetics of web applications.",
    skills: [
      "React JS",
      "Next JS",
      "Vercel",
      "Tailwind CSS",
      "Material UI",
      "Wordpress",
    ],
  },
  {
    position: "Product Management Intern",
    company: "Celcom Axiata Berhad",
    duration: "Jul 2021 - Sep 2021",
    description:
      "Collaborated with diverse teams to optimize our products, from analyzing market trends to coordinating successful product launches. Engaged in all stages of the product life cycle, ensuring our offerings not only meet customer needs but also align with company objectives.",
    skills: ["Project management", "Excel", "Jira", "Problem solving"],
  },
];

// const data = [
//   {
//     position: "Position here",
//     company: "Company here",
//     duration: "Aug 2023 - Present",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
//     skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
//   },
//   {
//     position: "Position here",
//     company: "Company here",
//     duration: "Aug 2023 - Present",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in",
//     skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
//   },
// ];
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
