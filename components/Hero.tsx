
import React, { useState } from 'react';
import LaunchVideo from '../assets/launch video.mp4';



const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send the email to a server
      console.log(`Email submitted: ${email}`);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-semibold text-gray-400 tracking-wider uppercase animate-fade-in-down">Launching Soon</p>
        <h2 className="text-5xl sm:text-7xl font-extrabold mt-4 tracking-tighter animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Master the Art of Streaming with mrz
        </h2>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Unlock the secrets to building a successful streaming career. Join the waitlist for exclusive access and early bird discounts.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/50 group border-2 border-gray-800">
          <video 
            src={LaunchVideo} 
            autoPlay
            loop
            muted
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          
        </div>
      </div>
      
      <div id="notify" className="mt-16 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        {submitted ? (
          <p className="text-xl text-green-400 font-semibold">Thank you! We'll notify you at launch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Get Notified
            </button>
          </form>
        )}
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-down {
            animation: fade-in-down 0.8s ease-out forwards;
            opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
