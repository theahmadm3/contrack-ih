import Hero from '../sections/Hero.jsx';
import Clients from '../sections/Clients.jsx';
import Stats from '../sections/Stats.jsx';
import Work from '../sections/Work.jsx';
import Services from '../sections/Services.jsx';
import About from '../sections/About.jsx';
// import SaasProduct from '../sections/SaasProduct.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home({ scrollY }) {
  return (
    <>
      <Hero scrollY={scrollY} />
      <Clients />
      <Stats />
      <Work />
      <Services />
      <About />
      {/* <SaasProduct /> */}
      <Contact />
    </>
  );
}
