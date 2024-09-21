import React, { useState } from "react";

function Form() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({});
  const [update, setUpdate] = useState(false);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newError = {};
    if (user.username == "") {
      newError.username = "Plz enter username";
    } else if (user.username.length <= 2 || user.username.length >= 15) {
      newError.username = "Username must be in given range";
    }
    if (user.email == "") {
      newError.email = "Plz enter email";
    }
    if (user.mobile == "") {
      newError.mobile = "Plz enter mobile";
    } else if (isNaN(user.mobile)) {
      newError.mobile = "Plz enter digits";
    } else if (user.mobile.length < 10 || user.mobile.length>10) {
      newError.mobile = "plz enter 10 dgits";
    }
    if (user.password == "") {
      newError.password = "Plz enter password";
    } else if (user.password.length <= 5 || user.password.length >= 15) {
      newError.password = "Plz enter in the range 5 to 15";
    }
    if (user.confirmPass == "") {
      newError.confirmPass = "Plz enter confirmPass";
    } else if (user.confirmPass != user.password) {
      newError.confirmPass = "password is not matching";
    } else{
      setUpdate(true);
    }
    setError(newError);
  };

  return (
    <>
      <h1>
        {update ? <p>{user.username}you are sucessfully registred</p> : ""}
      </h1>
      <div className="container mx-auto ">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="username"
              className="border"
              onChange={handleChange}
              value={user.username}
              name="username"
              autoComplete="off"
            />
            <span style={{ color: "red" }}>{error.username}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="email"
              className="border"
              onChange={handleChange}
              value={user.email}
              name="email"
              autoComplete="off"
            />
            <span style={{ color: "red" }}>{error.email}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="mobile number"
              className="border"
              onChange={handleChange}
              value={user.mobile}
              name="mobile"
              autoComplete="off"
            />
            <span style={{ color: "red" }}>{error.mobile}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="password"
              className="border"
              onChange={handleChange}
              value={user.password}
              name="password"
              autoComplete="off"
            />
            <span style={{ color: "red" }}>{error.password}</span>
          </div>
          <div>
            <input
              type="text"
              placeholder="confirm password"
              className="border"
              onChange={handleChange}
              value={user.confirmPass}
              name="confirmPass"
              autoComplete="off"
            />
            <span style={{ color: "red" }}>{error.confirmPass}</span>
          </div>
          <button type="submit">SignIn</button>
        </form>
      </div>
    </>
  );
}

export default Form;
