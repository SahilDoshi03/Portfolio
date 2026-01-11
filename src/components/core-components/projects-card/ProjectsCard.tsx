import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectsCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  liveLink?: string;
  githubLink?: string;
}

const ProjectsCard = ({
  title,
  description,
  image,
  liveLink,
  githubLink,
}: ProjectsCardProps) => {
  return (
    <div
      className="group flex flex-col sm:flex-row gap-[1rem] w-full py-[1.25rem] hover:px-[1.25rem] hover:bg-white/[0.05] 
            transition-all duration-300 hover:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.02)] hover:drop-shadow-lg"
    >
      <Image
        src={image}
        alt="Project Image"
        className="sm:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] border"
        style={{ objectFit: "cover" }}
      />
      <div className="flex flex-col justify-between gap-[1rem]">
        <div
          className="flex gap-[.4rem] text-[1.2rem] xl:text-[1.5rem] font-light text-white
                    group-hover:text-accent transition-all duration-300 group-hover:text-[1.3rem] group-hover:xl:text-[1.6rem]"
        >
          {title}
        </div>
        <div className="text-[.8rem] md:text-[1rem] text-justify font-thin text-white">
          {description}
        </div>
        <div className="flex items-center gap-[.6rem] md:gap-[.8rem] xl:gap-[1rem]">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <BsGithub className="text-[1.2rem] xl:text-[2rem]" />
            </Link>
          )}

          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors duration-300"
            >
              <GoLinkExternal className="text-[1.2rem] xl:text-[2rem]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

