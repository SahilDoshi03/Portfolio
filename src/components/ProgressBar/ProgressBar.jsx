import React from "react";

const ProgressBar = ({ title, percentage }) => {
  const dashArray = `${percentage * 0.99}px, 100px`; // Adjust for better accuracy
  return (
    <div className="mb-[2rem]">
      <div className="flex justify-between py-1">
        <span className="text-base text-primaryLight font-semibold">
          {title}
        </span>
        <span className="text-base font-semibold text-primaryLight pr-5">
          {percentage}%
        </span>
      </div>
      <svg className="w-full" viewBox="0 0 100 1" preserveAspectRatio="none">
        <path
          className="stroke-primaryLight"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          strokeWidth="1"
          fillOpacity="0"
        ></path>
        <path
          className="stroke-current"
          d="M 0.5,0.5 L 99.5,0.5"
          strokeLinecap="round"
          strokeWidth="1"
          fillOpacity="0"
          style={{
            stroke: "#3FB4B1",
            strokeDasharray: dashArray,
            strokeDashoffset: "0px",
            transition:
              "stroke-dashoffset 0.3s ease, stroke-dasharray 0.3s ease, stroke 0.3s linear",
          }}
        ></path>
      </svg>
    </div>
  );
};

export default ProgressBar;
