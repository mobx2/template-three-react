function Landing() {
  return (
    <div className="landing">
      <div className="container">
        <div className="landing-content">
          <div className="text">
            <h1>Welcome, To Hemoo World</h1>
            <p>
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events{" "}
            </p>
          </div>
          <div className="image">
            <img src="/imgs/landing-image.png " alt="landing" />
          </div>
        </div>
        <a className="go-down" href="#articles">
          <i className="fa-solid fa-angles-down fa-2x"></i>
        </a>
      </div>
    </div>
  );
}


export default Landing();
