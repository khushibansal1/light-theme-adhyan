import { Users, Target, Heart, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-blue-500/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/40 animate-fade-in-down animation-delay-200">
                👥 Meet Our Team
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight animate-fade-in-up animation-delay-400">
                Who{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Are We?
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="animate-fade-in-up animation-delay-600">
                  We are a team of <span className="text-yellow-400 font-semibold">passionate educators</span> dedicated to helping high schoolers across the Netherlands succeed — not just in school, but in life. Whether you're preparing for your final exams, struggling with a tough subject, or aiming for top grades, we're here to support your journey.
                </p>
                
                <p className="animate-fade-in-up animation-delay-800">
                  Our mission is simple: <span className="text-yellow-400 font-semibold">make learning personal, effective, and stress-free</span>. We believe that with the right guidance, every student can unlock their full potential.
                </p>
                
                <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 animate-scale-in animation-delay-1000">
                  <p className="text-yellow-400 font-semibold text-xl mb-2">
                    At Adhyan, we are more than just tutors
                  </p>
                  <p className="text-gray-300">
                    — we are <span className="text-white font-semibold">partners in your student's academic journey</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Value Grid */}
          <div className="relative animate-fade-in-right animation-delay-600">
            <div className="grid grid-cols-2 gap-6">
              {/* Experience */}
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-800">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                <p className="text-gray-300 text-sm">
                  10+ years of helping students achieve their academic goals with proven teaching methods.
                </p>
              </div>
              
              {/* Passion */}
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 transform hover:scale-105 transition-all duration-300 mt-8 animate-fade-in-up animation-delay-1000">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Focus</h3>
                <p className="text-gray-300 text-sm">
                  Dedicated to personalized learning approaches that adapt to each student's unique needs.
                </p>
              </div>
              
              {/* Care */}
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 transform hover:scale-105 transition-all duration-300 -mt-4 animate-fade-in-up animation-delay-1200">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Care</h3>
                <p className="text-gray-300 text-sm">
                  We genuinely care about each student's progress and celebrate every achievement together.
                </p>
              </div>
              
              {/* Support */}
              <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 transform hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-1400">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Support</h3>
                <p className="text-gray-300 text-sm">
                  Comprehensive support system that extends beyond just academic tutoring sessions.
                </p>
              </div>
            </div>
            
            {/* Central Element */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-blue-500/20 rounded-full border border-yellow-500/40 flex items-center justify-center backdrop-blur-sm animate-bounce-in animation-delay-1600">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}