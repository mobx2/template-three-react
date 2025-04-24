// ===============================
// ====== Components Start =======
// ===============================

import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Articles from "./Components/Articles";
import Gallery from "./Components/Gallery";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";
import Services from "./Components/Services";
import OurSkills from "./Components/OurSkills";
import WorkSteps from "./Components/WorkSteps";
import Events from "./Components/Events";
import Pricing from "./Components/Pricing";
import Video from "./Components/Videos";
import Stats from "./Components/Stats";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";

// ===============================
// ======= Components End ========
// ===============================

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
