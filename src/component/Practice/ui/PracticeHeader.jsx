import React from "react";

const PracticeHeader = () => {
  return (
    <div className="absolute top-0 flex px-3 2xl:py-2 2xl:px-4 pb-3 2xl:pb-4 bg-dgray rounded-bl-[1.5rem] 2xl:rounded-bl-[2rem] rounded-br-[1.5rem] 2xl:rounded-br-[2rem] element16">
      <div className="flex gap-3 justify-center items-center element17">
        <i className="fa-solid fa-shield-halved text-3xl text-white"></i>
        <h1 className="text-4xl 2xl:text-5xl text-white font-bold">
          Practice
        </h1>
      </div>
    </div>
  );
};

export default PracticeHeader;
