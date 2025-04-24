function Discount() {
  return (
    <>
      <div className="discount" id="discount">
        <div className="image">
          <div className="content">
            <h2>We Have A Discount</h2>
            <p>
              Take advantage of our limited-time discount offer! Whether you're
              a new customer or a loyal client, we’ve got something special just
              for you. Enjoy premium services at a lower cost—don’t miss out!
            </p>
            <img src="imgs/discount.png" alt="Discount Offer" />
          </div>
        </div>
        <div className="form">
          <div className="content">
            <h2>Request A Discount</h2>
            <form>
              <input
                className="input"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="input"
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <input
                className="input"
                type="text"
                placeholder="Your Phone"
                name="mobile"
              />
              <textarea
                className="input"
                placeholder="Tell us more about your project or service needs"
                name="message"
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;
