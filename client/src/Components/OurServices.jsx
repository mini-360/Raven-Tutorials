import React from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Full Week Classes",
    description:
      "Classes conducted throughout the week with extra doubt session class on Sundays and Holidays (subjected to future references).",
  },
  {
    title: "Full Week Classes",
    description:
      "Classes conducted throughout the week with extra doubt session class on Sundays and Holidays (subjected to future references).",
  },
  {
    title: "Informative Workshops",
    description:
      "Workshops aimed at inculcating future career prospects in various other fields.",
  },
  {
    title: "Individual-based Mentorship Programmes",
    description:
      "Programmes designed for students facing hurdles in their academic performance.",
  },
  {
    title: "Science Practical Classes",
    description: "Hands-on practical classes for science subjects.",
  },
  {
    title: "Month-end Tests",
    description:
      "Tests conducted at the end of each month to check academic progress in each subject.",
  },
  {
    title: "Board Pattern Tests",
    description:
      "Tests conducted every 3 months for Std. XII and Std. X based on respective board patterns.",
  },
  {
    title: "Special Revision Batches",
    description:
      "Special batches for Std. XII and Std. X based on respective board patterns.",
  },
  {
    title: "Crash Course",
    description:
      "Crash courses strictly following board patterns for Std. XII and Std. X.",
  },
];

const OurServices = () => {
  return (
    <>
     <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="bg-gray-100">
        <div className="container mx-auto py-8 ">
          <h2 className="text-3xl font-bold text-center mb-8">
            Class, Batch and Subject Details
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border-2  shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Class</th>
                  <th className="px-4 py-2 border">Annual Batch Subject</th>
                  <th className="px-4 py-2 border">
                    Crash-course Batch Subject
                  </th>
                  <th className="px-4 py-2 border">Options</th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="px-4 py-2 border">Std. XII</td>
                  <td className="px-4 py-2 border">
                    Physics, Chemistry, Biology
                  </td>
                  <td className="px-4 py-2 border">
                    Physics, Chemistry, Biology
                  </td>
                  <td className="px-4 py-2 border">
                    Subject-wise & Unit-wise Option available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Std. XI</td>
                  <td className="px-4 py-2 border">
                    Physics, Chemistry, Biology
                  </td>
                  <td className="px-4 py-2 border">
                    Subjected to future references
                  </td>
                  <td className="px-4 py-2 border">
                    Subject-wise & Unit-wise Option available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Std. X</td>
                  <td className="px-4 py-2 border">
                    Mathematics, Science, Social Science, English, IT (Optional)
                  </td>
                  <td className="px-4 py-2 border">
                    Mathematics, Science, English
                  </td>
                  <td className="px-4 py-2 border">
                    Subject-wise & Unit-wise Option available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Fee-Structures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Full Week Classes</h3>
              <p className="text-gray-700">
                Classes conducted throughout the week with extra doubt session
                class on Sundays and Holidays (subjected to future references).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Admission Details for Std. XII and Std. XI
              </h3>
              <ul className="text-gray-700 list-disc">
                <li>
                  Registration form charges: ₹50 (Subjected to future
                  references)
                </li>
                <li>
                  Course fee (per student/year):
                  <ul>
                    <li>One time payment: ₹18,000</li>
                    <li>Two time payment: ₹10,000</li>
                  </ul>
                </li>
                <li>
                  English Fees:
                  <ul>
                    <li>CBSE: ₹2500 (One time payment only)</li>
                    <li>BSEB: ₹2000 (One time payment only)</li>
                  </ul>
                </li>
                <li>
                  Crash Course charges:
                  <ul>
                    <li>Per subject: ₹10000</li>
                    <li>Per Unit: ₹3000</li>
                    <li>Per Chapter: ₹800</li>
                  </ul>
                </li>
                <li>
                  Presence of guardians is MANDATORY at the time of admission.
                </li>
                <li>WhatsApp mediated attendance.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Admission Details for Std. X and Std. IX
              </h3>
              <ul className="text-gray-700 list-disc">
                <li>Registration form charges: ₹50</li>
                <li>
                  Course fee for Std. X:
                  <ul>
                    <li>One time payment: ₹11,000</li>
                    <li>Monthly: ₹1,200</li>
                  </ul>
                </li>
                <li>
                  Course fee for Std. IX:
                  <ul>
                    <li>One time payment: ₹10,000</li>
                    <li>Monthly: ₹1,100</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
