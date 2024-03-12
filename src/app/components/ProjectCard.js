import Image from "next/image";
import Typography from "./Typography";
const data = [
  {
    title: "Lorem Ipsum",
    image: "/cat.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
  },
  {
    title: "Lorem Ipsum",
    image: "/cat.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit",
    skills: ["skill 1", "skill 2", "skill 3", "skill 4", "skill 5"],
  },
];
export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className=" group border border-colorText p-4 rounded-lg cursor-pointer hover:border-aquamarine-300 hover:bg-blue-zodiac-600/10 transition duration-300 ease-in-out"
          >
            <Typography
              variant="body"
              className="font-bold group-hover:text-aquamarine-300"
            >
              {item.title}
            </Typography>
            <div className="flex lg:flex-row flex-col  gap-4 mt-2">
              <div className="lg:w-1/3 w-full h-[200px] relative overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  fill={true}
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="lg:w-2/3 w-full">
                <Typography variant="p" className="text-lightColorText">
                  {item.description}
                </Typography>
                <div className="flex gap-2 flex-wrap mt-6">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
