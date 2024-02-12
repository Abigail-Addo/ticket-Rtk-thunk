// import '../assets/css/Login.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="con">
        <main className="wrapper">
          <form>
            <div className="user">
              <h4>Welcome, User</h4>
              <p>Please login</p>
            </div>
            <div className="form-controls">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: /^\S+@\S+$/i,
                })}
                placeholder="Email"
                id="email"
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
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                required
              />
              {errors.password && <p>{errors.password.message}</p>}
              <i className="bi bi-eye-slash" id="togglePassword"></i>
            </div>
            <div className="form-controls">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                required
              />
              {errors.password && <p>{errors.password.message}</p>}
              <i className="bi bi-eye-slash" id="togglePassword"></i>
            </div>
            <Link to="/app">
              <button type="submit" className="submit">
                Log in
              </button>
            </Link>

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
