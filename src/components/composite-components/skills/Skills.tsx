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
import jsLogo from "@/../../public/assets/images/icons/javascript-logo.svg";
import tsLogo from "@/../../public/assets/images/icons/typescript-logo.svg";
import pythonLogo from "@/../../public/assets/images/icons/python-logo.svg";
import sqlLogo from "@/../../public/assets/images/icons/sql-logo.svg";
import htmlLogo from "@/../../public/assets/images/icons/html-logo.svg";
import cssLogo from "@/../../public/assets/images/icons/css-logo.svg";
import zustandLogo from "@/../../public/assets/images/icons/zustand-logo.svg";
import nestLogo from "@/../../public/assets/images/icons/nestjs-logo.svg";
import fastapiLogo from "@/../../public/assets/images/icons/fastapi-logo.svg";
import socketLogo from "@/../../public/assets/images/icons/socket-logo.svg";
import nginxLogo from "@/../../public/assets/images/icons/nginx-logo.svg";
import gitLogo from "@/../../public/assets/images/icons/git-logo.svg";
import githubLogo from "@/../../public/assets/images/icons/github-logo.svg";
import jestLogo from "@/../../public/assets/images/icons/jest-logo.svg";
import cypressLogo from "@/../../public/assets/images/icons/cypress-logo.svg";
import { SkillComponent } from "@/components/core-components/skill-component/skill-component";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { img: jsLogo, width: 100, value: 98, stack: "JavaScript" },
      { img: tsLogo, width: 100, value: 98, stack: "TypeScript" },
      { img: pythonLogo, width: 100, value: 95, stack: "Python" },
      { img: golangLogo, width: 200, value: 75, stack: "Golang" },
      { img: sqlLogo, width: 100, value: 80, stack: "SQL" },
      { img: htmlLogo, width: 100, value: 95, stack: "HTML" },
      { img: cssLogo, width: 100, value: 95, stack: "CSS" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { img: nextLogo, width: 150, value: 90, stack: "Next.js" },
      { img: reactLogo, width: 100, value: 95, stack: "React.js" },
      { img: reduxLogo, width: 100, value: 90, stack: "Redux" },
      { img: zustandLogo, width: 100, value: 90, stack: "Zustand" },
      { img: tailwindLogo, width: 120, value: 95, stack: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { img: nodeLogo, width: 120, value: 90, stack: "Node.js" },
      { img: expressLogo, width: 200, value: 95, stack: "Express.js" },
      { img: nestLogo, width: 120, value: 85, stack: "Nest.js" },
      { img: fastapiLogo, width: 100, value: 90, stack: "FastAPI" },
      { img: graphqlLogo, width: 110, value: 80, stack: "GraphQL" },
      { img: socketLogo, width: 100, value: 80, stack: "Socket.io" },
    ],
  },
  {
    title: "Database",
    skills: [
      { img: mongoLogo, width: 50, value: 90, stack: "MongoDB" },
      { img: awsLogo, width: 100, value: 90, stack: "PostgresSQL" },
      { img: reduxLogo, width: 100, value: 80, stack: "Redis" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { img: dockerLogo, width: 100, value: 80, stack: "Docker" },
      { img: awsLogo, width: 100, value: 75, stack: "AWS" },
      { img: nginxLogo, width: 100, value: 75, stack: "Nginx" },
      { img: gitLogo, width: 100, value: 98, stack: "Git" },
      { img: githubLogo, width: 100, value: 95, stack: "Github" },
      { img: jestLogo, width: 100, value: 85, stack: "Jest" },
      { img: cypressLogo, width: 100, value: 85, stack: "Cypress" },
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
              <div className="flex w-full flex-wrap items-center justify-start gap-[3rem]">
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
