import { useState } from 'react';
import { Star, Upload, X, Trash2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface Testimonial {
  id: string;
  name: string;
  role: 'student' | 'teacher';
  rating: number;
  text: string;
  avatar: string;
  image?: string;
  email?: string;
}

export default function TestimonialsPage() {

  const initialTestimonials: Testimonial[] = [
    {
      id: "1",
      name: "Emma van der Berg",
      role: "student",
      rating: 5,
      text: "AdhyanX Guidance transformed my understanding of calculus. I went from struggling with derivatives to confidently solving complex integration problems. My IB Math HL score improved dramatically!",
      avatar: "E"
    },
    {
      id: "2",
      name: "Luca Rossi",
      role: "student",
      rating: 5,
      text: "The personalized approach really made the difference. My tutor didn't just teach formulas - they helped me understand the concepts behind them. Physics became my strongest subject!",
      avatar: "L"
    },
    {
      id: "3",
      name: "Sophia Ahmed",
      role: "student",
      rating: 5,
      text: "I was completely lost in organic chemistry. The tailored learning plan broke everything down into manageable steps. Now I'm considering chemistry in university!",
      avatar: "S"
    },
    {
      id: "4",
      name: "Max Jansen",
      role: "student",
      rating: 5,
      text: "Having support in multiple subjects was game-changing. The integrated approach helped me see connections between math and physics that I never noticed before.",
      avatar: "M"
    },
    {
      id: "5",
      name: "Lisa Thompson",
      role: "teacher",
      rating: 4,
      text: "Good tutoring experience. The sessions were helpful and I saw improvement in my understanding of the subjects. The structured approach really worked for me.",
      avatar: "L"
    },
    {
      id: "6",
      name: "David Chen",
      role: "student",
      rating: 4,
      text: "Very satisfied with the tutoring quality. The approach was systematic and helped me build confidence in tackling difficult problems.",
      avatar: "D"
    }
  ];

  // Sort testimonials by rating (highest first)
  const sortedTestimonials = [...initialTestimonials].sort((a, b) => b.rating - a.rating);

  const [testimonials, setTestimonials] = useState<Testimonial[]>(sortedTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    text: '',
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
    
    if (!formData.name || !formData.email || !formData.role || !formData.text || formData.rating === 0) {
      alert('Please fill in all required fields and provide a rating');
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: formData.name,
      role: formData.role as 'student' | 'teacher',
      rating: formData.rating,
      text: formData.text,
      avatar: formData.name.charAt(0).toUpperCase(),
      image: imageFile || undefined,
      email: formData.email
    };

    // Add new testimonial and re-sort by rating
    const updatedTestimonials = [newTestimonial, ...testimonials].sort((a, b) => b.rating - a.rating);
    setTestimonials(updatedTestimonials);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      text: '',
      rating: 0
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with form */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-12 lg:py-20 px-6 overflow-hidden relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-fade-in-down animation-delay-200"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-fade-in-down animation-delay-600"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-xl animate-fade-in-up animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left Content */}
            <div className="relative">
              <div className="animate-fade-in-left">
                <div className="text-center lg:text-left mb-8">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Real Success Stories from Our
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Community</span>
                  </h1>
                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    Discover how AdhyanX Guidance has transformed students' academic journeys with personalized tutoring in Mathematics, Physics, and Chemistry.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">10+</div>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                    <p className="text-sm text-gray-600">Students Helped</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                    <p className="text-sm text-gray-600">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Testimonial Form */}
            <div className="relative animate-fade-in-right animation-delay-400 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-yellow-500/30 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Share Your Success Story
                  </h3>
                  <p className="text-gray-700 text-base">
                    Help inspire other students by sharing your experience with AdhyanX Guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="text-gray-700 mb-2 block">
                      Name <span className="text-yellow-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 mb-2 block">
                      Email <span className="text-yellow-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Role Field */}
                  <div>
                    <Label htmlFor="role" className="text-gray-700 mb-2 block">
                      Role <span className="text-yellow-500">*</span>
                    </Label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-yellow-500">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="teacher">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Testimonial Text */}
                  <div>
                    <Label htmlFor="text" className="text-gray-700 mb-2 block">
                      Your Testimonial <span className="text-yellow-500">*</span>
                    </Label>
                    <Textarea
                      id="text"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 min-h-[80px]"
                      placeholder="Share your experience..."
                      required
                    />
                  </div>

                  {/* Rating Field */}
                  <div>
                    <Label className="text-gray-700 mb-2 block">
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
                          className="p-1 rounded-lg hover:bg-yellow-50 transition-colors"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoverRating || formData.rating)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <Label className="text-gray-700 mb-2 block">
                      Profile Picture
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
                          className="flex items-center justify-center gap-2 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-yellow-500/50 transition-colors"
                        >
                          <Upload className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-500 text-sm">Click to upload</span>
                        </label>
                      </div>
                    ) : (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
                        />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium py-3 px-6 rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Share Your Story
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-8 md:px-16 xl:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-medium">Student Success Stories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              Transforming Academic
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Journeys</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Every student's journey is unique. Here are some of the incredible transformations we've been privileged to be part of.
            </p>
          </div>

          {/* Grid Layout - 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
            {testimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:shadow-yellow-500/30 hover:shadow-2xl hover:border-yellow-500/50 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col group relative"
              >
                
                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                  title="Delete testimonial"
                >
                  <Trash2 className="w-4 h-4 text-red-400 hover:text-white transition-colors duration-300" />
                </button>

                {/* Profile Picture */}
                <div className="flex justify-center mb-6">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-3 border-yellow-500 group-hover:border-yellow-400 group-hover:scale-110 transition-all duration-300"
                    />
                  ) : (
                    <Avatar className="w-20 h-20 group-hover:scale-110 transition-transform duration-300">
                      <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-2xl group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-2">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gray-400 capitalize bg-slate-700 px-3 py-1 rounded-full">
                    {testimonial.role}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300 text-center">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Start Your
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent"> Success Story?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Join hundreds of students who have transformed their academic performance with personalized tutoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium py-4 px-8 rounded-lg hover:from-yellow-600 hover:to-orange-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book a Free Consultation
              </button>
              <button className="border-2 border-yellow-500 text-yellow-600 font-medium py-4 px-8 rounded-lg hover:bg-yellow-50 transition-all duration-300">
                View Pricing Plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}