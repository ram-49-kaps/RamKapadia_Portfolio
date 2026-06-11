import PageTransition from '../components/PageTransition';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Work = () => {
  return (
    <PageTransition>
      <main className="pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Case Studies.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">A selection of my recent work and technical projects.</p>
        </div>
        <Projects />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Work;
