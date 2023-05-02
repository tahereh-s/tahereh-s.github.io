
import React from "react";
import okala from "../../public/assests/okala1.png";
import adminpanelAngular from "../../public/assests/adminpanelAngular.jpg";
import adminpanelReact from "../../public/assests/adminpanelReact.png";

import ProjectItems from "./ProjectItems";
const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest
         uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
       <ProjectItems title="ecommerce" backgroundImg={okala} projectUrl="/okalaSite" language="ReactJs&NextJs" />
       <ProjectItems title="admin panel" backgroundImg={adminpanelAngular} projectUrl="/angularAdminPanel" language="Angular" />
       <ProjectItems title="admin panel" backgroundImg={adminpanelReact} projectUrl="/reactAdminPanel" language="ReactJs" />

      </div>
      </div>
    </div>
  );
};

export default Projects;
