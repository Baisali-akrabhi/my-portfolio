const About = () => {
  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/about.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Baisali
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Pradhan
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Sr. Fullstack Startup Engineer With specialisation in ReactJS</span>
                    {/* <span>https://twitter.com/Baisali_</span> */}
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Javascript Enthusiast</span>
                    {/* <span>https://www.linkedin.com/in/baisali-pradhan/</span> */}
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Works on NodeJS, SQL, AWS, React Native, CSS, HTML, Frontend Performance, CI-CD Pipelines </span>
                    {/* <span>https://medium.com/@baisali-pradhan</span> */}
                  </span>
                </span>
              </li>
              <li>
            
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Loves to Write my learnings on Medium</span>
                    {/* <span>baishalypradhan03@gmail.com</span> */}
                  </span>
                </span>
              </li>
              {/* <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Github :</span>
                    <span>https://github.com/Baisali-akrabhi</span>
                  </span>
                </span>
              </li> */}
             
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          <div>
            
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-jquery-plain" />
              </span>
              <h4>BootStrap</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-javascript-plain" />
              </span>
              <h4>JavaScript</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-react-original" />
              </span>
              <h4>ReactJS / Native</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-materialui-plain" />
              </span>
              <h4>Material-Design</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-mysql-plain" />
              </span>
              <h4>MySQL</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-jira-plain" />
              </span>
              <h4>JIRA</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-docker-plain" />
              </span>
              <h4>Docker</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-nodejs-plain" />
              </span>
              <h4>Node JS</h4>
            </div>
            {/* SKILL ITEM ENDS */}
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-github-plain" />
              </span>
              <h4>GitHub</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-firebase-plain" />
              </span>
              <h4>Firebase</h4>
            </div>
            {/* SKILL ITEM ENDS */}
             {/* SKILL ITEM STARTS */}
             <div className="animated-layer fade-in-up-animation fadeInRight wow">
              <span>
                <i className="devicon-heroku-plain" />
              </span>
              <h4>Heroku</h4>
            </div>
            {/* SKILL ITEM ENDS */}
          </div>
          <div>
            {/* SKILL ITEM STARTS */}
            <div className="animated-layer fade-in-down-animation fadeInLeft wow">
              <span>
                <i className="devicon-confluence-plain" />
              </span>
              <h4>Confluence</h4>
            </div>
            {/* SKILL ITEM ENDS */}
           
          </div>
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Journey
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            {/* <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Project Manager</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019 - Now</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Adobe Company</span>
                  </p>
                </div>
              </div>
            </li> */}
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
            <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>BCA</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2018</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Berhampur University</span>
                  </p>
                  <p>
                  <i className="fa-solid fa-certificate" />
                    <span>11th rank in University</span>
                  </p>
                </div>
              </div>
             
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Software Developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2020 - 2023</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Akrabhi Softlabs Pvt. Ltd.</span>
                  </p>
                  <p>
                  <i className="fa-solid fa-certificate" />
                    <span>Employee of the Year-2021</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>MCA</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2020</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>SOA University</span>
                  </p>
                  <p>
                  <i className="fa-solid fa-certificate" />
                    <span>University Topper</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Team Leader</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2022 - 2023</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Akrabhi Softlabs Pvt. Ltd.</span>
                  </p>
                 
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
