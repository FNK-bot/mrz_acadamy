
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseDetails from './components/CourseDetails';
import Instructor from './components/Instructor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-zinc-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-stone-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <CourseDetails />
          <Instructor />
        </main>
        <Footer />
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default App;
