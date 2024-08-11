import "../../../public/assets/images/hero-bg.jpg";
import "../../../public/assets/images/abstract.jpg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="flex items-center justify-center  md:justify-start md:items-end min-h-screen text-primaryLight relative overflow-hidden">
      <div
        className="absolute
      md:translate-x-[10%] md:translate-y-[40%] lg:translate-x-[25%] lg:translate-y-[35%] xl:translate-x-[30%] xl:translate-y-[40%] 2xl:translate-x-[30%] 2xl:translate-y-[50%]
      h-[100vh] w-[100vw] md:h-[140vw] md:w-[140vw] lg:h-[120vw] lg:w-[120vw] xl:h-[110vw] xl:w-[110vw]
      md:overflow-hidden md:rounded-full md:border md:border-[2px] md:border-white outline outline-[1px] outline-offset-[10rem] outline-gray-100/25"
      >
        <img
          src="/assets/images/abstract.jpg"
          alt="Circle Image"
          className="w-full h-full object-cover"
        />
      </div>

      <section
        className="flex flex-col gap-4 w-[40rem] md:ml-[10vw] md:mb-[10rem] p-[2.5rem] z-10 bg-secondaryDark rounded-xl 
        bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      >
        <div>
          <h3 className="text-[2.5rem] text-accent font-[600] tracking-wide">
            Hello World!
          </h3>
          <h2 className="text-[5rem] tracking-wide font-[300]">
            I'm Sahil Doshi
          </h2>
          <h3 className="text-[2.5rem] tracking-wide font-[100]">
            Full Stack Developer
          </h3>
        </div>
        <p className="text-[1.3rem] text-justify tracking-wide font-[100]">
          I’m a versatile software developer based in Mumbai, India, with
          extensive expertise in MERN stack development. Check out my projects
          to see how I transform concepts into engaging applications. Let’s
          connect and explore how we can work together to bring your ideas to
          fruition!
        </p>
        <div className="flex gap-[1.5rem]">
          <BsGithub size={40} />
          <BsLinkedin size={40} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
