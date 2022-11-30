import { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function Album() {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div className="container-box-gallery">
        <div className="img1">
          <img
            src="./img/web1.png"
            alt=""
            onClick={() => setToggler(!toggler)}
            className="img-color"
          />
          <FsLightbox toggler={toggler} sources={["./img/web1.png"]} />
        </div>
        <div className="img2">
          <img
            src="./img/web2.png"
            alt=""
            onClick={() => setToggler(!toggler)}
            className="img-color"
          />
          <FsLightbox toggler={toggler} sources={["./img/web2.png"]} />
        </div>
        <div className="img3">
          <img
            src="./img/web3.png"
            alt=""
            onClick={() => setToggler(!toggler)}
            className="img-color"
          />
          <FsLightbox toggler={toggler} sources={["./img/web3.png"]} />
        </div>
      </div>
    </>
  );
}
