import Data from "./Data";
import "./Home.css";
import ScrollDown from "./ScrollDown";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section"id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-img"></div>
          <Data/>
          <Social/>
        </div>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home