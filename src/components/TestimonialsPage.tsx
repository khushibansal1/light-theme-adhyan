import { Star, Quote, GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Emma van der Berg",
      grade: "IB Diploma Program",
      subject: "Mathematics HL",
      rating: 5,
      text: "Adhyan Guidance transformed my understanding of calculus. I went from struggling with derivatives to confidently solving complex integration problems. My IB Math HL score improved from a 4 to a 7!",
      improvement: "Grade 4 → Grade 7",
      avatar: "E"
    },
    {
      name: "Luca Rossi",
      grade: "VWO 6",
      subject: "Physics",
      rating: 5,
      text: "The personalized approach really made the difference. My tutor didn't just teach formulas - they helped me understand the concepts behind them. Physics became my strongest subject!",
      improvement: "5.2 → 8.4 average",
      avatar: "L"
    },
    {
      name: "Sophia Ahmed",
      grade: "HAVO 5",
      subject: "Chemistry",
      rating: 5,
      text: "I was completely lost in organic chemistry. The tailored learning plan broke everything down into manageable steps. Now I'm considering chemistry in university!",
      improvement: "Failed → 8.1 final grade",
      avatar: "S"
    },
    {
      name: "Max Jansen",
      grade: "IB Diploma Program",
      subject: "Mathematics SL & Physics HL",
      rating: 5,
      text: "Having support in multiple subjects was game-changing. The integrated approach helped me see connections between math and physics that I never noticed before.",
      improvement: "Overall: 32 → 41 points",
      avatar: "M"
    },
    {
      name: "Zara Okafor",
      grade: "VWO 4",
      subject: "Mathematics",
      rating: 5,
      text: "The online sessions were so convenient and effective. My confidence in math has skyrocketed, and I actually enjoy solving problems now!",
      improvement: "4.8 → 7.9 average",
      avatar: "Z"
    },
    {
      name: "David Chen",
      grade: "IB Diploma Program",
      subject: "Chemistry HL",
      rating: 5,
      text: "The exam preparation strategies were invaluable. My tutor helped me understand exactly what the IB examiners were looking for. Couldn't have done it without Adhyan Guidance!",
      improvement: "Predicted 5 → Achieved 7",
      avatar: "D"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "92%",
      label: "Grade Improvement Rate",
      description: "Students see measurable improvement within 8 sessions"
    },
    {
      icon: Award,
      value: "15+",
      label: "Average Point Increase",
      description: "For IB students in our fully tailored program"
    },
    {
      icon: GraduationCap,
      value: "10+",
      label: "Years Experience",
      description: "Supporting Dutch and IB students"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Student Rating",
      description: "Based on 200+ completed sessions"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent animate-fade-in-down text-5xl font-bold">
              Student Success Stories
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Real results from real students. See how personalized tutoring has transformed academic journeys across the Netherlands.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-white mb-4">Our Impact in Numbers</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                These results speak for themselves - but more importantly, they represent transformed academic confidence and brighter futures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label}
                    className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/30 text-center hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-white text-3xl mb-2">{stat.value}</div>
                    <h4 className="text-white mb-2">{stat.label}</h4>
                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-gray-800 mb-4">What Our Students Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every student's journey is unique. Here are some of the incredible transformations we've been privileged to be part of.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-yellow-500" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Improvement Badge */}
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg mb-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-yellow-600" />
                      <span className="text-yellow-800 font-medium">
                        {testimonial.improvement}
                      </span>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-gray-800">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.grade}</div>
                      <div className="text-yellow-600 text-sm">{testimonial.subject}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h3 className="text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-300 mb-8">
              Join hundreds of students who have transformed their academic performance with personalized tutoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Book Free Session
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-400 rounded-xl hover:bg-yellow-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}