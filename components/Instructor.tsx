
import React from 'react';
import TutorImage from '../assets/Tutor.jpg';

const Instructor: React.FC = () => {
    return (
        <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <div className="relative w-64 h-64 mx-auto lg:mx-0">
                           <div className="absolute inset-0 bg-white rounded-full transition-all duration-500 transform hover:scale-105"></div>
                           <img 
                                src={TutorImage} 
                                alt="mrz, the instructor"
                                className="relative w-full h-full object-cover rounded-full border-4 border-black"
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <p className="text-lg font-semibold text-gray-400 tracking-wider uppercase">Your Instructor</p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 tracking-tighter">mrz</h2>
                        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            With over a decade of experience in content creation and a top-tier streaming career, mrz has mastered the art of building and engaging online communities. Now, he's sharing his playbook to help you achieve your streaming dreams.
                        </p>
                        <p className="mt-4 text-gray-400">
                            "I built my career from the ground up, learning every lesson the hard way. This course is the shortcut I wish I had."
                        </p>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </section>
    );
};

export default Instructor;
