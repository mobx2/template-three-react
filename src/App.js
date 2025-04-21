import headerLinks from "./data/headerLinks";
import megaMenuLinksPone from "./data/megaMenuLinksPone";
import megaMenuLinksPtwo from "./data/megaMenuLinksPone";
import articles from "./data/articles";
import galleryImgs from "./data/galleryImgs";
import featuresImgs from "./data/featuresImgs";
import team from "./data/team";
import testimonials from "./data/testimonials";
import services from "./data/services";
import skills from "./data/skills";
import plans from "./data/plans";
import videos from "./data/videos";
import stats from "./data/stats";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Articles />
      <div class="spikes"></div>
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <div class="spikes"></div>
      <Services />
      <OurSkills />
      <WorkSteps />
      <Events />
      <Pricing />
      <Video />
      <Stats />
      <Discount />
      <Footer />
    </>
  );
}

export default App;

function Header() {
  return (
    <header id="header" className="header">
      <div className="container">
        <a className="logo" href="/public/index.html">
          Hemoo
        </a>

        <ul className="main-nav">
          {headerLinks.map((link) => (
            <li key={link.id} className={link.hasMegaMenu ? "hasMegaMenu" : ""}>
              <a href={link.href} id={link.id}>
                {link.name}
              </a>

              {link.hasMegaMenu && (
                <div className="mega-menu">
                  <div className="image">
                    <img src="/imgs/megamenu.png" alt="mega menu" />
                  </div>
                  <ul className="links">
                    {megaMenuLinksPone.map((link) => (
                      <li key={link.id}>
                        <a href={link.href} id={link.id}>
                          <i className={link.icon}></i>
                          {link.displayText}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="links">
                    {megaMenuLinksPtwo.map((link) => (
                      <li key={link.id}>
                        <a href={link.href} id={link.id}>
                          <i className={link.icon}></i>
                          {link.displayText}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

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

function Articles() {
  return (
    <div className="articles" id="articles">
      <h2 className="main-title">articles</h2>
      <div className="container">
        {articles.map((article) => (
          <div className="box">
            <img src={article.img} alt={article.name} />
            <div className="content">
              <h3>{article.name}</h3>
              <p>{article.article}</p>
            </div>
            <div className="info">
              <a href="#">read more</a>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="gallrey" id="gallrey">
      <h2 className="main-title">gallery</h2>
      <div className="container">
        {galleryImgs.map((img) => (
          <div className="box" key={img.id}>
            <div className="image">
              <img src={img.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Features() {
  return (
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
  );
}

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

function Team() {
  return (
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
  );
}

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

function OurSkills() {
  return (
    <div className="our-skills" id="our-skills">
      <h2 className="main-title">Our Skills</h2>
      <div className="container">
        <img src="/imgs/skills.png" alt="skills" />
        <div className="skills">
          {skills.map((skill) => (
            <>
              <div className="skill">
                <h3>
                  {skill.name}
                  <span>{skill.percentage}%</span>
                </h3>
                <div className="the-progress">
                  <span
                    style={{ width: `${skill.percentage}%` }}
                    data-width={`${skill.percentage}%`}
                  ></span>{" "}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkSteps() {
  return (
    <div className="work-steps" id="work-steps">
      <h2 className="main-title">How It Works ?</h2>
      <div className="container">
        <img src="imgs/work-steps.png" alt="" className="image" />
        <div className="info">
          <div className="box">
            <img src="imgs/work-steps-1.png" alt="" />
            <div className="text">
              <h3>Business Analysis</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <img src="imgs/work-steps-2.png" alt="" />
            <div className="text">
              <h3>Architecture</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
          <div className="box">
            <img src="imgs/work-steps-3.png" alt="" />
            <div className="text">
              <h3>Developement</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                nesciunt obcaecati quisquam quis laborum recusandae debitis vel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="events" id="events">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">Latest Events</h2>
      <div className="container">
        <img src="imgs/events.png" alt="" />
        <div className="info">
          <div className="time">
            <div className="unit">
              <span>08</span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span>08</span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span>45</span>
              <span>Minutes</span>
            </div>
            <div className="unit">
              <span>55</span>
              <span>Seconds</span>
            </div>
          </div>
          <h2 className="title">Tech Masters Event 2024</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            nam, magnam ducimus necessitatibus mollitia numquam tempore
            voluptatem itaque excepturi
          </p>
        </div>
        <div className="subscribe">
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>
    </div>
  );
}

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

function Video() {
  return (
    <div className="videos" id="video">
      <h2 className="main-title">Top Videos</h2>
      <div className="container">
        <div className="holder">
          <div className="list">
            <div className="name">
              Top Videos
              <i className="fas fa-random"></i>
            </div>
            <ul>
              {videos.map((video, index) => (
                <li key={index}>
                  {video.title}
                  <span>{video.duration}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="preview">
            <img src="imgs/video-preview.jpg" alt="Video Preview" />
            <div className="info">Everything About The Virtual Hosts</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  return (
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
  );
}

function Discount() {
  return (
    <div className="discount" id="discount">
      <div className="image">
        <div className="content">
          <h2>We Have A Discount</h2>
          <p>
            Take advantage of our limited-time discount offer! Whether you're a
            new customer or a loyal client, we’ve got something special just for
            you. Enjoy premium services at a lower cost—don’t miss out!
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
  );
}

function Footer() {
  return (
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            nulla rem, dignissimos iste aspernatur
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
  );
}
