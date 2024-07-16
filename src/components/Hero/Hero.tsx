import './Hero.css'
import Image from "next/image";
import HeroCoder from "../../../public/hero-coder.webp";

const Hero = () => {
  return (
    <main>
      <div className="_hero flex flex-col justify-end h-[100vh] text-left p-[5rem]">
        <div className="bg-white max-w-[50vw] p-[2rem] rounded-xl">
          <div className="font-bold text-[1.5rem]">Hi, I am Sahil</div>
          <div className="font-bold text-[1.5rem]">
            I am a Software Developer
          </div>
          <div className="text-[1.2rem]">
            I am currently working as a full stack developer at Logixal Clould
            Solutions LLP.
          </div>
        </div>
      </div>
      {/* <Image
        src={HeroCoder}
        alt="Hero Image"
        style={{
          width: "100vw",
        }}
      /> */}
    </main>
  );
};

export default Hero;
