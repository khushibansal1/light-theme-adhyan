import { Users, Target, Heart, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
                    At AdhyanX, we are more than just tutors
                  </p>
                  <p className="text-gray-300">
                    — we are <span className="text-white font-semibold">partners in your student&apos;s academic journey</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Institute Image */}
          <div className="relative animate-fade-in-right animation-delay-600">
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/30 shadow-2xl">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1757194455329-541f39364057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTkzMTE2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern high school classroom learning environment"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              
              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Your Academic Success Partners
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Specializing in IB Diploma and Dutch high school programs (VMBO, HAVO, VWO) with personalized learning approaches.
                  </p>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Expert Tutors</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Proven Results</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">All Levels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Flexible Times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl animate-bounce-in animation-delay-800">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span className="font-semibold text-sm">10+ Years</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-xl animate-bounce-in animation-delay-1200">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="font-semibold text-sm">500+ Students</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
            <div className="absolute -top-8 left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}