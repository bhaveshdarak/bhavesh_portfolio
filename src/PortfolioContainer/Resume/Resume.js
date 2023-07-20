import React, {useState} from 'react';
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
      return (
        <div className="resume-heading">
          <div className="resume-main-heading">
            <div className="heading-bullet"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      );
    };
  
  const resumeBullets = [
      { label: "Education", logoSrc: "education.svg" },
      { label: "Work History", logoSrc: "work-history.svg" },
      { label: "Programming Skills", logoSrc: "programming-skills.svg" },
      { label: "Projects", logoSrc: "projects.svg" },
      { label: "Interests", logoSrc: "interests.svg" },
    ];
  
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "NODE JS", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 95 },
    ];
  

  const projectsDetails = [
    //   {
    //     title: "Booking Application",
    //     link: <a href="https://github.com/bhaveshdarak/BDbooking" target="_blank"> <i class="fa-brands fa-square-github"></i></a>,
    //     // duration: { fromDate: "April 2021", toDate: "June 2021" },
    //     subHeading: "Techologies Used: React.js",
    //     description: "Website that bookes the near by best hotel for you"

    // },
      {
        title: "Crypto Rank",
        link: <a href="https://github.com/bhaveshdarak/Cryprorank" target="_blank" rel="noreferrer"> <i class="fa-brands fa-square-github"></i></a>,
        // duration: { fromDate: "April 2021", toDate: "June 2021" },
        subHeading: "Techologies Used: React.js",
        description: "Website that is used to see crypto rank"
    },
    {
        title: "Gym Workout",
        link: <a href="https://github.com/bhaveshdarak/gym" target="_blank" rel="noreferrer"> <i class="fa-brands fa-square-github" ></i></a>,
        // duration: { fromDate: "April 2021", toDate: "June 2021" },
        subHeading: "Techologies Used: React.js,Rapid API",
        description: "Gym Website that gives the idea about exercise"

    },
    {
        title: "E-commerce Website",
        link: <a href="https://github.com/bhaveshdarak/E-commerce-Website" target="_blank" rel="noreferrer"> <i class="fa-brands fa-square-github"></i></a>,
        // duration: { fromDate: "April 2021", toDate: "June 2021" },
        subHeading: "Techologies Used: HTML,CSS",
        description: "Shopping website"

    },
    ];
  
  const resumeDetails = [
      <div className="resume-screen-container" key="education">
         <ResumeHeading
                heading={"R.H.V English Medium School Jalna"}
                subHeading={"Schooling"}
                fromDate={"2008"}
                toDate={"2018"}
            />
            <ResumeHeading
                heading={"VidhyaDham Junior College Aurangabad"}
                subHeading={"Junior School"}
                fromDate={"2018"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"Dr.D.Y. Patil Institute of Engineering, Management and Research, Akurdi, Pune"}
                subHeading={"BE"}
                fromDate={"2020"}
                toDate={"Ongoing"}
            />
      </div>,
  
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
        <ResumeHeading
                heading={"Any where Market"}
                subHeading={"Frontend developer"}
                fromDate={"2023"}
                toDate={"2023"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                •Work as frontend developer to develop the web application for e-patrakkar
                </span>
            </div>

            <div className="experience-description">
                <span className='resume-description-text'>
                •Build the frontend of the website
                  </span>
                <br />
                <span className='resume-description-text'>
                •Stack used: ReactJS and Css
                </span>

            </div>
            <ResumeHeading
                heading={"Sparks Foundation"}
                subHeading={"Frontend developer"}
                fromDate={"2022"}
                toDate={"2022"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                •Build the frontend of the website for Sparks Foundation
                </span>
            </div>

            <div className="experience-description">
                <span className='resume-description-text'>
                •Stack used : ReactJs, JavaScript and Css
                 </span>

            </div>
        </div>
      </div>,
  
      /* PROGRAMMING SKILLS */
      <div className="resume-screen-container programming-skills-container" key="programming-skills">
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

   

      /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            // fromDate={projectsDetails.duration.fromDate}
            // toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
          />
        ))}
      </div>,
  
      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Sports"
          description="Like to cycling, basketball and swimming."
        />
        <ResumeHeading
                heading="Watching Movies"
                // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam illo iure eveniet fu"
            />
            <ResumeHeading
                heading="Learning Something New"
                // description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt numquam illo iure eveniet fu"
            />
      </div>,
    ];

  const handleCarousal = (index) => {
      let offsetHeight = 360;
  
      let newCarousalOffset = {
        style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
      };
  
      setCarousalOffsetStyle(newCarousalOffset);
      setSelectedBulletIndex(index);
    };

  const getBullets = () => {
      return resumeBullets.map((bullet, index) => (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
            alt="B"
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      ));
    };

  const getResumeScreens = () => {
      return (
        <div
          style={carousalOffsetStyle.style}
          className="resume-details-carousal"
        >
          {resumeDetails.map((ResumeDetail) => ResumeDetail)}
        </div>
      );
    };
  
  return (
      <div className="resume-container screen-container fade-in" id={props.id || ""}>
          <div className="resume-content">
              <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
              <div className="resume-card">
                  <div className="resume-bullets">
                      <div className="bullet-container">
                          <div className="bullet-icons"></div>
                              <div className="bullets">{getBullets()}</div>
                      </div>
                  </div>
                  <div className="resume-bullet-details">{getResumeScreens()}</div>
              </div>
          </div>
      </div>
  );
};

export default Resume;

