import { Link, NavLink } from "react-router-dom";
import "./AppHeader.scss";

const AppHeader = (): JSX.Element => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="header__navbar">
            <ul>
              <li>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#9f0013" : "inherit"
                  })}
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#9f0013" : "inherit"
                  })}
                  to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#9f0013" : "inherit"
                  })}
                  to="/unknown">
                  Unknown
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#9f0013" : "inherit"
                  })}
                  to="/profile">
                  Профиль
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
