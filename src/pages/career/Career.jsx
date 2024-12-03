import React from "react";
import careerImage from "../../assets/career.png";
import { FaArrowRightLong } from "react-icons/fa6";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Full Stack Developer",
      text1: "Bengaluru · Full Time ",
      text2: "$10K - $18K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 2,
      title: "Testing Engineer",
      text1: "Remote · Full Time",
      text2: "$08K - $10K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 3,
      title: "HR Manager",
      text1: "Mumbai · Full Time",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 4,
      title: "Product Designer",
      text1: "Mumbai · Full Time",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 5,
      title: "Wordpress Developer",
      text1: "Mumbai · Full Time",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 6,
      title: "Jr. QA Tester",
      text1: "California, USA · Full Time",
      text2: "$14K - $23K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 7,
      title: "Sr. UX Designer",
      text1: "California, USA · Full Time",
      text2: "$14K - $23K · No equity",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 8,
      title: "Social Media Manager",
      text1: "Kolkata, India · Full Time",
      text2: "$5K - $6K · Fresher",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
    {
      id: 9,
      title: "Golang Developer",
      text1: "Mumbai · Full Time",
      text2: "$08K - $10K · 4 to 5 Yrs Exp",
      link: "Apply Now",
      icon: <FaArrowRightLong />,
    },
  ];

  const benefits = [
    {
      id: 1,
      title: "Covid-19 insurance",
      text: "Through True Rich Attended does no end it his mother since real had half does no end it",
      icon: "😷",
    },
    {
      id: 2,
      title: "Flexible working time",
      text: "Through True Rich Attended does no end it his mother since real had half does no end it",
      icon: "⏱️",
    },
    {
      id: 3,
      title: "Work from home",
      text: "Bengaluru · Full Time ",
      icon: "🏡",
    },
    {
      id: 4,
      title: "Annual retreats",
      text: "Through True Rich Attended does no end it his mother since real had half does no end it",
      icon: "🎉",
    },
    {
      id: 5,
      title: "Learning stipend",
      text: "Through True Rich Attended does no end it his mother since real had half does no end it",
      icon: "💰",
    },
    {
      id: 6,
      title: "Gym membership",
      text: "Through True Rich Attended does no end it his mother since real had half does no end it",
      icon: "💪",
    },
  ];

  return (
    <>
      <section className="bg-[#FFFFFF] py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mt-12">
            <p className="text-xs text-gray-600 font-semibold uppercase">
              Join Our Team
            </p>
            <h2 className="text-4xl leading-tight font-bold mt-4 max-w-3xl mx-auto">
              We're looking for people who are passionate and dedicated
            </h2>
            <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
              At our company, we believe in fostering a dynamic and inclusive
              environment where creativity and innovation thrive. Join us and
              make a difference.
            </p>
            <img
              className="mt-12 mx-auto w-full max-w-2xl"
              src={careerImage}
              alt="Career at our company"
            />
            <div className="mt-16 mb-4">
              <p className="text-xl font-medium">Explore our open positions</p>
              <p className="text-2xl">👇</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#ECF8F9] p-10">
            {jobOpenings.map((item) => (
              <div
                className="w-full bg-white p-6 rounded-lg shadow-md"
                key={item.id}
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.text1}</p>
                <p className="text-gray-600 mt-2">{item.text2}</p>
                <div className="flex items-center mt-16">
                  <button className="text-[#5D5FEF] font-medium hover:underline">
                    {item.link}
                  </button>
                  <span className="text-[#5D5FEF] ml-3">{item.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFD] py-20">
        <div className="container mx-auto px-4">
          <div className=" text-gray-600 text-l w-full lg:w-1/2 flex flex-col gap-4 mb-16">
            <p>OUR WORK & CULTURE</p>
            <h2 className="text-3xl font-bold">
              Come and join a team of highly skilled professionals.
            </h2>
            <p>
              Through True Rich Attended does no end it his mother since real
              had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded.{" "}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div
                className="w-full bg-white p-6 rounded-lg shadow-md"
                key={item.id}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#FFE9D7] mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-[333px] text-white mt-16 mb-10">
        <div className="relative container bg-[#666DFF] grid grid-cols-2 gap-[100px] justify-center items-center h-full">
          <img src={foto} alt="stler image" className="absolute top-0 left-0" />
          <img
            src={foto2}
            alt="stler image"
            className="absolute bottom-0 right-0"
          />

          <div className="content  pl-20 flex flex-col gap-3 items-start">
            <p className="font-medium text-sm tracking-wide">NEWSLETTER</p>
            <h2 className="font-semibold leading-[54px] text-[32px] w-[90%]">
              Subscribe our News Letter to get Latest Updates.
            </h2>
          </div>
          <div className="input">
            <input
              className=" text-black outline-none text-[16px] font-medium py-5 pl-8 rounded-md w-[450px]"
              type="text"
              placeholder="Paresh@Pixeto.com"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
