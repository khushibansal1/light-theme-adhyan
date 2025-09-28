import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent animate-fade-in-down text-5xl font-bold">
              Get In Touch
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Ready to start your academic journey? We're here to help you achieve your goals. Reach out today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  <h2 className="text-white mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Whether you're looking for help with Math, Physics, or Chemistry, or you have questions about our tutoring approach, we'd love to hear from you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 animate-scale-in animation-delay-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">Email Us</h4>
                        <p className="text-gray-300">info@adhyanguidance.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 animate-scale-in animation-delay-400">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">Call Us</h4>
                        <p className="text-gray-300">+31 (0) 123 456 789</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300 animate-scale-in animation-delay-600">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">Location</h4>
                        <p className="text-gray-300">Netherlands & Online</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 animate-scale-in animation-delay-800">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">Availability</h4>
                        <p className="text-gray-300">Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Consultation CTA */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 animate-fade-in-up animation-delay-1000">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-white">Free 15-Minute Consultation</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Not sure if we're the right fit? Book a free consultation to discuss your needs and goals.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Book Free Session
                  </button>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-right">
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/30">
                  <h3 className="text-white mb-6">Send us a message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="math">Mathematics Tutoring</option>
                        <option value="physics">Physics Tutoring</option>
                        <option value="chemistry">Chemistry Tutoring</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="scheduling">Scheduling</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <textarea 
                        rows={5}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your academic goals and how we can help..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}