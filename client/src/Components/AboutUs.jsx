import React from "react";

const TeamMember = ({ img, name, role, description }) => {
  return (
    <>
      <div className="bg-white mb-8 text-center py-2 px-1 rounded-lg shadow-md">
        <img src={`${img}`} alt="" className="w-[50%] mx-auto rounded-[50%]" />
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm font-light mb-1">{role}</p>
        <p className="text-sm">{description}</p>
      </div>
    </>
  );
};

const AboutUs = () => {
  const teamMembers = [
    {
      img: "./images/dummy.png",
      name: "S. Nandan Verma",
      role: "Faculty & Operations Head @ RAVEN Tutorials",
      description: `Being a student of Life Sciences, I cherish life and its forms. Want to develop an inquisitive aptitude in students regarding their education and career.`,
    },
    {
      img: "./images/dummy.png",
      name: "Rakesh Ranjan",
      role: "CEO @ RAVEN Tutorials",
      description: `Pursuing MBBS at NMCH, Patna. Ardent reader. Teaching students for previous 3-4 years as freelancer. Exploring academia for delectational pedagogy with student community in focus. Want to develop a platform for students having dreams of exploration other than trendy profession.`,
    },
    {
      img: "./images/dummy.png",
      name: "Abhinay Gupta",
      role: "Chief Project Officer @ RAVEN Tutorials",
      description: `Expertise in Commerce, Digital Marketing, Social media Coordinator. B.com Graduate Having a strong foundation in business principle, finance, taxation, accounting, Auditing, Business Management. My degree reflects my passion to do business in effective and efficient manner.`,
    },
    {
      img: "./images/dummy.png",
      name: "Niraj Kumar",
      role: "Faculty & CPRO @RAVEN Tutorials",
      description: `Pursuing Integrated B.Ed(B.A-B.Ed) from BRABU. CTET Qualified. Expertise in teaching.`,
    },
    {
      img: "./images/dummy.png",
      name: "Guddu Kumar",
      role: "Faculty @ RAVEN Tutorials",
      description: `B. Sc. Graduate in Mathematics. I have a passion for teaching and interacting with students coming from different backgrounds. An experience of 4 years as a full-time teacher has enabled me to unlock my problem-solving aptitude for my students.`,
    },
  ];

  const devMembers = [
    {
      img: "./images/my_pic.jfif",
      name: "ANIKET SINGH",
      role: "CTO @ RAVEN Tutorials",
      description: `MERN Developer | Expertise in REACTJS | ITER College student. A skilled Full stack web-developer with 3 years of learning in development and good practice on ReactJs Projects`,
    },
    {
      img: "./images/developer.jpg",
      name: "ABHAY RAJ",
      role: "Backend Developer @ RAVEN Tutorials",
      description: `Backend Developer | Expertise in MONGODB | ITER College student. As a seasoned backend developer with three years of hands-on experience specializing in NodeJS.`,
    },
  ];

  return (
    <>
   

      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hello there! We welcome you to RAVEN Tutorials. Currently, it is a
              home-based institution dedicated to providing an affordable and
              comprehensive learning experience to students. We encourage and
              boost each student on an individual level to fulfill their
              potential, both academically and morally, in order to maximize
              their opportunities for their future lives.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We provide clear concepts of the subjects being taught at our
              premises. Being a science-themed institute, we provide specific
              emphasis on Science and Mathematics through detailed theory as
              well as practical and lab work sessions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our team members are the ones who believe in brushing up their
              skills and knowledge by constantly learning new experiences in
              their work arena. Our team members firmly assert that a good
              teacher must be a good learner as well.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-t-8 border-gray-400">
        <div className="container mx-auto py-12">
          <h2 className="text-3xl font-semibold mb-6 sm:text-left text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                img={member.img}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto pb-12">
          <h2 className="text-3xl font-semibold mb-6 sm:text-left text-center">
            Developer Team
          </h2>
          <img src="/assets/images/developer.jpg" alt="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {devMembers.map((member, index) => (
              <TeamMember
                key={index}
                img={member.img}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
