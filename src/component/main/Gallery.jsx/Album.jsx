import { useState } from "react";

export default function Album() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container-box-gallery">
        <div>
          <img
            src="../img/web1.png"
            alt=""
            onClick={() => {
                setOpen(!open);
            }
            }
          />
          {open === true ? (
            <div className="img-click">
              <div className="img-box">
                <img src="../img/web1.png" alt="" />
                <p>adad</p>
                <p>ádasd</p>
              </div>
            </div>
          ) : (
            <></>
          )}
          <p>Thuê Xe du lịch - Vn </p>
        </div>
        <div>
          <img
            src="../img/web2.png"
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
          <p>Cap Store</p>
        </div>
        <div>
          <img
            src="../img/web3.png"
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
          <p>Nhôm kính Aa-Windown</p>
        </div>
      </div>
    </>
  );
}
