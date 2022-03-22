import "./journey.css";

const Journey = () => {
  return (
    <section class="journey">
      <p class="project-heading">
        Career<span class="dot cf">+</span>
      </p>
      <div class="journey-gallary">
        <div class="ele ele1">
          <p className="companyName">ServiceNow</p>
          <p className="duration">Oct 2021 - Present</p>
          <p className="designation">Software Engineer</p>
          <ul className="skills-list">
            <li>
              At ServiceNow, we make the world of work, work better for people.
              We deliver digital workflows that create great experiences and
              unlock productivity.
            </li>
            <li>
              With 6,200+ customers, we serve ~80% of the Fortune 500. And we
              are on the 2020 list of FORTUNE World’s Admired Companies®. This
              is the future of work.
            </li>
            <li>
              Working on building an application for Vulnerability Response for
              enterprises and integration with third-party scanners like Qualys,
              Rapid7.
            </li>
            <li>CI / CD pipeline</li>
            <li>
              Designing database schema and partitioning strategy for huge data
            </li>
            <li>JUnit, Test coverage</li>
          </ul>
        </div>
        <div class="ele ele2">
          <p className="companyName">MAQ Software</p>
          <p className="duration">July 2020 - Oct 2021</p>
          <p className="designation">Software Engineer 1</p>
          <ul className="skills-list">
            <li>
              Worked on a tool named BING – Export to PPT, this tool is usedto
              convert Power BI visuals/reports to PowerPoint Presentation.
            </li>
            <li>
              Worked on building the application using React JS for frontend, C#
              .NET framework for authentication, handing requests and rendering
              views, Node JS for converting visuals to images, C# .NET Core to
              create Slides from visual images.
            </li>
            <li>
              Implemented Rich Text Editor in React JS and created functionality
              in C# .NET Core to convert the text inserted in the editor into
              Open XML format to create PPT Slides.
            </li>
            <li>
              Worked on Azure Table storage to store user data and MySQL to
              store the history of downloads and scheduled PPT’s.
            </li>
            <li>
              Worked with Docker and Azure Kubernetes for automating deployment,
              scaling, and management of the application.
            </li>
            <li>
              Also worked on AJAX, React Redux, .NET Framework, Azure Service
              Buses and SSMS.
            </li>
          </ul>
        </div>
        <div class="ele ele3">
          <p className="companyName">Darwinbox</p>
          <p className="duration">Jan 2020 - Jun 2020</p>
          <p className="designation">Software Developer Intern</p>
          <ul className="skills-list">
            <li>Work with developers to design algorithms and flowcharts.</li>
            <li>Troubleshoot, debug and upgrade existing software.</li>
            <li>
              Created an application that is used to insert E-signature in PDF.
            </li>
            <li>
              Created a Resource Management Tool that enables you to allocate,
              release and then track who's working on what resource, when, and
              for how long.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
