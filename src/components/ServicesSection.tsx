import { Check, BookOpen, User, Clock, Trophy, Globe, GraduationCap } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Dutch and IB Curriculum Experts",
      description: "Providing support to students for over 10 years, our tutors know the IB curriculum and Dutch school system inside and out — from VMBO to HAVO to VWO. We tailor our support to your level and your learning style.",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "One-on-One Session with a Customized Learning Plan",
      description: "We create personalized study plans based on your goals, level, and learning pace. Whether your child is struggling with a specific subject or aiming for excellence, we offer the guidance and support they need to succeed.",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Eindexamen Preparation",
      description: "Specialized coaching to prepare you for the final IB Diploma Programme (DP), Centrale Eindexamens (CE) and Schoolonderzoeken (SE). Our tutors provide past paper practice, exam strategies, time management techniques, and in-depth revision sessions aligned with the Dutch examination framework.",
      iconColor: "text-green-600",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "More Than Just Homework Help",
      description: "We don't just help you get the right answer — we teach you how to learn, manage your time, and prepare for tests like a pro.",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Top-Performing Tutors",
      description: "All our tutors are either experienced teachers or high-achieving university students who've been exactly where you are now. They explain concepts clearly, offer practical tips, and help you feel confident again.",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Flexible & Online",
      description: "Book sessions when it suits you. Study from home, at your pace, with personal support just a few clicks away.",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-700 rounded-full text-sm font-medium border border-yellow-500/40 animate-fade-in-down animation-delay-200">
            🎯 Our Services
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-400">
            What Do We{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-800">
              Offer?
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-600">
            Comprehensive educational support tailored to help Dutch and IB students excel in their academic journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-xl border ${service.borderColor} hover:border-opacity-50 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${800 + index * 150}ms` }}
            >
              {/* Check mark icon */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>

              {/* Service icon */}
              <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>

              {/* Service content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1800">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey to Academic Excellence?
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              Transform your academic performance with our personalized tutoring approach designed for your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span>Book Your Free Consultation</span>
                <div className="w-2 h-2 bg-slate-900 rounded-full group-hover:animate-ping"></div>
              </button>
              
              <button className="bg-gray-100 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                Learn About Our Tutors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}