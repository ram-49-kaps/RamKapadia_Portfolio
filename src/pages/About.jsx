import PageTransition from '../components/PageTransition';
import AboutComponent from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const About = () => {
  return (
    <PageTransition>
      <main className="pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">About Me.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">Background, skills, and professional experience.</p>
        </div>
        <AboutComponent />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;
