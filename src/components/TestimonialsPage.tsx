import { useState, useEffect } from 'react';
import { Star, Quote, Upload, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from './ui/carousel';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  avatar: string;
  image?: string;
  email?: string;
}

export default function TestimonialsPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const initialTestimonials: Testimonial[] = [
    {
      name: "Emma van der Berg",
      rating: 5,
      text: "AdhyanX Guidance transformed my understanding of calculus. I went from struggling with derivatives to confidently solving complex integration problems. My IB Math HL score improved dramatically!",
      avatar: "E"
    },
    {
      name: "Luca Rossi",
      rating: 5,
      text: "The personalized approach really made the difference. My tutor didn't just teach formulas - they helped me understand the concepts behind them. Physics became my strongest subject!",
      avatar: "L"
    },
    {
      name: "Sophia Ahmed",
      rating: 5,
      text: "I was completely lost in organic chemistry. The tailored learning plan broke everything down into manageable steps. Now I'm considering chemistry in university!",
      avatar: "S"
    },
    {
      name: "Max Jansen",
      rating: 5,
      text: "Having support in multiple subjects was game-changing. The integrated approach helped me see connections between math and physics that I never noticed before.",
      avatar: "M"
    },
    {
      name: "Lisa Thompson",
      rating: 4,
      text: "Good tutoring experience. The sessions were helpful and I saw improvement in my understanding of the subjects. The structured approach really worked for me.",
      avatar: "L"
    },
    {
      name: "David Chen",
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
    
    if (!formData.name || !formData.email || !formData.text || formData.rating === 0) {
      alert('Please fill in all required fields and provide a rating');
      return;
    }

    const newTestimonial: Testimonial = {
      name: formData.name,
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
      text: '',
      rating: 0
    });
    setImageFile(null);
    setImagePreview(null);
  };

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
                ⭐ Student Success Stories
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                Real Results, Real Students
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-400">
                See how personalized tutoring has transformed academic journeys across the Netherlands. Every success story inspires the next.
              </p>

              {/* Key Statistics */}
              <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">98%</div>
                  <p className="text-sm text-gray-600">Student Satisfaction</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2.5+</div>
                  <p className="text-sm text-gray-600">Average Grade Improvement</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20 shadow-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
                  <p className="text-sm text-gray-600">Success Stories</p>
                </div>
              </div>
            </div>

            {/* Right Content - Testimonial Form */}
            <div className="relative animate-fade-in-right animation-delay-400">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Share Your Success Story
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Help inspire other students by sharing your experience with AdhyanX Guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {/* Testimonial Text */}
                  <div>
                    <Label htmlFor="text" className="text-gray-700 mb-2 block">
                      Your Testimonial <span className="text-yellow-500">*</span>
                    </Label>
                    <Textarea
                      id="text"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-yellow-500 min-h-[100px]"
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
                          className="transition-transform hover:scale-110"
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
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-6 py-3 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Share Your Story
                  </button>
                </form>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center space-x-2">
                  <Quote className="h-4 w-4" />
                  <span className="font-semibold text-sm">Share & Inspire</span>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl"></div>
              <div className="absolute -top-8 left-4 w-16 h-16 bg-orange-500/10 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Light Theme */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full shadow-lg">
                  <h2 className="text-white mb-0 font-semibold">What Our Students Say</h2>
                </div>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every student&apos;s journey is unique. Here are some of the incredible transformations we&apos;ve been privileged to be part of.
              </p>
            </div>

            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full animate-fade-in-up animation-delay-400"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.slice(0, 6).map((testimonial, index) => (
                  <CarouselItem key={`${testimonial.name}-${index}`} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 hover:shadow-yellow-500/30 hover:shadow-2xl hover:border-yellow-500/50 hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-800 transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col group cursor-pointer">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <Quote className="w-8 h-8 text-yellow-500 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                      </div>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>

                      {/* Testimonial Text - This will take up remaining space */}
                      <div className="flex-grow mb-6">
                        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          "{testimonial.text}"
                        </p>
                      </div>

                      {/* Student Info - This will always be at the bottom */}
                      <div className="flex items-center gap-4 pt-6 border-t border-slate-600 group-hover:border-yellow-500/40 transition-colors duration-300 mt-auto">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500 group-hover:border-yellow-400 group-hover:scale-110 transition-all duration-300"
                          />
                        ) : (
                          <Avatar className="w-12 h-12 group-hover:scale-110 transition-transform duration-300">
                            <AvatarFallback className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white group-hover:from-yellow-400 group-hover:to-orange-400 transition-all duration-300">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div className="text-white font-medium group-hover:text-yellow-100 transition-colors duration-300">{testimonial.name}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/90 border-yellow-500/30 text-slate-800 hover:bg-yellow-50" />
              <CarouselNext className="bg-white/90 border-yellow-500/30 text-slate-800 hover:bg-yellow-50" />
            </Carousel>

            {/* Carousel Dots - 4 dots for 6 cards with 3 visible at a time */}
            <div className="flex justify-center gap-2 mt-8 animate-fade-in-up animation-delay-600">
              {Array.from({ length: 4 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === current - 1
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to position ${index + 1}`}
                />
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