import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import venturingVibes from "@/../../public/assets/images/project-images/venturing-vibes.jpg";
import Image from "next/image";

const ProjectsCard = () => {
    return (
        <div
            className="group flex gap-[1rem] w-full p-[1rem] hover:bg-white/[0.05] 
            transition-all duration-300 hover:shadow-[inset_0_1px_0_1px_rgba(255,255,255,0.02)] hover:drop-shadow-lg"
        >
            <Image
                src={venturingVibes}
                width={400}
                alt="Project Image"
                className="border"
            />
            <div className="flex flex-col justify-between gap-[1rem]">
                <div className="flex gap-[.4rem] text-[1.5rem] font-light text-white group-hover:text-accent transition-all duration-300 group-hover:text-[1.6rem]">
                    Venturing Vibes
                </div>
                <div className="font-thin text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                    aspernatur in asperiores tempora ipsa reiciendis placeat alias sunt
                    voluptas aperiam, aut exercitationem corrupti perferendis labore
                    dignissimos dolores molestias! Odit, soluta!
                </div>
                <div className="flex gap-[1rem]">
                    <BsGithub size={25} />
                    <GoLinkExternal size={25}/>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
