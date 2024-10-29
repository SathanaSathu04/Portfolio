import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Paper Presentation"
          des="Participated in paper presentation which was condeucted by SNS college of technology"
         
        />
        <Card
          title="App Development"
          des="Developing the react single page application for practicing and developin my skills."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Workshop"
          des="Attend the workshop on mobile application development which was conducted by Coimbatore Institute of Engineering and Technology"
          icon={<SiProgress />}
        />
        <Card
          title="Publications"
          des="I had published the paper in the chapter of Fake logo detection in python on Aknik Publications which was conducted by Coimbatore Institute of Engineering and Technology."
          icon={<FaMobile />}
        />
      
      </div>
    </section>
  );
}

export default Features