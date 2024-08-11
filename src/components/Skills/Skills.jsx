import ProgressBar from "@/components/ProgressBar/ProgressBar";

const Skills = () => {
  return (
    <div className="_container_padding_top _container_padding_x bg-center bg-cover text-primaryLight">
      <div className="flex items-center gap-3">
        <span className="text-[4rem] tracking-wide">Skills</span>
        <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
      </div>
      <div className="_container_padding_top w-full flex items-center gap-[10vw]">
        <div className="w-full">
          <ProgressBar title="Next.js" percentage={95} />
          <ProgressBar title="Express.js" percentage={90} />
          <ProgressBar title="Node.js" percentage={85} />
          <ProgressBar title="MongoDB" percentage={75} />
          <ProgressBar title="Redux-Toolkit" percentage={97} />
          <ProgressBar title="Typescript" percentage={60} />
        </div>
        <div className="w-full">
          <ProgressBar title="TailwindCSS" percentage={98} />
          <ProgressBar title="Next-Auth" percentage={80} />
          <ProgressBar title="Git / Github" percentage={80} />
          <ProgressBar title="Python" percentage={88} />
          <ProgressBar title="Machine Learning" percentage={75} />
          <ProgressBar title="Deep Learning" percentage={65} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
