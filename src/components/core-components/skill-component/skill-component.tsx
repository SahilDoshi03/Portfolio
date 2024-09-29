import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { CSSProperties } from "react";

type SkillComponentProps = {
  img: string | StaticImport;
  height: number;
  width: number;
  value: number;
  stack: string;
};

export const SkillComponent = ({
  img,
  width,
  value,
  stack,
}: SkillComponentProps) => {
  const numberOfLines = 60;
  const radius = 150;

  const lines = Array.from({ length: numberOfLines }).map((_, i) => {
    const angle = -135 + (i * 270) / numberOfLines;
    const lineStyle: CSSProperties = {
      transform: `rotate(${angle}deg)`,
      position: "absolute",
      width: "2px",
      height: "20px",
      backgroundColor: `${i < (value / 100) * numberOfLines ? "#3FB4B1" : "white"}`,
      transformOrigin: `0 ${radius}px`,
    };

    return <div key={i} style={lineStyle}></div>;
  });

  return (
    <div className="relative w-[300px] h-[300px]">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {lines}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image src={img} width={width} alt="skill-logo" />
      </div>
      <div className="flex flex-col items-center justify-center absolute bottom-[1rem] left-1/2 -translate-x-1/2">
        <div className="text-white text-[1.2em] font-light">{value}%</div>
        <div className="text-[1.2rem] font-light tracking-wider">{stack}</div>
      </div>
    </div>
  );
};
