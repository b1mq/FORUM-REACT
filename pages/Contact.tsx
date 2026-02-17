
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-display text-[#1d3a28] mb-4">Kontakt & Anfahrt</h1>
          <p className="text-gray-500 text-lg">Wir freuen uns auf Ihren Besuch im Forum 22.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-display text-[#1d3a28] mb-8">Forum 22 Bad Urach</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f2f4ef] p-4 rounded-2xl text-2xl">📍</div>
                  <div>
                    <h4 className="font-bold text-[#1d3a28] mb-1">Adresse</h4>
                    <p className="text-gray-600">Stadtjugendring Urach e.V.<br />Ulmer Str. 24, 72574 Bad Urach</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f2f4ef] p-4 rounded-2xl text-2xl">📞</div>
                  <div>
                    <h4 className="font-bold text-[#1d3a28] mb-1">Telefon</h4>
                    <a href="tel:071257707" className="text-[#7cb342] hover:underline">07125 / 7707</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f2f4ef] p-4 rounded-2xl text-2xl">✉️</div>
                  <div>
                    <h4 className="font-bold text-[#1d3a28] mb-1">E-Mail</h4>
                    <a href="mailto:info@forum22.de" className="text-[#7cb342] hover:underline">info@forum22.de</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#f2f4ef] p-4 rounded-2xl text-2xl">🚉</div>
                  <div>
                    <h4 className="font-bold text-[#1d3a28] mb-1">Nahverkehr</h4>
                    <p className="text-gray-600">Ermstalbahn (Haltestelle Wasserfall)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1d3a28] p-10 rounded-[40px] text-white">
              <h2 className="text-3xl font-display mb-6">Partnerkino Luna</h2>
              <p className="text-white/70 mb-8 leading-relaxed">Das Luna Filmtheater in Metzingen bietet ein breites Spektrum an Mainstream- und Programmkino-Filmen.</p>
              <div className="space-y-4">
                <p>📍 Eisenbahnstr. 19, 72555 Metzingen</p>
                <p>📞 07123 - 60766</p>
              </div>
            </div>
          </div>

          <div className="h-full min-h-[500px] bg-gray-200 rounded-[40px] overflow-hidden relative group shadow-2xl">
            <img 
              src="https://picsum.photos/seed/map/1000/1000" 
              className="w-full h-full object-cover filter grayscale" 
              alt="Map"
            />
            <div className="absolute inset-0 bg-[#1d3a28]/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7cb342] text-white p-6 rounded-full shadow-2xl animate-pulse">
              📍
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl">
              <p className="text-[#1d3a28] font-bold text-center">Interaktive Karte lädt...</p>
              <p className="text-gray-500 text-xs text-center mt-1">Klicken um Routenplaner zu öffnen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
