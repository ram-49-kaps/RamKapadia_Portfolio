import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import HomeIntro from '../components/HomeIntro';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Hero />
        <HomeIntro />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Home;
