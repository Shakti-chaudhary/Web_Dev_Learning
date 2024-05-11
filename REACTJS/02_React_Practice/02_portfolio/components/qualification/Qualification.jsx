import React, { useState } from "react";
import "./Qualification.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__active qualification__button button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              setToggleState(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__active qualification__button button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => {
              setToggleState(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Quilification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BCA</h3>
                <span className="qualification__subtitle">
                  CCS - University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
            {/* Quilification 2 */}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">INTERMEDEIT</h3>
                <span className="qualification__subtitle">RRSU</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2017-2019
                </div>
              </div>
            </div>
            {/* qUALIFICATION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">SNVP meerut</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2015 - 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
          </div>
          {/* <!-- ========== QUALIFICATION  CONTENT 2 ================ --> */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            {/* Quilification 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Self-Learner</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
