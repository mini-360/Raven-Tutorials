import { Student } from "../models/student.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerStudent = async (req, res) => {
  // const response = req.body;

  // let studentData;
  // try {
  //   studentData =
  //     typeof response.studentData === "string"
  //       ? JSON.parse(response.studentData)
  //       : response.studentData;
  //   if (!studentData) {
  //     throw new ApiError(400, "Student data is missing from the request");
  //   }
  // } catch (error) {
  //   throw new ApiError(400, "Invalid Data");
  // }

  const {
    name,
    email,
    dob,
    schoolname,
    standard,
    contact,
    alternatecontact,
    guardianname,
    bloodgroup,
    address,
    pincode,
    hobby,
  } = req.body;
  if (
    [
      name,
      email,
      dob,
      schoolname,
      standard,
      contact,
      alternatecontact,
      guardianname,
      bloodgroup,
      address,
      pincode,
      hobby,
    ].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedStudent = await Student.findOne({ email });

  if (existedStudent) {
    throw new ApiError(409, "Student with email already exists");
  }

  const photo = req.files.profileimage[0];
  const photoLocalPath = photo.path;

  if (!photoLocalPath) {
    throw new ApiError(400, "Profile photo local path not found");
  }

  const profilephoto = await uploadOnCloudinary(photoLocalPath);
  if (!profilephoto) {
    throw new ApiError(400, "Profile photo is required");
  }

  const profileimage = profilephoto.url;

  const student = await Student.create({
    name,
    email,
    dob,
    schoolname,
    standard,
    contact,
    alternatecontact,
    guardianname,
    bloodgroup,
    address,
    pincode,
    hobby,
    profileimage,
  });

  const createdStudent = await Student.findById(student._id);
  if (!createdStudent) {
    throw new ApiError(500, "Something went wrong while registering");
  }
  return res.status(201).json(new ApiResponse(200, createdStudent, "student"));
};

export { registerStudent };
