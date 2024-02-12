// import '../assets/css/Signup.css';
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {  useDispatch } from "react-redux";
import { signup } from "../store/features/userAuth/authSlice";

// eslint-disable-next-line react/prop-types
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {
    register,
    formState: { errors },
  } = useForm();

const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if(password != confirmPassword) {
     return alert("passwords do not match")
    }
    const user = {
      email,
      password
    }
    dispatch(signup(user));

    setConfirmPassword('')
    setPassword('')
    setEmail('')
  }


  return (
    <>
      <div className="wrapper-container">
        <main className="main-wrapper">
          <form  onSubmit={onSubmit}>
            <div className="user">
              <h4>Welcome, User</h4>
              <p>Please please provide your information for signup</p>
            </div>
            <div className="form-controls">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="true"
                {...register("email", { pattern: /^\S+@\S+$/i })}
                required
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="form-controls">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
                {...register("password")}
                required
              />
            </div>
            <div className="form-controls">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                name="password"
                id="ConfirmPassword"
                autoComplete="true"
                onChange={(e) => setConfirmPassword(e.target.value)}
                {...register("confirmPassword")}
                required
              />
            </div>

            <button type="submit" className="submit">
              Sign in
            </button>

            <p>
              <Link to="/">Already have an account? Log in</Link>
            </p>
          </form>
        </main>
      </div>
    </>
  );
};

export default Signup;
