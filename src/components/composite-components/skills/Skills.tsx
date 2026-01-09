import reactLogo from "@/../../public/assets/images/icons/react-logo.svg";
import expressLogo from "@/../../public/assets/images/icons/express-logo.svg";
import nextLogo from "@/../../public/assets/images/icons/next-logo.svg";
import nodeLogo from "@/../../public/assets/images/icons/node-logo.svg";
import reduxLogo from "@/../../public/assets/images/icons/redux-logo.svg";
import mongoLogo from "@/../../public/assets/images/icons/mongo-logo.svg";
import graphqlLogo from "@/../../public/assets/images/icons/graphql-logo.svg";
import tailwindLogo from "@/../../public/assets/images/icons/tailwind-logo.svg";
import golangLogo from "@/../../public/assets/images/icons/golang-logo.svg";
import awsLogo from "@/../../public/assets/images/icons/aws-logo.svg";
import dockerLogo from "@/../../public/assets/images/icons/docker-logo.svg";
import { SkillComponent } from "@/components/core-components/skill-component/skill-component";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { img: awsLogo, width: 100, value: 45, stack: "JavaScript" },
      { img: awsLogo, width: 100, value: 45, stack: "TypeScript" },
      { img: awsLogo, width: 100, value: 45, stack: "Python" },
      { img: golangLogo, width: 200, value: 75, stack: "Golang" },
      { img: awsLogo, width: 100, value: 45, stack: "SQL" },
      { img: awsLogo, width: 100, value: 45, stack: "CSS" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { img: nextLogo, width: 150, value: 90, stack: "Next.js" },
      { img: reactLogo, width: 100, value: 95, stack: "React.js" },
      { img: reduxLogo, width: 100, value: 80, stack: "Redux" },
      { img: reduxLogo, width: 100, value: 80, stack: "Zustand" },
      { img: tailwindLogo, width: 120, value: 95, stack: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { img: nodeLogo, width: 120, value: 85, stack: "Node.js" },
      { img: expressLogo, width: 200, value: 90, stack: "Express.js" },
      { img: nodeLogo, width: 120, value: 85, stack: "Nest.js" },
      { img: awsLogo, width: 100, value: 45, stack: "FastAPI" },
      { img: graphqlLogo, width: 110, value: 75, stack: "GraphQL" },
      { img: reduxLogo, width: 100, value: 80, stack: "Socket.io" },
    ],
  },
  {
    title: "Database",
    skills: [
      { img: mongoLogo, width: 50, value: 80, stack: "MongoDB" },
      { img: awsLogo, width: 100, value: 45, stack: "PostgresSQL" },
      { img: reduxLogo, width: 100, value: 80, stack: "Redis" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { img: dockerLogo, width: 100, value: 75, stack: "Docker" },
      { img: awsLogo, width: 100, value: 45, stack: "AWS" },
      { img: dockerLogo, width: 100, value: 75, stack: "Nginx" },
      { img: dockerLogo, width: 100, value: 75, stack: "Git" },
      { img: dockerLogo, width: 100, value: 75, stack: "Github" },
      { img: dockerLogo, width: 100, value: 75, stack: "Jest" },
      { img: dockerLogo, width: 100, value: 75, stack: "Cypress" },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="sm:p-[4rem] text-primaryLight">
      <div className="rounded-2xl p-[calc(10vw-4rem)] _container_padding_top bg-primaryDark bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
        <div className="max-sm:p-[4rem] flex items-center gap-3 mb-10">
          <span className="_section_heading">Skills</span>
          <div className="w-4 h-4 bg-accent rounded-full translate-y-2"></div>
        </div>

        <div className="flex flex-col gap-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-8">
              <h3 className="text-2xl font-semibold text-secondaryLight pl-4 border-l-4 border-accent">
                {category.title}
              </h3>
              <div className="flex w-full flex-wrap items-center justify-center gap-[6rem]">
                {category.skills.map((skill) => (
                  <SkillComponent
                    key={skill.stack}
                    img={skill.img}
                    width={skill.width}
                    value={skill.value}
                    stack={skill.stack}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Skills;
