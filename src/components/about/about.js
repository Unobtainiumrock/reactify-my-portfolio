
import React from 'react';
import './About.css';
import profilePic from './profile-pic.jpg';
import gitHub from './GitHub.svg';
import lknd from './lknd.png';

const About = () => {
    return (
      <div>
        <div className="row" id="landing">
          <div className="col-md-3">
            <img className="animated fadeIn" id="prof-pic" src={profilePic} height="350px" width="270px" alt="profile pic of Nicholas" />
          </div>
          <div className="col-md-9">
            <p className="animated fadeIn paragraph-format">
              A Full Stack Web Developer who started his web development journey in 2016 at Hack Reactor,
              with a keen interest in focusing on the back-end. As a prior active duty member in the US Navy (5 yrs),
              Nicholas brings a unique perspective, discipline, and experience-set to the workforce. He is currently
              undergoing training at a UC Berkeley program to refresh his programming skills, as well as gain some
              exposure to new tools. Being a lifelong learner, Nicholas is extremely optimistic about what the future
              holds, and is constantly developing and evolving his technical skills. After completing his current program,
              he has plans to continue part-time education through a combination of Bradfield School of Computer Science courses and
              college CS courses. Strengths include: math, being particularly adept at pattern recognition, excelling in environments which
              provide streamlined feedback, and thriving in environments with a fast pace. Some of his technical
              skills include making apps that leverage tools such as React, webpack, redux, and node. Has also had
              exposure to both relational and nonrelational databases --MongoDB and MySQL in particular. Programming
              languages include Python, Javascript (ES5, ES6) , CSS, and HTML. Nicholas’ ultimate goal is to work at
              a tech company, which best fits his desire of constant practice and personal growth in the realm of
              computer science and computer programming.
            </p>
            </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="icon" src={gitHub} data-url="https://github.com/Unobtainiumrock" height="70px" length="70px" alt="GitHub Icon" />
            <img className="icon" src={lknd} data-url="https://www.linkedin.com/in/unobtainiumrock/" height="70px" length="70px" alt="Linked In Icon" />
          </div>
          <div className="col-md-6">
          </div>
        </div></div>
  )
}

export default About;
