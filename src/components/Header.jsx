import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useLocalStorage from "../hooks/useLocalStorage";

function Header({ text, bgColor, textColor }) {
  const styledheader = {
    backgroundColor: bgColor,
    color: textColor,
  };
  const [state, dispatch] = useAuth();
  const { deleteItem } = useLocalStorage("x-auth-token");

  function logoutHandler() {
    deleteItem();
    dispatch({ type: "setToken", payload: null });
  }

  const isAuthenticated = state.accessToken != null;
  return (
    <header style={styledheader}>
      <div>{text}</div>
      <ul>
        <li>
          <NavLink to={"/"} className={"links"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="links">
            {" "}
            About{" "}
          </NavLink>
        </li>

        {isAuthenticated ? (
          <>
            <button onClick={logoutHandler}>logout</button>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/login"} className="links">
                {" "}
                Login{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to={"/register"} className="links">
                {" "}
                Register{" "}
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "pink",
};

Header.proptypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
