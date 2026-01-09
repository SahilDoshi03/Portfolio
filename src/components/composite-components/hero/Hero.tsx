import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div id="info" className="flex items-center justify-center md:justify-start md:items-end h-screen text-primaryLight relative">
      <section
        className="flex flex-col gap-[1rem] w-[28rem] lg:w-[35rem] md:ml-[clamp(4rem,10vw,25rem)] md:mb-[clamp(4rem,8vw,10rem)] p-[2.5rem] z-10 bg-secondaryDark rounded-xl 
        bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40"
      >
        <div>
          <h3 className="text-[1.2rem] lg:text-[1.5rem] text-accent font-[600] tracking-wide">
            Hello World!
          </h3>
          <h2 className="text-[2.4rem] lg:text-[3rem] tracking-wide font-[300]">
            I'm Sahil Doshi
          </h2>
          <h3 className="text-[1.2rem] lg:text-[1.5rem] tracking-wide font-[100]">
            Full Stack Developer
          </h3>
        </div>
        <p className="text-[.9rem] lg:text-[1rem] text-justify tracking-wide font-[100]">
          I am a Software Developer based in Mumbai,India. I specialize in building scalable, 
          high-performance web applications. Experienced in modern frameworks for Full-Stack
          Development, AI-integrations, CI/CD pipelines and cloud services, with a track record of delivering
          robust, production-ready solutions.
        </p>
        <div className="flex gap-[1.5rem]">
          <BsGithub size={30} />
          <BsLinkedin size={30} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
