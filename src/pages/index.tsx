import Hero from '../components/home/Hero';
import Why from '../components/home/Services';
import Spots from '../components/home/Spots';
import Map from '../components/Map';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Why />
      <Map />
      <Spots />
      <Contact />
    </div>
  );
};

export default Home;
