import Service from '@/components/home/Service';

import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Map from '../components/maps/Maps';
const Home = () => {
  return (
    <div>
      <Hero />
      <Service />

      <Map />
      <Contact />
    </div>
  );
};

export default Home;
