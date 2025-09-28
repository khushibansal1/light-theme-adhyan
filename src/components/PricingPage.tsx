import { Check, Star, Users, Target, Crown } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Standard",
      icon: Users,
      price: "€35",
      period: "per session",
      description: "Perfect for casual learners or one-time help",
      features: [
        "60-minute sessions",
        "General curriculum coverage",
        "Basic progress tracking",
        "Online or in-person options",
        "Email support"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Customized",
      icon: Target,
      price: "€45",
      period: "per session",
      description: "Ideal for students seeking consistent progress",
      features: [
        "60-minute sessions",
        "Personalized lesson plans",
        "Regular progress tracking",
        "Study materials included",
        "Priority scheduling",
        "Parent progress reports",
        "WhatsApp support"
      ],
      popular: true,
      color: "yellow"
    },
    {
      name: "Fully Tailored",
      icon: Crown,
      price: "€60",
      period: "per session",
      description: "For dedicated learners with specific goals",
      features: [
        "60-minute sessions",
        "Comprehensive assessment",
        "Fully customized curriculum",
        "Continuous plan adaptation",
        "Detailed progress analytics",
        "Weekly parent consultations",
        "24/7 academic support",
        "Exam preparation strategies",
        "Study schedule planning"
      ],
      popular: false,
      color: "purple"
    }
  ];

  const packages = [
    {
      sessions: 4,
      discount: 5,
      savings: "€7-12"
    },
    {
      sessions: 8,
      discount: 10,
      savings: "€14-48"
    },
    {
      sessions: 12,
      discount: 15,
      savings: "€32-108"
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
              Flexible Pricing Plans
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Choose the perfect plan for your learning journey. From casual sessions to comprehensive academic support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
                    className={`relative bg-slate-800/80 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-105 animate-scale-in ${
                      plan.popular 
                        ? 'border-yellow-500/50 ring-2 ring-yellow-500/20' 
                        : 'border-slate-600/50 hover:border-yellow-500/30'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                          plan.color === 'yellow' ? 'bg-yellow-500/20' :
                          plan.color === 'purple' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                        }`}>
                          <Icon className={`w-8 h-8 ${
                            plan.color === 'yellow' ? 'text-yellow-400' :
                            plan.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
                          }`} />
                        </div>
                        <h3 className="text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                        <div className="mb-6">
                          <span className="text-white text-4xl">{plan.price}</span>
                          <span className="text-gray-400 ml-2">{plan.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.color === 'yellow' ? 'bg-yellow-500/20' :
                              plan.color === 'purple' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                            }`}>
                              <Check className={`w-3 h-3 ${
                                plan.color === 'yellow' ? 'text-yellow-400' :
                                plan.color === 'purple' ? 'text-purple-400' : 'text-blue-400'
                              }`} />
                            </div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 shadow-lg'
                          : 'border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white'
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

      {/* Package Deals - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="mb-4 text-gray-800">Package Deals & Savings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Save more with our session packages. The more sessions you book, the more you save!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.sessions}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl">{pkg.sessions}</span>
                    </div>
                    <h3 className="text-gray-800 mb-2">{pkg.sessions} Sessions</h3>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">{pkg.discount}% OFF</div>
                    <p className="text-gray-600 mb-4">Save {pkg.savings}</p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        Perfect for {pkg.sessions === 4 ? 'monthly' : pkg.sessions === 8 ? 'bi-monthly' : 'semester'} planning
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation CTA - Dark Theme */}
      <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h3 className="text-white mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-gray-300 mb-8">
              Book a free 15-minute consultation to discuss your goals and find the perfect learning plan.
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