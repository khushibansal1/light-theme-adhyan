import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Star, BookOpen, Download, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  planType: string;
  message: string;
  timestamp: string;
}

interface ContactPageProps {
  selectedPlan?: string;
}

export default function ContactPage({ selectedPlan }: ContactPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    planType: selectedPlan || '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('contact-submissions');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load submissions:', error);
      }
    }
  }, []);

  // Set plan type when selectedPlan prop changes
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, planType: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwCsDmHQraf3VMStJAnBIywuge-NhPFiyDEjK5klmZAoYNYJdMnmdnYnk6LGfcTMDiw/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    toast.success("Message sent successfully!", {
      description: "Your response has been recorded. We'll get back to you soon!",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      planType: selectedPlan || "",
      message: "",
    });

  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to send message", {
      description: "Please try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  const exportToExcel = () => {
    if (submissions.length === 0) return;

    const csvContent = [
      ['Date', 'First Name', 'Last Name', 'Email', 'Phone', 'Plan Type', 'Message'].join(','),
      ...submissions.map(sub => [
        new Date(sub.timestamp).toLocaleDateString(),
        `"${sub.firstName}"`,
        `"${sub.lastName}"`,
        `"${sub.email}"`,
        `"${sub.phone}"`,
        `"${sub.planType}"`,
        `"${sub.message.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast.success('Submissions exported successfully!');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Contact Section - Light Theme */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Left Column - Contact Information */}
              <div className="space-y-8 animate-fade-in-left">
                <div>
                  {/* Badge */}
                  <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 text-yellow-700 rounded-full border border-yellow-500/40 mb-8 animate-fade-in-down">
                    📧 Get In Touch
                  </div>
                  
                  <h2 className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Whether you're looking for help with Math, Physics, or Chemistry, or you have questions about our tutoring approach, we'd love to hear from you.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-200 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                        <Mail className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Email Us</h4>
                        <a href="mailto:info@adhyanxguidance.com" className="text-gray-600 hover:text-yellow-600 transition-colors">
                          info@adhyanxguidance.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-400 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Call Us</h4>
                        <a href="tel:+31123456789" className="text-gray-600 hover:text-blue-600 transition-colors">
                          +31 (0) 123 456 789
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-600 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Location</h4>
                        <p className="text-gray-600">Netherlands & Online</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer animate-scale-in animation-delay-800 shadow-lg hover:shadow-xl">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 mb-2">Availability</h4>
                        <p className="text-gray-600">Mon-Fri: 9AM-8PM</p>
                        <p className="text-gray-600">Sat-Sun: 10AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Free Consultation CTA */}
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 animate-fade-in-up animation-delay-1000 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                    <h4 className="text-gray-800">Free 15-Minute Consultation</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Not sure if we're the right fit? Book a free consultation to discuss your needs and goals.
                  </p>
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Book Free Session
                  </button>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="animate-fade-in-right">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/30 shadow-xl">
                  <h3 className="text-gray-800 mb-6">Send us a message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name *</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name *</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                        placeholder="+31 (0) 123 456 789"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Plan Type *</label>
                      <select 
                        name="planType"
                        value={formData.planType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      >
                        <option value="">Select a plan</option>
                        <option value="starter">Starter Plan</option>
                        <option value="growth">Growth Plan</option>
                        <option value="elite">Elite Plan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Message *</label>
                      <textarea 
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell us about your academic goals and how we can help..."
                      ></textarea>
                    </div>

                    {/* Data Storage Notice */}
                    <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-yellow-800 text-sm">
                            <strong>Submissions Stored:</strong> Your form data is securely stored locally and can be exported to Excel/CSV format. {submissions.length > 0 && `Currently ${submissions.length} submission${submissions.length === 1 ? '' : 's'} saved.`}
                          </p>
                          <p className="text-yellow-700 text-sm mt-2">
                            For immediate assistance: <span className="font-medium text-yellow-900">info@adhyanxguidance.com</span> or <span className="font-medium text-yellow-900">+31 (0) 123 456 789</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>

                      {submissions.length > 0 && (
                        <button 
                          type="button"
                          onClick={exportToExcel}
                          className="w-full px-8 py-3 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-200 hover:text-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          <Download className="w-5 h-5" />
                          Export {submissions.length} Submissions to CSV
                        </button>
                      )}
                    </div>
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