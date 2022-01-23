import Footer from '../components/Footer';
import Header from '../components/Navbar';
import Hero from '../components/Hero';
import Why from '../components/Services';
import Maps from '../components/Maps';
import Top from '../components/Header';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Top />
      <Header />
      <Hero />
      <Why />
      <Maps />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
