import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header">
      <div className="blong">
        <HashLink smooth to="/#home">
          Trịnh Bảo Long
        </HashLink>
      </div>
      <nav>
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
    </div>
  );
}
