import React from "react";
import styles from "./Navbar.module.css";
import * as data from "./links.json";
import { NavLink, Link } from "react-router-dom";
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  link: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles["links-container"]}>
      {links.map((link: Link) => {
        return (
          <div key={link.link} className={styles["link"]}>
            <NavLink
              className={({ isActive }) =>
                ["link_nav", isActive ? "active" : null]
                  .filter(Boolean)
                  .join(" ")
              }
              to={link.link}
            >
              {link.label}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles["logo-container"]}>
        <Link to="/">
          <h1>INSTRUMENT</h1>
        </Link>
      </div>
      <Links links={links} />
    </nav>
  );
};

export default Navbar;
