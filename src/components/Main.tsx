import React from 'react';
import ImageComponent from './Image'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {  FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const Main = () => {
    return (
        <div className="w-full h-screen text-center flex justify-center">
            <div className="max-w-[1240px] w-full h-full mx-2 p-auto flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widset text-gray-600">
                    Lets build something together
                </p>
                <h1 className="py-4 text-gray-700 font-bold text-3xl">Hi I am <span className="text-[#5651e5]">Tahereh</span></h1>
                <h1 className="py-2 text-gray-700 font-bold text-4xl">
                    A Front-End Web Developer
                </h1>
             
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                I am a front-end web developer specializing in building (and occasionally designing) expectional digital experiences. Currently, I am focused on responsive front-end web applications while learning more about Front end and Nextjs technologies.i want be best software engineer.
                </p>
                <div className="flex">
                <ImageComponent imageUrl="/assests/me/1.jpg" alt="personal"  />
                </div>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href={"https://www.linkedin.com/in/tahereh-salemi"}>
                    <FaLinkedinIn />
                  </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href={"https://github.com/tahereh-s"}>
                    <FaGithub />
                  </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="mailto:taherehsalemi1991@gmail.com">
                  <AiOutlineMail />
                  </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Main;
