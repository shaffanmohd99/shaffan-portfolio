import Image from "next/image";
import Typography from "./Typography";
const data = [
  {
    title: "Wedding Invitation Web App",
    image: "/wedding.png",
    description:
      "I developed a wedding invitation application that simplifies RSVP management for my upcoming wedding. With this app, users can effortlessly submit their attendance, streamlining the RSVP process. As an admin, I have the ability to log in and efficiently track RSVPs, ensuring seamless coordination for the event. This full-stack web application was built using Next.js for the frontend and backend, with MongoDB serving as the database. It's deployed on Vercel, providing a reliable and accessible platform for managing wedding invitations.",
    skills: ["Next JS", "MongoDB", "Vercel", "Tailwind UI"],
    link: "https://loveshaffanbasyirah.com/",
  },
  {
    title: "Portfolio V1",
    image: "/portfolio.png",
    imageType: "contain",
    description:
      "This personal portfolio represents my initial attempt into web development, serving as a nostalgic reminder of my journey and growth in the field. Crafted with HTML, CSS, and JavaScript, this first version showcases my early efforts in building a digital presence. Deployed through GitHub Pages, it stands as a testament to my initial steps in the world of web development and serves as a foundation for future iterations.",
    skills: ["HTML", "CSS", "Javascript"],
  },
];
export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
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
                  className={`${
                    item.imageType ? "object-contain" : "object-cover"
                  } opacity-90 group-hover:opacity-100 group-hover:scale-110 transition duration-300 ease-in-out`}
                  alt={`image for ${item.title}`}
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
          </a>
        ))}
      </div>
    </>
  );
}
