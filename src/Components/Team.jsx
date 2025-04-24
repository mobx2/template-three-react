import team from "../data/team";

function Team() {
  return (
    <>
      <div className="team" id="team">
        <h2 className="main-title">team members</h2>
        <div className="container">
          {team.map((member) => (
            <div className="box">
              <div className="data">
                <img src={member.img} alt={member.name} />
                <div className="social-icons">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <div className="info">
                <h3>{member.name}</h3>
                <p>{member.jop}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
