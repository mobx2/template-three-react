import featuresImgs from "../data/featuresImgs";

function Features() {
  return (
    <>
      <div className="features" id="features">
        <h2 className="main-title">Features</h2>
        <div className="container">
          {featuresImgs.map((feature) => (
            <div className={`box ${feature.className}`} key={feature.className}>
              <div className="img-holder">
                <img src={feature.img} alt={feature.className} />
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.content}</p>
              <a href="#">more</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
