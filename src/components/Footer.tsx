import React from "react";
import styles from "./Footer.module.css";
import * as data from "./footerlinks.json";
import { NavLink, Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  label: string;
  link: string;
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div
            role="navigation"
            aria-label=" footer navigation"
            className={styles.navigation}
          >
            <ul className={styles.navlist}>
              {links?.map((link: Link) => {
                return (
                  <li key={link.link} className={styles["link"]}>
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
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.newsletter}>
            <button>NEWSLETTER</button>
          </div>
          <ul className={styles.iconslist}>
            <li className={styles.listitems}>
              <Link to="/">
                <AiFillFacebook />
              </Link>
            </li>
            <li className={styles.listitems}>
              <Link to="/">
                <AiFillTwitterSquare />
              </Link>
            </li>
            <li className={styles.listitems}>
              <Link to="/">
                <AiFillLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
