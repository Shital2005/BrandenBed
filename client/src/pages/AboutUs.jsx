import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7B500]/10 via-white to-[#0D1B2A]/10 py-24 px-4">
        <section className="max-w-3xl mx-auto text-center bg-white/90 rounded-3xl shadow-2xl border border-[#F7B500]/30 p-10 relative">
          
          <h1 className="text-5xl font-extrabold mb-8 text-[#0D1B2A] drop-shadow-lg">About Us</h1>
          <p className="text-lg mb-6 text-gray-700 font-medium">
            <span className="text-[#F7B500] font-bold">BrandenBed</span> is dedicated to providing modern, secure, and stylish living spaces in Berlin for students and professionals. Our mission is to make finding your dream home easy, transparent, and enjoyable.
          </p>
          <p className="text-lg mb-6 text-gray-700 font-medium">
            We partner with trusted property owners and offer a curated selection of apartments, studios, and shared flats. Our team is passionate about helping you settle into Berlin life with comfort and confidence.
          </p>
          <p className="text-lg text-gray-700 font-medium">
            Whether you're new to the city or looking for an upgrade, <span className="text-[#F7B500] font-bold">BrandenBed</span> is here to guide you every step of the way.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
