import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js as well.
import './assets/appStyle.css'; // Import your custom CSS
import 'font-awesome/css/font-awesome.min.css'; // If you're using Font Awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./assets/appStyle.css"
import profileImage from './assets/img/profile.jpg';

function App() {

  useEffect(() => {
    // Initialize ScrollSpy using Bootstrap 5
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: '#navbar', // Replace with the actual ID of your navbar or scroll target
    });

    return () => {
      // Cleanup ScrollSpy when the component unmounts
      if (scrollSpy) {
        scrollSpy.dispose();
      }
    };
  }, []);


  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Bilal Siddique</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileImage} // Use the imported image here
              alt="Bilal Siddique" // Add alt text for accessibility
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="container-fluid p-0">

        {/* About Section */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Bilal
              <span className="text-primary"> Siddique</span>
            </h1>
            <div className="subheading mb-5">
              Karachi, Pakistan, (+92) 3102097912
              <a href="mailto:dev.bilalsiddique@gmail.com"> dev.bilalsiddique@gmail.com</a>
            </div>
            <p className="lead mb-5">
              Experienced MERN Stack Developer with 4 years of expertise in React for front-end and Node.js for back-end development. Proven track record in developing dynamic web applications, optimizing performance, and leading teams.
            </p>
            {/* Social Media Section */}
            <div className="social-icons">
              <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/dev-bilalsiddique/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" target="_blank" href="https://github.com/">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" target="_blank" href="https://twitter.com/">
                <i className="fab fa-x"></i>
              </a>
              <a className="social-icon" target="_blank" href="https://www.facebook.com/BilalSIddiqueOcial">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-icon" target="_blank" href="https://wa.me/923102097912" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

          </div>
        </section>

        <hr className="m-0" />

        {/* Experience Section */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Managing Director</h3>
                <div className="subheading mb-3">YouthTech Institute</div>
                <p>As the Managing Director of YouthTech Institute, a non-profit IT organization in Karachi, I oversee all aspects of the institute’s operations. My role includes leading strategic planning, admissions fulfillment through digital marketing, course direction, team management, student services, and fostering collaborations with other IT institutes.</p>
                <ul>
                  <li>Directed operations across IT departments for smooth functioning.</li>
                  <li>Executed digital marketing strategies to boost admissions.</li>
                  <li>Led curriculum development aligned with industry needs.</li>
                  <li>Implemented growth strategies for the institute.</li>
                  <li>Managed financial planning and resource allocation.</li>
                  <li>Oversaw hiring to build a strong team.</li>
                  <li>Conducted market research to align courses with job market demands.</li>
                  <li>Formed partnerships to enhance student job placements.</li>
                  <li>Fostered a culture of innovation and continuous learning.</li>
                  <li>Organized meetups and collaborated with IT institutes.</li>
                  <li>Led growth and brand-building initiatives through strategic marketing.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jan 2024 - Current</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">MERN Stack Developer</h3>
                <div className="subheading mb-3">Hypermode (New York, USA) (Remote)</div>
                <p>Deployed and maintained NFT websites, collaborating with backend developers to ensure smooth functionality.</p>
                <ul>
                  <li>Transformed static HTML/CSS websites into dynamic React applications, improving user experience and maintainability.</li>
                  <li>Led a front-end development team, fostering best practices and ensuring timely project delivery.</li>
                  <li>Engineered reusable React components and optimized state management using Redux and Context API.</li>
                  <li>Spearheaded architectural strategies to enhance application scalability, performance, and longevity.</li>
                  <li>Partnered with backend teams to ensure seamless API integration and data flow.</li>
                  <li>Architected and implemented core React components.</li>
                  <li>Developed and supported Node.js APIs in collaboration with backend developers.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jul 2023 - Dec 2023</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">MERN Stack Developer</h3>
                <div className="subheading mb-3">Smart Pearl Solutions</div>
                <p>Developed React-based websites at Smart Pearl Solution, communicating with clients to understand their needs and provide solutions. Led the front-end team to develop and maintain client websites, ensuring smooth functionality and client satisfaction.</p>
                <ul>
                  <li>Enforced React development best practices.</li>
                  <li>Worked on React hooks, Redux, Context API, and component libraries.</li>
                  <li>Led the migration of legacy systems to React, boosting performance by 30%.</li>
                  <li>Written scalable and reusable React components.</li>
                  <li>Gathered requirements from clients.</li>
                  <li>Implemented new features to improve the product.</li>
                  <li>Ensured adherence to best coding practices.</li>
                  <li>Contributed to React Native mobile application development.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Apr 2022 - Sep 2023</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">MERN Stack Instructor (Part-Time)</h3>
                <div className="subheading mb-3">BMJ Digital Institute | Suffah Computer Education</div>
                <p>Provided part-time instruction in MERN stack development, teaching a range of front-end and back-end technologies, along with deployment and version control.</p>
                <ul>
                  <li>Taught HTML, CSS, Bootstrap, JavaScript, and ReactJS for front-end development.</li>
                  <li>Instructed students on API integration, Node.js, Express.js, and MongoDB Atlas for back-end development.</li>
                  <li>Guided students in deploying applications using platforms like Netlify, Heroku, Firebase, and Vercel.</li>
                  <li>Educated students on version control using Git and GitHub, emphasizing best practices.</li>
                  <li>Mentored students to build full-stack projects, reinforcing practical development skills.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jun 2022 - Dec 2023</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Assistant Manager</h3>
                <div className="subheading mb-3">Bolan Casting Limited (Hub)</div>
                <ul>
                  <li>Team Coordination and Supervision.</li>
                  <li>Performance Monitoring and Reporting.</li>
                  <li>Communication and Stakeholder Engagement.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jan 2022 - Mar 2022</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Mathematics Lecturer</h3>
                <div className="subheading mb-3">Practical Collegiate</div>
                <ul>
                  <li>Arithmetic, Algebra & Calculus.</li>
                  <li>Propositional Logic & Boolean.</li>
                  <li>Probability & Statistics.</li>
                  <li>Vectors & Matrices.</li>
                  <li>Discrete & Graph Theory.</li>
                  <li>Recursion.</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2016 - 2020</span></div>
            </div>

          </div>
        </section>
        <hr className="m-0" />

        {/* Education Section */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Bachelor's of Information Technology</h3>
                <div className="subheading mb-3">Benazir Bhutto Shaheed University Lyari, Karachi</div>
                <p>Website: <a href="https://www.bbsul.edu.pk/" target="_blank" rel="noopener noreferrer">www.bbsul.edu.pk</a></p>
                <span>Level in EQF: EQF Level 6</span>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">2018 - 2021</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Full Stack Developer</h3>
                <div className="subheading mb-3">Institute of Emerging Careers | IEC</div>
                <p>Website: <a href="https://iec.org.pk/" target="_blank" rel="noopener noreferrer">www.iec.org.pk</a></p>
                <span>Level in EQF: EQF Level 6</span>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jan 2020 - Dec 2020</span></div>
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Finance & Accounts</h3>
                <div className="subheading mb-3">Institute of CMA Karachi</div>
                <p>Website: <a href="https://www.icmainternational.com/" target="_blank" rel="noopener noreferrer">www.icmainternational.com</a></p>
                <span>Level in EQF: EQF Level 6</span>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">Jan 2016 - Dec 2016</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Skills Section */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item"><i className="fab fa-html5"></i></li>
              <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
              <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
              <li className="list-inline-item"><i className="fab fa-react"></i></li>
              <li className="list-inline-item"><i className="fab fa-node"></i></li>
              <li className="list-inline-item"><i className="fab fa-github"></i></li>
              <li className="list-inline-item"><i className="fab fa-bootstrap"></i></li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li><span className="fa-li"><i className="fas fa-check"></i></span> Mobile-First, Responsive Design</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span> Cross-Browser Testing & Debugging</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span> Agile Development & Scrum</li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests Section */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>Beyond my passion for web development, I thrive on exploring the latest trends in technology. I'm deeply interested in the evolving field of artificial intelligence and machine learning, and how they intersect with full-stack development.</p>
            <p>In my free time, I enjoy hiking and discovering new landscapes, which helps me refresh and find creative inspiration. I'm also a fan of sci-fi literature and video games, often seeking new stories and innovative designs that influence my work.</p>
            <p>As an avid learner, I continuously stay updated with the latest in digital marketing, development tools, and methodologies to enhance my skills. I’m also passionate about mentoring budding developers and sharing knowledge to help others grow in the tech community.</p>
          </div>
        </section>
        <hr className="m-0" />

        {/* Awards & Certifications Section */}
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Courses and Credentials</h2>
            <div className="subheading mb-3">Udemy & Coursera | Online</div>
            <ul className="fa-ul mb-0">
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> Full-Stack Web Development Boot Camp - Udemy</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> Version Control (GitHub) - Udemy</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> ReactJS - Udemy</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> JavaScript: Beginner to Advanced - Udemy</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> Front-End Development - Udemy</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> HTML & CSS in Depth - Coursera</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> MongoDB Certified Developer – Nobel Work Foundation - Coursera</li>
            </ul>
            <div className="subheading mb-3">Other Certifications</div>
            <ul className="fa-ul mb-0">
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> SQL Database – Nobel Work Foundation</li>
              <li><span className="fa-li"><i className="fas fa-trophy text-warning"></i></span> UX Design – Google</li>
            </ul>
          </div>
        </section>


      </div>
    </div>

  );
}

export default App;
