
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WeeklyProgram from './pages/WeeklyProgram';
import Contact from './pages/Contact';
import ServicePrices from './pages/ServicePrices';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/weekly':
        return <WeeklyProgram />;
      case '#/contact':
        return <Contact />;
      case '#/service/prices':
        return <ServicePrices />;
      case '#/service/vouchers':
        return (
          <div className="pt-48 pb-48 bg-[#f8f9f5] flex flex-col items-center justify-center text-center px-6">
            <span className="text-6xl mb-8">🎁</span>
            <h1 className="text-5xl font-display font-bold text-[#1d3a28] mb-4">Kinogutscheine</h1>
            <p className="text-gray-500 max-w-lg mb-12 text-lg italic">
              Das perfekte Geschenk. Online-Bestellung in Kürze verfügbar. 
              Gutscheine erhalten Sie derzeit direkt an unserer Kinokasse.
            </p>
            <a href="#/" className="bg-[#1d3a28] text-white px-10 py-4 rounded-full font-bold">Zurück zur Startseite</a>
          </div>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#7cb342] selection:text-white">
      <Navbar />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
      
      {/* Global Overrides for Scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
