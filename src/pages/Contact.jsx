import PageTransition from '../components/PageTransition';
import ContactComponent from '../components/Contact';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <PageTransition>
      <main className="pt-32 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Let's Talk.</h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl">Have a project in mind or want to collaborate?</p>
        </div>
        <ContactComponent />
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
