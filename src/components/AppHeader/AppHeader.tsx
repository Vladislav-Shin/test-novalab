import { Link, NavLink } from "react-router-dom";
import logo from '../../resources/icons/logo.svg';

import "./AppHeader.scss";

const AppHeader = (): JSX.Element => {
  const isLogged = localStorage.getItem('token') ? true : false;

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="header__navbar">
            <ul>
              <li>
                <NavLink
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "#c4c3c3" : "inherit"
                  })}
                  to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#c4c3c3" : "inherit"
                  })}
                  to="/users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#c4c3c3" : "inherit"
                  })}
                  to="/colors">
                  Colors
                </NavLink>
              </li>
                {isLogged ? (
                  <li>
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#c4c3c3" : "inherit"
                      })}
                      to="/profile">
                      Profile
                    </NavLink>
                  </li>
                ) : (
                  <li className="header__link-form">
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#c4c3c3" : "inherit",
                        marginRight: '5px'
                      })}
                      to="/sign-in">
                      Log in
                    </NavLink>
                    /
                    <NavLink
                      style={({ isActive }) => ({
                        color: isActive ? "#c4c3c3" : "inherit",
                        marginLeft: '5px'
                      })}
                      to="/registration">
                      Registration
                    </NavLink>
                  </li>
                )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
