const Qualification = () => {
  return (
    <section className="py-16 p-6">
      <h3 className="text-4xl  font-bold mb-8">A summary of My Resume</h3>
      <div className="resume-container md:flex gap-8">
        <div className="education-container">
          <h3 className="text-2xl font-bold">My Education</h3>
          <div className="resume-item my-7">
            <h4 className="title text-2xl">Web Development Programme </h4>
            <h5 className="sub-titile text-xl"> Programming Hero / 2021 - 2023</h5>
            <p className="text-lg">
            User Interface (UI) Development: Creating visually appealing and responsive user interfaces using HTML, CSS, and JavaScript frameworks like React, Angular, or Vue.js.
            Cross-Browser Compatibility: Ensuring websites work consistently across different browsers and devices.
            Optimization for Performance: Optimizing front-end performance for faster loading times and better user experience.
            Collaboration with Designers: Working closely with UI/UX designers to implement their designs into functional web interfaces.
            Accessibility Compliance: Ensuring websites adhere to accessibility standards to accommodate users with disabilities.
            </p>
          </div>
          <hr />
          <div className="resume-item my-7">
            <h4 className="title text-2xl">Diploma in Electrical Engineering</h4>
            <h5 className="sub-titile text-xl">
              Dinajpur Polytecnic Institute / 2013 - 2017
            </h5>
            <p>
            
            </p>
          </div>
          <hr />
        </div>
        <div className="experience-container">
          <h3 className="text-2xl font-bold">My Experience</h3>
          <div className="resume-item my-7">
            <h4 className="title text-2xl">Web Developer</h4>
            <h5 className="sub-titile text-xl">Programming Hero 2021 - Current</h5>
            <p className="text-lg">
              User Interface (UI) Development: Creating visually appealing and
              responsive user interfaces using HTML, CSS, and JavaScript
              frameworks like React, Angular, or Vue.js. Cross-Browser
              Compatibility: Ensuring websites work consistently across
              different browsers and devices. Optimization for Performance:
              Optimizing front-end performance for faster loading times and
              better user experience. Collaboration with Designers: Working
              closely with UI/UX designers to implement their designs into
              functional web interfaces. Accessibility Compliance: Ensuring
              websites adhere to accessibility standards to accommodate users
              with disabilities.
            </p>
          </div>
          <hr />
          <div className="resume-item my-7">
            <h4 className="title text-2xl">Web Developer</h4>
            <h5 className="sub-titile text-xl">Self-Learning/ 2021 - 2023</h5>
            <p className="text-lg">
              User Interface (UI) Development: Creating visually appealing and
              responsive user interfaces using HTML, CSS, and JavaScript
              frameworks like React, Angular, or Vue.js. Cross-Browser
              Compatibility: Ensuring websites work consistently across
              different browsers and devices. Optimization for Performance:
              Optimizing front-end performance for faster loading times and
              better user experience. Collaboration with Designers: Working
              closely with UI/UX designers to implement their designs into
              functional web interfaces. Accessibility Compliance: Ensuring
              websites adhere to accessibility standards to accommodate users
              with disabilities.
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="download-btn text-center my-7">
        <button className="btn btn-primary ">
          <i className="fa-solid fa-download"></i> Download CV
        </button>
      </div>
    </section>
  );
};

export default Qualification;
