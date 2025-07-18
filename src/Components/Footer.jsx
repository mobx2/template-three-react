function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="box">
            <h3>Hemoo</h3>
            <ul className="social">
              <li>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li>
                <a href="#">Important Link 1</a>
              </li>
              <li>
                <a href="#">Important Link 2</a>
              </li>
              <li>
                <a href="#">Important Link 3</a>
              </li>
              <li>
                <a href="#">Important Link 4</a>
              </li>
              <li>
                <a href="#">Important Link 5</a>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
              <i className="fas fa-map-marker-alt fa-fw"></i>
              <div className="info">
                Egypt, Giza, Inside The Sphinx, Room Number 220
              </div>
            </div>
            <div className="line">
              <i className="far fa-clock fa-fw"></i>
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <i className="fas fa-phone-volume fa-fw"></i>
              <div className="info">
                <span>+20123456789</span>
                <span>+20198765432</span>
              </div>
            </div>
          </div>
          <div className="box footer-gallery">
            <img src="imgs/gallery-01.png" alt="" />
            <img src="imgs/gallery-02.png" alt="" />
            <img src="imgs/gallery-03.jpg" alt="" />
            <img src="imgs/gallery-04.png" alt="" />
            <img src="imgs/gallery-05.jpg" alt="" />
            <img src="imgs/gallery-06.png" alt="" />
          </div>
        </div>
        <p className="copyright">Made With &lt;3 By Hemoo</p>
      </div>
    </>
  );
}

export default Footer;
