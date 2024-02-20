// import '../assets/css/Login.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignIn, reset } from "../store/features/userAuth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, loading, error, user } = useSelector((state) => state.auth);

  const userData = !!user;

  useEffect(() => {
    if (success || user) {
      navigate("/app", { replace: true });
      localStorage.setItem("id", JSON.stringify(user._id));
      // toast.success("login successful", { delay: 1000 });
    }

    if (error) {
      toast.error(error);
      dispatch(reset());
    }
  }, [success, error, loading, dispatch, userData]);

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(SignIn(user));

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="con">
        <main className="wrapper">
          <form onSubmit={onSubmit}>
            <div className="user">
              <h4>Welcome, User</h4>
              <p>Please login</p>
            </div>
            <div className="form-controls">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="enter Email"
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
            <button type="submit" className="submit">
              Log in
            </button>

            <p>
              <Link to="/signup">Dont have an account? Sign up</Link>
            </p>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
