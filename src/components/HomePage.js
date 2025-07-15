import HomeBody from "./homepage/HomeBody";
import HomeFooter from "./homepage/HomeFooter";
import HomeHeader from "./homepage/HomeHeader";
import HomeHero from "./homepage/HomeHero";

const HomePage = () => {
  return (
    <>
      <HomeHeader /> 
      <HomeHero />
      <HomeBody />
      <HomeFooter />
    </>
  );
};

export default HomePage;
