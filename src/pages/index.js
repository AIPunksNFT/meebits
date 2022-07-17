import React, { Suspense } from "react";
import image1 from "../assets/img/1.gif";
import Loader from "react-loader-spinner";
const Navbar = React.lazy(() => import("../components/Navbar"));
const Header = React.lazy(() => import("../components/Header"));
const About = React.lazy(() => import("../components/About"));
const About1 = React.lazy(() => import("../components/About1"));
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Footer = React.lazy(() => import("../components/Footer"));
const How = React.lazy(() => import("../components/How"));
const Pricing = React.lazy(() => import("../components/Pricing"));

const Home = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
  window.scrollTo(0, 0);
  return (
    <>
      <div className="App">
        <Suspense fallback={<div></div>}>
          <Navbar />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Header
            image={image1}
            text="Collect ultra rare digital Avatars"
            para="Grab & experience the thrill of unveiling ultra-rare digital avatars only you can truly own!"
            changeBackground="true"
          />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <About1 />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <How />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
