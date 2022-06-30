import React from 'react';
import resume from '../assets/omcv.png';
// import AboutCard from '../components/AboutCard';


export default function About() {
  return (
    <>
      <div>
        <p>about me</p>
        <a href="https://www.linkedin.com/in/olivia14miller/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/oliviaamiller" target="_blank">
          GitHub
        </a>
        <a href="mailto:oliviaoliviaolivia@gmail.com">Email</a>
        <a target="_blank" href={resume}>
          Resume
        </a>
      </div>
    </>
  );
}
