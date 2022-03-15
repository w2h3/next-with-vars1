// import Why from '../components/home/Services';
import Map from '../components/maps/Maps';
import Contact from '../components/Contact';
import Hero from '../components/home/Hero';
import Services from '@/components/home/NewServices';
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      {/* <Why /> */}
      {/* <AccordionFirstExample /> */}
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
