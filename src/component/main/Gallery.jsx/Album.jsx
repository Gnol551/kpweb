export default function Album(props) {
  return (
    <>
      <div className="container-box-gallery">
        <div className="img-box">
          <img src="./img/web1.png" className="img-color" />
          <div>
            <p>Cho thuê xe du lịch Thanh Tuấn</p>
            <p>
              <span>Website:</span>{" "}
              <a href="https://chothuedulich4c7c16c.com/">
                https://chothuedulich4c7c16c.com/
              </a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src="./img/web2.png" className="img-color" />
          <div>
            <p>Raily Store</p>
            <p>
              <span>Website:</span>{" "}
              <a href="https://raily.vn/">https://raily.vn/</a>
            </p>
          </div>
        </div>
        <div className="img-box">
          <img src="./img/web3.png" className="img-color" />
          <div>
            <p>Công ty TNHH SX TM AA WINDOWS</p>
            <p>
              <span>Website:</span>{" "}
              <a href="http://aawindows.vn/">http://aawindows.vn/</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
