// src/components/About.js
import React from "react";

function About() {
  return (
    <section id="about">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', gap: 10}}>
      <img src="./img.jpg" style={{width: '100px', border: '1px solid #333'}}/>
        <h1>Pham Thi Kim Danh</h1>
      </div>
      <h2>About Me</h2>
    
      <p>Hello! I am a Frontend Developer with strong skills in HTML,
         CSS, JavaScript, ReactJS, and VueJS. I am capable of building
          visually appealing and user-friendly interfaces, creating smooth 
          experiences for users. With a solid foundation in core web
           technologies like HTML and CSS, I can create websites that 
           meet design requirements. 
        </p>
        <p>
        In addition, I have mastered and am proficient in using ReactJS 
        and VueJS, two popular JavaScript libraries/frameworks that enable 
        me to build modern, dynamic, and high-performance web applications. 
        I can create flexible and maintainable web apps, optimizing performance
         and scalability. With this combination, I can not only develop user 
         interfaces but also enhance interactivity and state management in applications.
        </p>
    </section>
  );
}

export default About;
