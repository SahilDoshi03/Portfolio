import ProjectsCard from "@/components/core-components/projects-card/ProjectsCard";

const Projects = () => {
  return (
    <div className="relative">
      <section className="_container_padding_top _container_padding_x bg-center bg-cover text-primaryLight z-50">
        <div className="flex items-center gap-3">
          <span className="text-[4rem] tracking-wide">Projects</span>
          <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
        </div>
        <div className="_container_padding_top w-full flex items-stretch justify-evenly text-primaryLight">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
            <ProjectsCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
