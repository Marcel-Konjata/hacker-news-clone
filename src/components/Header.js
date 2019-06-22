import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeConsumer } from "../context";
import Clock from "./Clock";

function Header() {
   return (
      <ThemeConsumer>
         {({ theme, switchTheme }) => (
            <header className={`flex space-between bg-${theme} `}>
               <nav>
                  <NavLink
                     activeClassName="activeLink"
                     className="nav-link"
                     exact
                     to="/"
                  >
                     Top Articles{" "}
                  </NavLink>
                  <NavLink
                     activeClassName="activeLink"
                     className="nav-link"
                     to="/news"
                  >
                     New Articles{" "}
                  </NavLink>
               </nav>
               <Clock />
               <figure
                  className="theme-switch"
                  onClick={switchTheme}
                  style={{ cursor: "pointer" }}
               >
                  <img
                     alt="themeswitch"
                     src={
                        theme === "dark"
                           ? "/img/bulb.svg"
                           : "/img/flashlight.png"
                     }
                     className="theme-icon"
                  />
                  <figcaption className="theme-description">
                     {theme === "dark" ? "light mode" : "dark mode"}{" "}
                  </figcaption>
               </figure>
            </header>
         )}
      </ThemeConsumer>
   );
}

export default Header;
