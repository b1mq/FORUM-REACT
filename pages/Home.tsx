
import React, { useState } from 'react';
import { MOVIES, SHOWTIMES } from '../constants';
import MovieCard from '../components/MovieCard';
import MovieDetailModal from '../components/MovieDetailModal';
import { Movie } from '../types';

const Home: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleBooking = (movieId: string, time: string) => {
    alert(`Tickets für Film ${movieId} um ${time} reserviert! (Simulation)`);
  };

  const openDetails = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-[#0a0f0b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d3a28] via-[#1d3a28]/80 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6 animate-fadeInDown">
              <span className="h-px w-12 bg-[#7cb342]"></span>
              <span className="text-[#9ccc65] font-bold text-sm uppercase tracking-[0.2em]">Kino-Kultur in der Region</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Forum 22 <span className="text-white/50 font-light">&</span> <br />
              <span className="text-gradient">Luna Metzingen</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 font-light leading-relaxed">
              Vom Programmkino in Bad Urach bis zum aktuellen Blockbuster in Metzingen. 
              Zwei Kinos, eine Leidenschaft für das große Erlebnis.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#/weekly" className="bg-[#7cb342] text-white px-10 py-5 rounded-full font-bold hover:bg-[#9ccc65] transition-all transform hover:scale-105 shadow-2xl flex items-center group">
                Aktuelles Programm 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Unser Kino Section - The missing details about SJR Bad Urach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="bg-[#7cb342] absolute -top-8 -left-8 w-64 h-64 rounded-full opacity-10 blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1517604401157-5903553fd3ca?q=80&w=800&auto=format&fit=crop" 
                className="relative z-10 rounded-[60px] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" 
                alt="Forum 22 Cinema" 
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-[#7cb342] font-bold text-sm uppercase tracking-widest mb-4 block">Über Forum 22</span>
              <h2 className="text-4xl md:text-5xl font-display text-[#1d3a28] mb-8">Kultur von Bürgern für Bürger</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Das Forum 22 wird vom <strong>Stadtjugendring Urach e.V.</strong> betrieben. Seit über 30 Jahren bieten wir in Bad Urach ein vielfältiges Kulturprogramm, das von engagierten Ehrenamtlichen getragen wird.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-[#1d3a28] mb-2">Programmkino</h4>
                  <p className="text-sm text-gray-500">Ausgezeichnete Arthouse-Filme und Dokumentationen.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1d3a28] mb-2">Ehrenamt</h4>
                  <p className="text-sm text-gray-500">Ein Projekt für die Jugend und Kultur der Stadt.</p>
                </div>
              </div>
              <a href="#/contact" className="text-[#1d3a28] font-bold border-b-2 border-[#1d3a28] pb-1 hover:text-[#7cb342] hover:border-[#7cb342] transition-colors">
                Mehr über den Verein erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Program Preview */}
      <section className="py-24 bg-[#f8f9f5]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-display text-[#1d3a28] mb-4">Programm Highlights</h2>
              <p className="text-gray-500">Entdecken Sie unsere handverlesene Auswahl</p>
            </div>
            <a href="#/weekly" className="bg-[#1d3a28] text-white px-8 py-3 rounded-full hover:bg-[#7cb342] transition-colors font-semibold">
              Ganze Woche sehen
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOVIES.slice(0, 3).map(movie => (
              <div key={movie.id} onClick={() => openDetails(movie)} className="cursor-pointer">
                <MovieCard 
                  movie={movie} 
                  showtimes={SHOWTIMES.filter(s => s.movieId === movie.id).slice(0, 3)} 
                  onBook={handleBooking}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMovie && (
        <MovieDetailModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Home;
