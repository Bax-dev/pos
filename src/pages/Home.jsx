
import React, { Suspense} from 'react'; 
import Navbar from '../components/Navbar';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';                                               

function Home() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <div>
        <Navbar />
        <WelcomeSection />
        <Footer />
      </div>
    </Suspense>
  );
}

export default Home;
