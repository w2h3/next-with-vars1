// import Why from '../components/home/Services';
import Map from '../components/maps/Maps';
import Contact from '../components/Contact';
import Hero from '../components/home/Hero';
import Service from '@/components/home/Service';
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      {/* <Why /> */}
      {/* <AccordionFirstExample /> */}
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
