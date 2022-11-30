import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";
export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="header">
      <div className="blong">
        <HashLink smooth to="/#home">
          Trịnh Bảo Long
        </HashLink>
      </div>
      <nav className="menu">
        <HashLink smooth to="/#aboutme">
          About me
        </HashLink>
        <HashLink smooth to="/#experience">
          Experience
        </HashLink>
        <HashLink smooth to="/#gallery">
          Gallery
        </HashLink>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </nav>
      <nav className="mobile-menu">
        <img
          src="./img/icons8-menu-192.png"
          className="gif"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        {menu === true ? (
          <div className="menu-mobile-box">
            <div>
              <HashLink smooth to="/#aboutme">
                About me
              </HashLink>
              <HashLink smooth to="/#experience">
                Experience
              </HashLink>
              <HashLink smooth to="/#gallery">
                Gallery
              </HashLink>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </div>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
}
