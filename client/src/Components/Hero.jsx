import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function Hero() {
  const imgData = [
    "./images/WhatsApp Image 2024-03-09 at 23.07.52_bd555d59.jpg",
    "./images/wi3.jpg",
    "./images/wi4.jpg",
    "./images/wi5.jpg",
    "./images/wi6.jpg",
  ];
  const [slider, setslider] = useState(0);
  const handleLeft = () => {
    setslider(slider === 0 ? imgData.length - 1 : slider - 1);
  };
  const handleRight = () => {
    setslider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const slideClear = setInterval(() => {
      handleRight();
    }, 2000);
    return () => clearInterval(slideClear);
  }, [slider]);

  return (
    <>
      <div className="">
        <div className="container mx-auto relative">
          {imgData.map((item, i) => (
            <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
              <img
                src={item}
                alt=""
                className="md:w-full md:h-[60vh] md:rounded-xl"
              />
            </div>
          ))}
          <div className="w-full bg-black md:h-[60vh] mx-auto opacity-50 md:rounded-xl absolute top-0"></div>
          <div className="flex absolute md:top-[50%] top-[30%] justify-between w-full text-white">
            <FaAngleLeft
              size={30}
              className="cursor-pointer"
              onClick={handleLeft}
            />
            <FaAngleRight
              size={30}
              className="cursor-pointer"
              onClick={handleRight}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-screen">
        {/* Services section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Our Theme</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Development of Science-backed Rationale
                </h3>
                <p className="text-gray-700">
                  We focus on developing a strong scientific understanding in
                  students through evidence-based learning and practical
                  applications.
                </p>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Perseverant Competitive Attitude
                </h3>
                <p className="text-gray-700">
                  We instill a competitive spirit in students, encouraging them
                  to persevere and excel in the face of challenges and setbacks.
                </p>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Student-Friendly Environment
                </h3>
                <p className="text-gray-700">
                  We create a welcoming and supportive environment where
                  students feel comfortable to learn and grow.
                </p>
              </div>

              {/* Service 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Practical Scientific Approach
                </h3>
                <p className="text-gray-700">
                  Our teaching methods focus on practical applications to
                  enhance students' scientific thinking and aptitude.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
