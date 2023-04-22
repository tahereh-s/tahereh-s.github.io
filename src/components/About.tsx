import React from "react";
// import laptop from '../../public/assests/laptop.png'
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex item-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-col-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase">About </p>
          <h2>Who I Am</h2>
          <p> // I am not your normal developer </p>
          <p>
            I have spent the last 4 years in the fire service working as a
            professional firefighter & paramedic. 1 have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML & CSS to make some minor edits on a small business website
            that I was operating. What I thought was just a few small edits
            turned into a love for programming.
          </p>
          <p>
          Fascinated with how intricate
            programming can be I was quickly drawn to learn more. I started
            learning javascript and was even more enthused with making websites
            interactive. I then started freelancing for e-commerce companies on
            the Shopify platform. I am now spending my time building projects
            with React JS, Firebase, and learning new technologies.
          </p>
          <p>check out some of my latest project</p>
        </div>
        <div>
            <img src={"../../public/laptop.png"} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
