
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
    <div className="text-white w-12 h-12 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const CourseDetails: React.FC = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-1.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg>,
            title: 'Pro-Level OBS & Software',
            description: 'Master OBS Studio, Streamlabs, and other essential software for a flawless, professional broadcast.',
            delay: 200,
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.28a4.5 4.5 0 00-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 001.13-1.897M16.5 7.5l-1.5-1.5m0 0l-1.5 1.5m1.5-1.5V5.25m7.5 4.5l-1.5-1.5m0 0l-1.5 1.5m1.5-1.5V12m-7.5-4.5l1.5 1.5m0 0l1.5-1.5M12 5.25v1.5m-4.5 4.5l1.5 1.5m0 0l1.5-1.5M7.5 12v1.5m3-13.5l.75.75m-4.5 4.5l.75.75m-4.5 4.5l.75.75m-.75 4.5l.75.75m4.5-4.5l.75.75m-4.5 4.5l.75.75M9 21v-1.5m3 1.5v-1.5m3 1.5v-1.5" /></svg>,
            title: 'Audience Engagement',
            description: 'Learn proven techniques to interact with your chat, build a loyal community, and keep viewers coming back.',
            delay: 400,
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-15c-.621 0-1.125-.504-1.125-1.125V8.25m15 1.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
            title: 'Monetization Strategies',
            description: 'Discover diverse income streams beyond subs and donations, from sponsorships to merchandise.',
            delay: 600,
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.44m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58 5.84a6 6 0 01-5.84-7.38v5.84" /></svg>,
            title: 'Build Your Unique Brand',
            description: 'Define your niche, develop your personal brand, and create content that stands out from the crowd.',
            delay: 800,
        },
    ];

    return (
        <section className="py-20 sm:py-32 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tighter">What You'll Master</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        This course is a comprehensive roadmap to streaming success, covering everything you need to know.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
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

export default CourseDetails;
