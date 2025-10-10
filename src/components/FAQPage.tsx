import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqSections = [
    {
      title: "💡 General Questions",
      icon: "💡",
      questions: [
        {
          id: "general-1",
          question: "What type of students do you work with?",
          answer: "We specialize in supporting high school students from Dutch national and International Baccalaureate (IB) educational systems"
        },
        {
          id: "general-2", 
          question: "What subjects or areas do you cover?",
          answer: "Our sessions cover core academic subjects for Maths, Physics and Chemistry."
        },
        {
          id: "general-3",
          question: "Are sessions conducted online or in person?",
          answer: "We offer online as well as in person sessions. We leave this choice up to the student&apos;s choice"
        }
      ]
    },
    {
      title: "Session & Plan Details",
      icon: "🧑‍🏫",
      questions: [
        {
          id: "session-1",
          question: "What&apos;s the difference between Standard, Customized, and Fully Tailored learning plans?",
          answer: `**Standard:** A general plan based on common learning paths or grade-level expectations. Not specific to individual strengths or goals. Best for casual learners or one-time sessions.

**Customized:** Adjusted to fit the learner&apos;s current level and goals based on a brief needs assessment. Best for learners seeking progress over time.

**Fully Tailored:** Deeply personalized curriculum created from scratch based on comprehensive assessment, goals, and learning style. Adapted continuously. Best for dedicated learners with long-term goals or unique needs.`
        },
        {
          id: "session-2",
          question: "How long is each session?",
          answer: "Each session lasts 60 minutes, including instruction, practice, and Q&A."
        },
        {
          id: "session-3",
          question: "How do you track progress?",
          answer: "Progress tracking is included in Customized and Fully Tailored plans. You&apos;ll receive regular updates, milestone check-ins, and reports to monitor growth and outcomes."
        }
      ]
    },
    {
      title: "💳 Payments & Scheduling",
      icon: "💳",
      questions: [
        {
          id: "payment-1",
          question: "How do I book a session?",
          answer: "You can book a session directly through our website booking page or contact us for help with scheduling."
        },
        {
          id: "payment-2",
          question: "Do you offer packages or monthly plans?",
          answer: "Yes! We offer flexible pricing — from pay-per-session to discounted monthly packages. See our Pricing section for full details."
        },
        {
          id: "payment-3",
          question: "What if I need to cancel or reschedule?",
          answer: "We understand that things come up! You can reschedule up to 24 hours in advance at no cost. Cancellations made less than 24 hours before the session may incur a fee."
        },
        {
          id: "payment-4",
          question: "Do you offer free consultations?",
          answer: "Yes! New clients can book a free 15-minute consultation to discuss their needs and see if we&apos;re a good fit."
        }
      ]
    },
    {
      title: "👨‍👩‍👧 For Parents",
      icon: "👨‍👩‍👧",
      questions: [
        {
          id: "parents-1",
          question: "Will I receive updates about my child&apos;s progress?",
          answer: "Yes — especially in Customized and Fully Tailored plans. We provide regular feedback, progress summaries, and are available for check-ins when needed."
        }
      ]
    },
    {
      title: "🛠 Technical & Support",
      icon: "🛠",
      questions: [
        {
          id: "tech-1",
          question: "What platform do you use for online sessions?",
          answer: "We use Zoom for online sessions."
        },
        {
          id: "tech-2",
          question: "What if we have technical difficulties during a session?",
          answer: "If any tech issues arise, we&apos;ll work with you to reschedule or extend the session time as needed — your learning experience is our priority."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Light Theme with Media */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl animate-bounce-in animation-delay-1000"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-bounce-in animation-delay-1400"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-yellow-400/15 rounded-full blur-lg animate-bounce-in animation-delay-1800"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-6 animate-fade-in-down">
                <span className="text-2xl">❓</span>
                <span className="font-medium">Got Questions?</span>
              </div>
              
              <h1 className="mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent animate-fade-in-down animation-delay-200 text-5xl font-bold">
                Frequently Asked Questions
              </h1>
              
              <p className="text-gray-600 mb-8 animate-fade-in-up animation-delay-400 text-lg leading-relaxed">
                Find answers to common questions about our tutoring services, session plans, scheduling, and more. We're here to help you succeed!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-600">
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">15+</div>
                  <div className="text-sm text-gray-600">Questions Answered</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">100%</div>
                  <div className="text-sm text-gray-600">Clarity Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative animate-fade-in-right animation-delay-800">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1629360021730-3d258452c425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdHV0b3JpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzU5MDgwNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Students studying together"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-in animation-delay-1200">
                  <span className="text-white text-2xl">❓</span>
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-in animation-delay-1600">
                  <span className="text-white">💡</span>
                </div>

                {/* Question Bubbles */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-fade-in-up animation-delay-1000">
                  <p className="text-sm text-gray-700">"How do I book?"</p>
                </div>

                <div className="absolute bottom-20 right-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg animate-fade-in-up animation-delay-1400">
                  <p className="text-sm text-gray-700">"What subjects?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content - Light Theme */}
      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-400/5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqSections.map((section, sectionIndex) => (
              <div 
                key={section.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${sectionIndex * 200}ms` }}
              >
                <div className="mb-6">
                  <h2 className="text-gray-800 mb-8 flex items-center gap-3">
                    <span className="text-2xl">{section.icon}</span>
                    <span>{section.title}</span>
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {section.questions.map((item, questionIndex) => (
                    <div 
                      key={item.id}
                      className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 hover:border-yellow-300 animate-scale-in"
                      style={{ animationDelay: `${(sectionIndex * 200) + (questionIndex * 100)}ms` }}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-yellow-50/50 transition-colors duration-200"
                      >
                        <span className="text-gray-800 pr-4 font-medium">{item.question}</span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center shadow-sm">
                          {openItems.includes(item.id) ? (
                            <Minus className="w-4 h-4 text-white" />
                          ) : (
                            <Plus className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </button>
                      
                      {openItems.includes(item.id) && (
                        <div className="px-6 pb-6 animate-fade-in-up">
                          <div className="pt-4 border-t border-yellow-200/60">
                            <div 
                              className="text-gray-700 leading-relaxed space-y-3"
                              dangerouslySetInnerHTML={{
                                __html: item.answer
                                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-yellow-600 font-semibold">$1</strong>')
                                  .replace(/\n\n/g, '<br/><br/>')
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h3 className="mb-4 text-gray-800">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Don&apos;t hesitate to reach out! We&apos;re here to help you succeed in your academic journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-2.5 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Book Free Session
              </button>
              <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 rounded-xl hover:bg-yellow-500 hover:text-white transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}