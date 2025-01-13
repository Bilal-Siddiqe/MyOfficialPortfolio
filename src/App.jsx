import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import './assets/appStyle.css'; // Import your custom CSS
import 'font-awesome/css/font-awesome.min.css'; // If you're using Font Awesome icons
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./assets/appStyle.css"
import profileImage from './assets/img/profile.jpg';

function App() {
  useEffect(() => {
    if (window.bootstrap) {
      const sideNav = document.body.querySelector('#sideNav');
      if (sideNav) {
        new window.bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          rootMargin: '0px 0px -40%',
        });
      }

      const navbarToggler = document.body.querySelector('.navbar-toggler');
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
      );
      responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
          }
        });
      });
    } else {
      console.error('Bootstrap is not loaded correctly.');
    }
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
              <span className="text-primary">Siddique</span>
            </h1>
            <div className="subheading mb-5">
              Karachi, Pakistan, (+923102097912)
              <a href="mailto:dev.bilalsiddique@gmail.com"> dev.bilalsiddique@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
            </p>
            <div className="social-icons">
              <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
              <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
              <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
              <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
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
                <h3 className="mb-0">Senior Web Developer</h3>
                <div className="subheading mb-3">Intelitec Solutions</div>
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Developer</h3>
                <div className="subheading mb-3">Tech Innovations</div>
                <p>Collaborate with cross-functional teams to define and deliver project requirements. Focused on delivering end-to-end solutions to meet client needs, ensuring seamless integration with existing systems.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">May 2010 - February 2013</span></div>
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
                <h3 className="mb-0">University of Colorado Boulder</h3>
                <div className="subheading mb-3">Bachelor of Science</div>
                <div>Computer Science - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">XYZ University</h3>
                <div className="subheading mb-3">Diploma in Software Engineering</div>
                <p>Completed a comprehensive program focusing on software engineering methodologies, programming languages, and database management systems.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2004 - May 2006</span></div>
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
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Cross-Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests Section */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time being outdoors, hiking, and exploring new places. I am also a big fan of sci-fi movies and video games.</p>
            <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genres, I love reading, and I am always eager to learn new technologies.</p>
          </div>
        </section>
        <hr className="m-0" />

        {/* Awards & Certifications Section */}
        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Awards & Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Google Analytics Certified Developer
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                AWS Certified Solutions Architect
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                Full-Stack Web Development Certification from FreeCodeCamp
              </li>
              <li>
                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                ReactJS Advanced Developer Certification from Codecademy
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
