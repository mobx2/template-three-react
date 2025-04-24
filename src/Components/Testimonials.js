import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h2 className="main-title">Testimonials</h2>
      <div className="container">
        {testimonials.map((testimonial) => (
          <div className="box">
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <span className="title">{testimonial.jop}</span>
            <div className="rate">{testimonial.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials();
