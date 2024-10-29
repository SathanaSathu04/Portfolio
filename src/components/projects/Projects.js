import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Web Development"
          des="I had done a mini project on E-commerce website.This is the team project.Here my role is to build a front-end part by using HTML,CSS,JS.It is the website for selling and buying the product."
          src={projectOne}
        />
        <ProjectsCard
          title="Artificial Intelligence"
          des=" I had also done a mini project on articial intelligence to find whether the logo is real or fake.In this we use the AI algorithms i.e.,YOLO&CNN algorithm!"
          src={projectTwo}
        />
        <ProjectsCard
          title="To-do list"
          des=" I developed a todo list react single page application for developing my skills!"
          src={projectThree}
        />
        <ProjectsCard
          title="Personal Portfolio"
          des=" Developed my personal portfolio based on my skills and knowledge!"
          src={projectFour}
        />
        
        
      </div>
    </section>
  );
}

export default Projects