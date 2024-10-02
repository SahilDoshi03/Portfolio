import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import venturingVibes from "@/../../public/assets/images/project-images/venturing-vibes.jpg";
import Image from "next/image";

const ProjectsCard = () => {
  return (
    <div
      className="group flex gap-[1rem] w-full py-[1.25rem] hover:bg-white/[0.05] 
            transition-all duration-300 hover:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.02)] hover:drop-shadow-lg"
    >
      <Image
        src={venturingVibes}
        alt="Project Image"
        className="w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem] border"
      />
      <div className="flex flex-col justify-between gap-[1rem]">
        <div
          className="flex gap-[.4rem] text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] font-light text-white
                    group-hover:text-accent transition-all duration-300 group-hover:text-[1.6rem]"
        >
          Venturing Vibes
        </div>
        <div className="text-[.6rem] sm:text-[.8rem] md:text-[1rem] font-thin text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aspernatur in asperiores tempora ipsa reiciendis placeat alias sunt
          voluptas aperiam, aut exercitationem corrupti perferendis labore
          dignissimos dolores molestias! Odit, soluta!
        </div>
        <div className="flex items-center gap-[.6rem] md:gap-[.8rem] xl:gap-[1rem]">
          <BsGithub className="text-[1.2rem] md:text-[1.5rem] xl:text-[2rem]" />

          <GoLinkExternal className="text-[1.2rem] md:text-[1.5rem] xl:text-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
