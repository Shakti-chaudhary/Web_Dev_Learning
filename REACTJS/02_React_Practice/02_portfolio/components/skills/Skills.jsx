import React from "react";
import Frontend from "./Frontend";
import "./Skills.css";
import Backend from "./Backend";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
}

export default Skills;
