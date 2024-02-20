import { useSelector, useDispatch } from "react-redux";
import { SignOut, reset } from "../store/features/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";

const Nav = () => {
  const { user } = useSelector((state) => state.auth);
  const userData = !!user;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate("/", { replace: true });
    }
  }, [userData, navigate, dispatch]);

  const logout = () => {
    dispatch(SignOut());
    dispatch(reset());
    navigate("/", { replace: true });
  };
  return (
    <>
      <nav>
        <span>Tickets</span>
        {/* <Link to="/"> */}
        <div>
        {!userData ? (
          <>
            <button>Login</button>
            <button>Sign Up</button>
          </>
        ) : (
          <button onClick={logout}>Sign Out</button>
        )}
        </div>

        {/* </Link> */}
      </nav>
    </>
  );
};

export default Nav;
