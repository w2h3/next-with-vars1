import Map from '../components/maps/Maps';
import Contact from '../components/home/Contact';
import Hero from '../components/home/Hero';
import Service from '@/components/home/Service';
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
