import plans from "../data/plans";

function Pricing() {
  return (
    <div className="pricing" id="pricing">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">Pricing Plans</h2>
      <div className="container">
        {plans.map((plan, index) => (
          <div key={index} className={`box ${plan.popular ? "popular" : ""}`}>
            {plan.popular && <div className="label">{plan.label}</div>}
            <div className="title">{plan.title}</div>
            <img src={plan.image} alt="" />
            <div className="price">
              <span className="amount">{plan.price}</span>
              <span className="time">{plan.time}</span>
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <a href="#">Choose Plan</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing();
