
import React, { Suspense} from 'react'; 
import Navbar from '../components/website/Navbar';
import WelcomeSection from '../components/website/WelcomeSection';
import Footer from '../components/website/Footer';                                               

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
