import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] max-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        < div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/html.png"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>HTML</h1>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/css.jpg"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>CSS</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/javascript.png"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>JAVASCRIPT</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/react.png"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>REACT</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/tailwind.png"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>TAILWIND</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/nextjs.svg"
                 width={100} height={100}
                  alt="/"
                />  
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>NEXT</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                 src="/assests/angular.png"
                 width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>ANGULAR</h1>
              </div>
            </div>
          </div><div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assests/github.png"
                  width={100} height={100}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1>GITHUB</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
