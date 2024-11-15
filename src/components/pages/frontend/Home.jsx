import Accesories from './Accesories';
import Apparels from './Apparels';
import Banner from './Banner';
import CallToAction from './Call to Action';
import Discounts from './Discounts';
import Equipments from './Equipments';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Banner />
      <Header />
      <Equipments />
      <Accesories />
      <Apparels />
      <Discounts />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home
