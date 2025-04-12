import React from 'react';
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';                                                

function Home() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <Footer />
    </div>
  );
}

export default Home;
