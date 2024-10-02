import reactLogo from "@/../../public/assets/images/icons/react-logo.svg";
import expressLogo from "@/../../public/assets/images/icons/express-logo.svg";
import nextLogo from "@/../../public/assets/images/icons/next-logo.svg";
import nodeLogo from "@/../../public/assets/images/icons/node-logo.svg";
import reduxLogo from "@/../../public/assets/images/icons/redux-logo.svg";
import mongoLogo from "@/../../public/assets/images/icons/mongo-logo.svg";
import graphqlLogo from "@/../../public/assets/images/icons/graphql-logo.svg";
import tailwindLogo from "@/../../public/assets/images/icons/tailwind-logo.svg";
import { SkillComponent } from "@/components/core-components/skill-component/skill-component";

const Skills = () => {
  return (
    <div id="skills" className="sm:p-[4rem] text-primaryLight">
      <div className="rounded-2xl p-[calc(10vw-4rem)] _container_padding_top bg-primaryDark bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
        <div className="max-sm:p-[4rem] flex items-center gap-3">
          <span className="_section_heading">Skills</span>
          <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
        </div>
        <div className="flex _container_padding_top w-full flex flex-wrap items-center justify-center gap-[6rem]">
          <SkillComponent
            img={nextLogo}
            width={150}
            value={90}
            stack="Next.js"
          />
          <SkillComponent
            img={reactLogo}
            width={100}
            value={95}
            stack="React.js"
          />
          <SkillComponent
            img={expressLogo}
            width={200}
            value={85}
            stack="Express.js"
          />
          <SkillComponent
            img={nodeLogo}
            width={120}
            value={80}
            stack="Node.js"
          />
          <SkillComponent
            img={reduxLogo}
            width={100}
            value={80}
            stack="Redux"
          />
          <SkillComponent
            img={mongoLogo}
            width={50}
            value={80}
            stack="MongoDB"
          />
          <SkillComponent
            img={graphqlLogo}
            width={110}
            value={75}
            stack="GraphQL"
          />
          <SkillComponent
            img={tailwindLogo}
            width={120}
            value={95}
            stack="Tailwind"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
