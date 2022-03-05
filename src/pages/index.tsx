import Why from '../components/home/Services';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Hero from '../components/home/Hero2';
import AccordionFirstExample from '@/components/home/Accordion';

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <AccordionFirstExample />
      <Map />
      <Contact />
    </div>
  );
};

export default Home;
