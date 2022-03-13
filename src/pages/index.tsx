// import Why from '../components/home/Services';
import Map2 from '../components/Maps';
import Contact from '../components/Contact';
import Hero from '../components/home/NewHero';
import { Feature } from '@/components/home/Services2';
const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      {/* <Why /> */}
      {/* <AccordionFirstExample /> */}
      <Map2 />
      <Contact />
    </div>
  );
};

export default Home;
