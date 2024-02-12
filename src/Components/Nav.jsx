// import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <span>Tickets</span>
        {/* <Link to="/"> */}
        <div>
          <button type="submit">Login</button>
          <button type="submit">Sign up</button>
          <button type="submit">Sign out</button>
        </div>

        {/* </Link> */}
      </nav>
    </>
  );
};

export default Nav;
