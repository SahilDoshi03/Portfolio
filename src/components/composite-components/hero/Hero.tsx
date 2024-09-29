import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex items-center justify-center md:justify-start md:items-end h-screen text-primaryLight relative">

      <section
        className="flex flex-col gap-4 w-[35rem] md:ml-[10vw] md:mb-[10rem] p-[2.5rem] z-10 bg-secondaryDark rounded-xl 
        bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40"
      >
        <div>
          <h3 className="text-[1.5rem] text-accent font-[600] tracking-wide">
            Hello World!
          </h3>
          <h2 className="text-[3rem] tracking-wide font-[300]">
            I'm Sahil Doshi
          </h2>
          <h3 className="text-[1.5rem] tracking-wide font-[100]">
            Full Stack Developer
          </h3>
        </div>
        <p className="text-[1rem] text-justify tracking-wide font-[100]">
          I’m a versatile software developer based in Mumbai, India, with
          extensive expertise in MERN stack development. Check out my projects
          to see how I transform concepts into engaging applications. Let’s
          connect and explore how we can work together to bring your ideas to
          fruition!
        </p>
        <div className="flex gap-[1.5rem]">
          <BsGithub size={30}/>
          <BsLinkedin size={30} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
