import React, { useState } from "react";
import axios from "axios";

const AdmissionForm = () => {
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    bloodGroup: "",
    contact: "",
    alternateContact: "",
    address: "",
    pincode: "",
    hobby: "",
    dob: "",
    schoolName: "",
    guardianName: "",
    standard: "",
    photo: "",
    // errors: {},
  });
  const [error, seterror] = useState({});
  const [msg, setmsg] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setUserdata({ ...userData, photo: e.target.files[0] });
    } else {
      setUserdata({ ...userData, [e.target.name]: e.target.value });
    }
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newerror = {};

    if (userData.name === "") {
      newerror.name = "Enter name";
    } else if (userData.name.length <= 2 || userData.name.length >= 15) {
      newerror.name = "Enter more than 2 alphabet";
    }
    if (userData.email === "") {
      newerror.email = "Kindly enter email";
    }
    if (userData.name === "") {
      newerror.guardianName = "Enter Guardian name";
    } else if (
      userData.guardianName.length <= 2 ||
      userData.guardianName.length >= 15
    ) {
      newerror.guardianName = "Enter between 2 to 15 alphabet";
    }
    if (userData.standard === "") {
      newerror.standard = "Kindly enter standard";
    } else if (isNaN(userData.standard)) {
      newerror.standard = "Plz enter only digits";
    } else if (userData.standard.length > 2) {
      newerror.standard = "plz enter in given range";
    }
    if (userData.bloodGroup === "") {
      newerror.bloodGroup = "Kindly enter bloodGroup";
    }
    if (userData.contact == "") {
      newerror.contact = "Plz enter mobile";
    } else if (isNaN(userData.contact)) {
      newerror.contact = "Plz enter digits";
    } else if (userData.contact.length < 10 || userData.contact.length > 10) {
      newerror.contact = "plz enter 10 dgits";
    }
    if (userData.alternateContact === "") {
      newerror.alternateContact = "Plz enter mobile";
    } else if (isNaN(userData.alternateContact)) {
      newerror.contact = "Plz enter digits";
    } else if (
      userData.alternateContact.length < 10 ||
      userData.alternateContact.length > 10
    ) {
      newerror.alternateContact = "plz enter 10 dgits";
    }
    if (userData.address === "") {
      newerror.address = "Enter address";
    }
    if (userData.pincode === "") {
      newerror.pincode = "Plz enter mobile";
    } else if (isNaN(userData.pincode)) {
      newerror.contact = "Plz enter digits";
    } else if (userData.pincode.length < 6 || userData.pincode.length > 6) {
      newerror.pincode = "plz enter 10 dgits";
    }
    if (userData.hobby === "") {
      newerror.hobby = "Enter hobby";
    }
    if (userData.schoolName === "") {
      newerror.schoolName = "Enter school name";
    }
    setmsg(true);
    seterror(newerror);

    try {
      const formData = new FormData();
      formData.append(
        "userData",
        JSON.stringify({
          name: userData.name,
          email: userData.email,
          bloodGroup: userData.bloodGroup,
          contact: userData.contact,
          alternateContact: userData.alternateContact,
          address: userData.address,
          pincode: userData.pincode,
          hobby: userData.hobby,
          dob: userData.dob,
          schoolName: userData.schoolName,
          guardianName: userData.guardianName,
          standard: userData.standard,
        })
      ); // User data
      formData.append("photo", userData.photo);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set appropriate content type
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container md:px-0 px-1 md:mx-auto my-8 ">
      <h2 className="text-[2rem] font-bold mb-4 sm:text-left text-center">
        Admission Form
      </h2>
      <h3>{msg ? `${userData.name} are registred successfully` : ""}</h3>
      {/* <form action=""></form> */}
      <form action="post" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className={` w-full border ${error.name ? "border-red-500" : ""}`}
            />
            <span style={{ color: "red" }}>{error.name}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.email ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.email}</span>
          </div>

          <div className="mb-4">
            <label htmlFor="guardianName" className="block font-medium mb-1">
              Guardian Name
            </label>
            <input
              type="text"
              id="guardianName"
              name="guardianName"
              value={userData.guardianName}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.guardianName ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.guardianName}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="standard" className="block font-medium mb-1">
              Standard
            </label>
            <input
              type="number"
              id="standard"
              name="standard"
              min="1"
              max="12"
              value={userData.standard}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.standard ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.standard}</span>
          </div>

          <div className="mb-4">
            <label htmlFor="bloodGroup" className="block font-medium mb-1">
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={userData.bloodGroup}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.bloodGroup ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.bloodGroup}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block font-medium mb-1">
              Contact Number
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={userData.contact}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.contact ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.contact}</span>
          </div>
          <div className="mb-4">
            <label
              htmlFor="alternateContact"
              className="block font-medium mb-1"
            >
              Alternate Contact Number
            </label>
            <input
              type="number"
              id="alternateContact"
              name="alternateContact"
              value={userData.alternateContact}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.alternateContact ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.alternateContact}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.address ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.address}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="pincode" className="block font-medium mb-1">
              Pincode
            </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={userData.pincode}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.pincode ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.pincode}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="hobby" className="block font-medium mb-1">
              Hobby
            </label>
            <input
              type="text"
              id="hobby"
              name="hobby"
              value={userData.hobby}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.hobby ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.hobby}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="dob" className="block font-medium mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.dob ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.dob}</span>
          </div>

          <div className="mb-4">
            <label htmlFor="schoolName" className="block font-medium mb-1">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={userData.schoolName}
              onChange={handleChange}
              className={`form-input w-full border ${
                error.schoolName ? "border-red-500" : ""
              }`}
            />
            <span style={{ color: "red" }}>{error.schoolName}</span>
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block font-medium mb-1">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              // accept="image/*"
              onChange={handleChange}
              className="form-input w-full border"
            />
          </div>
          <div className="mt-4 text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
