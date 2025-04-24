import services from "../data/services";

function Services() {
  return (
    <div className="services">
      <h2 className="main-title">Services</h2>
      <div className="container">
        {services.map((service) => (
          <div class="box">
            <i class={service.icon}></i>
            <h3>{service.title}</h3>
            <div class="info">
              <a href="#">Details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services();
