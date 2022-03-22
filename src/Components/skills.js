import "./skills.css";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <div class="skills-container">
        <p class="skills-heading">MY SKILLSET</p>
        <div class="skills-box">
          <div class="skills-left">
            <p>Core Java</p>
            <div class="sk-container">
              <div class="skill java">80%</div>
            </div>

            <p>Data Structures and Algorithms</p>
            <div class="sk-container">
              <div class="skill ds">75%</div>
            </div>

            <p>Docker</p>
            <div class="sk-container">
              <div class="skill docker">70%</div>
            </div>

            <p>Kubernetes</p>
            <div class="sk-container">
              <div class="skill Kubernetes">70%</div>
            </div>

            <p>MongoDB</p>
            <div class="sk-container">
              <div class="skill mongodb">80%</div>
            </div>

            <p>MySQL</p>
            <div class="sk-container">
              <div class="skill mysql">75%</div>
            </div>
          </div>

          <div class="skills-right">
            <p>HTML</p>
            <div class="sk-container">
              <div class="skill html">85%</div>
            </div>

            <p>CSS</p>
            <div class="sk-container">
              <div class="skill css">80%</div>
            </div>

            <p>JavaScript</p>
            <div class="sk-container">
              <div class="skill js">90%</div>
            </div>

            <p>Node JS</p>
            <div class="sk-container">
              <div class="skill node">70%</div>
            </div>

            <p>React JS</p>
            <div class="sk-container">
              <div class="skill react">80%</div>
            </div>

            <p>.NET</p>
            <div class="sk-container">
              <div class="skill net">80%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;