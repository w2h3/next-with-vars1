// import Why from '../components/home/Services';
import Map2 from '../components/Maps';
import Contact from '../components/Contact';
import Hero from '../components/home/NewHero';
import Services from '@/components/home/NewService';
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      {/* <Why /> */}
      {/* <AccordionFirstExample /> */}
      <Map2 />
      <Contact />
    </div>
  );
};

export default Home;
