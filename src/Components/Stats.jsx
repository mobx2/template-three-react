import stats from "../data/stats";

function Stats() {
  return (
    <>
      <div className="stats" id="stats">
        <h2>Our Awesome Stats</h2>
        <div className="container">
          {stats.map((stat, index) => (
            <div className="box" key={index}>
              <i className={`${stat.icon} fa-2x fa-fw`}></i>
              <span className="number" data-goal={stat.goal}>
                {stat.goal}
              </span>
              <span className="text">{stat.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Stats;
