import { Check, Star, Users, Target, Crown, MessageSquare, Calendar, BarChart3 } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter Plan",
      icon: Users,
      price: "€40",
      period: "per session",
      description: "Perfect for trying out our teaching approach",
      features: [
        "1-on-1 session",
        "1 per session",
        "60 minutes duration", 
        "Standard learning plan",
        "General goals"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Growth Plan", 
      icon: Target,
      price: "€140",
      period: "per month",
      description: "Ideal for consistent academic progress",
      features: [
        "1-on-1 session",
        "4 sessions per month", 
        "60 minutes duration",
        "Customised learning plan",
        "Specific goals",
        "Free trial session",
        "Progress Tracking"
      ],
      popular: false,
      color: "yellow"
    },
    {
      name: "Elite Plan",
      icon: Crown, 
      price: "€240",
      period: "per month",
      description: "For dedicated learners seeking excellence",
      features: [
        "1-on-1 session",
        "8 sessions per month",
        "60 minutes duration", 
        "Fully Tailored Curriculum",
        "Targeted outcomes",
        "Free trial session", 
        "Progress Tracking",
        "Priority Scheduling",
        "Direct Messaging Support"
      ],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section - Light Theme */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 text-yellow-700 rounded-full font-medium border border-yellow-500/40 mb-8 animate-fade-in-down">
                💰 Choose Your Learning Journey
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                Pricing
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 animate-fade-in-up animation-delay-400">
                Flexible plans designed to match your learning goals and budget. From trial sessions to comprehensive academic support.
              </p>

              {/* Key Benefits Preview */}
              <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                  <Calendar className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-gray-600">Book sessions that fit your schedule</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
                  <p className="text-sm text-gray-600">Monitor your academic improvement</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                  <MessageSquare className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Support</h3>
                  <p className="text-sm text-gray-600">Get help from qualified tutors</p>
                </div>
              </div>
            </div>

            {/* Right Content - Consultation Section */}
            <div className="relative animate-fade-in-right animation-delay-400">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Need help choosing the right plan?
                  </h3>
                  <p className="text-gray-700 mb-8 text-lg">
                    Schedule a free 15-minute consultation — we'll help you find the best fit for your goals.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                    Book Free Session
                  </button>
                  
                  <button className="w-full bg-gray-100 backdrop-blur-sm text-gray-800 px-6 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Contact Us
                  </button>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span className="font-semibold text-sm">Free Consultation</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-8 left-4 w-16 h-16 bg-orange-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Plans Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div 
                    key={plan.name}
                    className={`relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 transition-all duration-500 shadow-lg animate-scale-in flex flex-col h-full group cursor-pointer
                      hover:scale-105 hover:shadow-2xl hover:bg-white hover:-translate-y-2
                      active:scale-105 active:shadow-2xl active:bg-white active:-translate-y-2
                      ${plan.color === 'yellow' ? 'hover:border-yellow-400 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 active:border-yellow-400 active:bg-gradient-to-br active:from-yellow-50 active:to-orange-50' :
                        plan.color === 'purple' ? 'hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 active:border-purple-400 active:bg-gradient-to-br active:from-purple-50 active:to-pink-50' : 
                        'hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 active:border-blue-400 active:bg-gradient-to-br active:from-blue-50 active:to-cyan-50'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >

                    
                    <div className="p-8 flex flex-col h-full">
                      <div className="text-center mb-8">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110 group-active:rotate-3 ${
                          plan.color === 'yellow' ? 'bg-yellow-500/20 group-hover:bg-yellow-500/30 group-active:bg-yellow-500/30' :
                          plan.color === 'purple' ? 'bg-purple-500/20 group-hover:bg-purple-500/30 group-active:bg-purple-500/30' : 'bg-blue-500/20 group-hover:bg-blue-500/30 group-active:bg-blue-500/30'
                        }`}>
                          <Icon className={`w-8 h-8 transition-all duration-300 ${
                            plan.color === 'yellow' ? 'text-yellow-600 group-hover:text-yellow-700 group-active:text-yellow-700' :
                            plan.color === 'purple' ? 'text-purple-600 group-hover:text-purple-700 group-active:text-purple-700' : 'text-blue-600 group-hover:text-blue-700 group-active:text-blue-700'
                          }`} />
                        </div>
                        <h3 className="text-gray-800 mb-2 font-bold group-hover:text-gray-900 transition-colors duration-300">{plan.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{plan.description}</p>
                        <div className="mb-6">
                          <span className={`text-4xl font-bold transition-colors duration-300 ${
                            plan.color === 'yellow' ? 'text-gray-800 group-hover:text-yellow-700' :
                            plan.color === 'purple' ? 'text-gray-800 group-hover:text-purple-700' : 'text-gray-800 group-hover:text-blue-700'
                          }`}>{plan.price}</span>
                          <span className="text-gray-600 ml-2 group-hover:text-gray-700 transition-colors duration-300">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.color === 'yellow' ? 'bg-yellow-500/20' :
                              plan.color === 'purple' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                            }`}>
                              <Check className={`w-3 h-3 ${
                                plan.color === 'yellow' ? 'text-yellow-600' :
                                plan.color === 'purple' ? 'text-purple-600' : 'text-blue-600'
                              }`} />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-3 rounded-lg font-medium transform transition-all duration-300 shadow-lg text-center mt-auto group-hover:scale-105 group-hover:shadow-xl ${
                        plan.color === 'yellow' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-slate-900' :
                        plan.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white' :
                        'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white'
                      }`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Group/Corporate Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-orange-500/5"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-yellow-500/30 p-12 shadow-xl animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">
                💼 Group or Corporate Packages
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Looking for team or group sessions? We also offer customized packages for schools, companies, or learning groups.
              </p>
              
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-6 mb-8">
                <p className="text-yellow-300 font-medium">
                  👉 Contact us for a custom quote.
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-3 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}