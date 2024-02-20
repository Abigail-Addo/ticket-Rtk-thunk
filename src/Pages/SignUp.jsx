// import '../assets/css/Signup.css';
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SignUp } from "../store/features/userAuth/authSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Please passwords should match");
    }

    const user = {
      email,
      password,
    };

    dispatch(SignUp(user));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/")
  };

  return (
    <>
      <div className="wrapper-container">
        <main className="main-wrapper">
          <form onSubmit={onSubmit}>
            <div className="user">
              <h4>Welcome, User</h4>
              <p>Please please provide your information for signup</p>
            </div>
            <div className="form-controls">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-controls">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-controls">
              <label htmlFor="ConfirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                id="ConfirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit" disabled={!email || !password || !confirmPassword}>
              Sign up
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
