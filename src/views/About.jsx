import React from 'react';
import resume from '../assets/omcv.png';
import styles from './About.css';

export default function About() {
  return (
    <>
      <div className={styles.container}>
        <p>
          I'm a software developer with a background in fine art and design. I
          am a clear and effective communicator, creative problem solver, and
          have a strong sense for aesthetics. I've been propelled into the
          amazing world of UI/UX and front end development where I strive to
          build designs that are accessible and human-centered.
        </p>
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
