import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Star, BookOpen } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Light Theme */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 text-yellow-700 rounded-full border border-yellow-500/40 mb-8 animate-fade-in-down">
              📧 Get In Touch
            </div>
            
            {/* Main Heading */}
            <h1 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
              Contact Us
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
              Ready to start your academic journey? We&apos;re here to help you achieve your goals. Reach out today for a free consultation.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-lg mx-auto mb-3">
                  <Users className="w-7 h-7 text-yellow-600" />
                </div>
                <div className="text-gray-800 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Students Helped</div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-lg mx-auto mb-3">
                  <Star className="w-7 h-7 text-yellow-600" />
                </div>
                <div className="text-gray-800 mb-1">4.9/5</div>
                <div className="text-gray-600 text-sm">Student Rating</div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-yellow-500/20 rounded-lg mx-auto mb-3">
                  <BookOpen className="w-7 h-7 text-yellow-600" />
                </div>
                <div className="text-gray-800 mb-1">10+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column - Contact Information */}
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  <h2 className="text-white mb-6">
                    Let&apos;s Connect
                  </h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Whether you&apos;re looking for help with Math, Physics, or Chemistry, or you have questions about our tutoring approach, we&apos;d love to hear from you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                        <Mail className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Email Us</h4>
                        <a href="mailto:info@adhyanxguidance.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                          info@adhyanxguidance.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-400">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Call Us</h4>
                        <a href="tel:+31123456789" className="text-gray-300 hover:text-blue-400 transition-colors">
                          +31 (0) 123 456 789
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-600">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Location</h4>
                        <p className="text-gray-300">Netherlands & Online</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-800">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                        <Clock className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-white mb-2">Availability</h4>
                        <p className="text-gray-300">Mon-Fri: 9AM-8PM</p>
                        <p className="text-gray-300">Sat-Sun: 10AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Consultation CTA */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 animate-fade-in-up animation-delay-1000">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-yellow-400" />
                    <h4 className="text-white">Free 15-Minute Consultation</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Not sure if we&apos;re the right fit? Book a free consultation to discuss your needs and goals.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Book Free Session
                  </button>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="animate-fade-in-right">
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/30">
                  <h3 className="text-white mb-6">Send us a message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="+31 (0) 123 456 789"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Subject *</label>
                      <select 
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="math">Mathematics Tutoring</option>
                        <option value="physics">Physics Tutoring</option>
                        <option value="chemistry">Chemistry Tutoring</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="consultation">Free Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Message *</label>
                      <textarea 
                        rows={5}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your academic goals and how we can help..."
                      ></textarea>
                    </div>

                    {/* Data Storage Notice */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-yellow-200 text-sm">
                        <strong>Note:</strong> Form submissions are currently stored locally in your browser. To reach us directly, please email <span className="font-medium text-yellow-100">info@adhyanxguidance.com</span> or call <span className="font-medium text-yellow-100">+31 (0) 123 456 789</span>.
                      </p>
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