import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
    const styledheader = {
        backgroundColor: bgColor,
        color: textColor,
    }
    return (
        <header style={styledheader}>
            <div>{text}</div>

            <ul>
                <li>
                    <NavLink to={"/"} className={"links"} >Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/about"} className= "links" > About </NavLink>
                </li>
            </ul>
        </header>
    )
};

Header.defaultProps = {
    text: "Feedback App",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "pink"
};

Header.proptypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

export default Header;
