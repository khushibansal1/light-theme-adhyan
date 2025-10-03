import { useState } from 'react';
import { Star, Quote, TrendingUp, Upload, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface Testimonial {
  name: string;
  grade: string;
  subject: string;
  rating: number;
  text: string;
  improvement: string;
  avatar: string;
  image?: string;
  email?: string;
}

export default function TestimonialsPage() {
  const initialTestimonials: Testimonial[] = [
    {
      name: "Emma van der Berg",
      grade: "IB Diploma Program",
      subject: "Mathematics HL",
      rating: 5,
      text: "AdhyanX Guidance transformed my understanding of calculus. I went from struggling with derivatives to confidently solving complex integration problems. My IB Math HL score improved from a 4 to a 7!",
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
      text: "The exam preparation strategies were invaluable. My tutor helped me understand exactly what the IB examiners were looking for. Couldn't have done it without AdhyanX Guidance!",
      improvement: "Predicted 5 → Achieved 7",
      avatar: "D"
    }
  ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    grade: '',
    subject: '',
    text: '',
    improvement: '',
    rating: 0
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageFile(result);
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.text || formData.rating === 0) {
      alert('Please fill in all required fields and provide a rating');
      return;
    }

    const newTestimonial: Testimonial = {
      name: formData.name,
      grade: formData.grade || 'Student',
      subject: formData.subject || 'General',
      rating: formData.rating,
      text: formData.text,
      improvement: formData.improvement || 'New Student',
      avatar: formData.name.charAt(0).toUpperCase(),
      image: imageFile || undefined,
      email: formData.email
    };

    setTestimonials([newTestimonial, ...testimonials]);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      grade: '',
      subject: '',
      text: '',
      improvement: '',
      rating: 0
    });
    setImageFile(null);
    setImagePreview(null);
  };

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

      {/* Submit Testimonial Form - Dark Theme */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-white mb-4">Share Your Experience</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Help other students by sharing your success story with AdhyanX Guidance.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-xl border border-yellow-500/30 animate-fade-in-up animation-delay-200">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Name <span className="text-yellow-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email <span className="text-yellow-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Grade Field */}
                <div>
                  <Label htmlFor="grade" className="text-white mb-2 block">
                    Grade/Program
                  </Label>
                  <Input
                    id="grade"
                    type="text"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    placeholder="e.g., IB Diploma, VWO 5"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    placeholder="e.g., Mathematics, Physics"
                  />
                </div>
              </div>

              {/* Improvement Field */}
              <div className="mb-6">
                <Label htmlFor="improvement" className="text-white mb-2 block">
                  Improvement/Achievement
                </Label>
                <Input
                  id="improvement"
                  type="text"
                  value={formData.improvement}
                  onChange={(e) => setFormData({ ...formData, improvement: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                  placeholder="e.g., Grade 4 → Grade 7"
                />
              </div>

              {/* Rating Field */}
              <div className="mb-6">
                <Label className="text-white mb-2 block">
                  Rating <span className="text-yellow-500">*</span>
                </Label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoverRating || formData.rating)
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-6">
                <Label htmlFor="text" className="text-white mb-2 block">
                  Your Testimonial <span className="text-yellow-500">*</span>
                </Label>
                <Textarea
                  id="text"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Share your experience with AdhyanX Guidance..."
                  required
                />
              </div>

              {/* Image Upload */}
              <div className="mb-8">
                <Label className="text-white mb-2 block">
                  Profile Picture (Optional)
                </Label>
                
                {!imagePreview ? (
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="flex items-center justify-center gap-2 bg-slate-700/50 border-2 border-dashed border-slate-600 rounded-lg p-6 cursor-pointer hover:border-yellow-500/50 transition-colors"
                    >
                      <Upload className="w-6 h-6 text-gray-400" />
                      <span className="text-gray-400">Click to upload an image</span>
                    </label>
                  </div>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-lg font-medium hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Testimonial
              </button>
            </form>
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
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                    )}
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