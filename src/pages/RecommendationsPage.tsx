import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin } from 'lucide-react';

export const RecommendationsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recommendations = [
    {
      name: 'Sadia Gondal',
      title: 'A/Prof. UET | Global Communications Consultant | UN SDG Expert | Advisor Harvard Business Review USA | SFHEA UK',
      date: 'March 6, 2024',
      content: 'Qalab-e-Abbas is a phenomenal trainer and trail-blazer in education industry. His trainings are packed with practical applications and are a testament to his success story. His acumen for details and solutions is something that I admire the most. Highly recommended Coach and Trainer if you are looking for go-getter approach.',
      connection: '2nd degree connection'
    },
    {
      name: 'Rabia Shahzad',
      title: 'PhD Candidate | Culture & Communication Specialist | Brand & Growth Strategist',
      date: 'September 27, 2023',
      content: 'I have had the privilege of working closely with Mr. Qalab e Abbas, who serves as the Incharge of Academia at the University of South. His visionary leadership and unwavering dedication to advancing academic excellence have been truly remarkable. Mr. Qalab\'s innovative strategies in curriculum development and his emphasis on practical application have significantly enriched the learning experience for both students and faculty members alike. Under his guidance, the Academia of Management Sciences has achieved notable milestones, showcasing his exceptional leadership acumen. I highly recommend Mr. Qalab e Abbas for his outstanding leadership as the Incharge of Academia at the University of South. His innovative approach and dedication to elevating academic standards are commendable.',
      connection: '2nd degree connection'
    },
    {
      name: 'Tabina Sirhindi',
      title: 'Senior Lecturer Media & Communication | Curriculum Development & Design',
      date: 'September 21, 2022',
      content: 'It was a pleasure to work with Mr. Qalab as part of the QEC team at University of South Asia. He came across as a very cooperative and understanding team member. He extended his support for all tasks and came up with a number of innovative ideas to streamline the operations of the Quality Enhancement Cell. I wish him the best for all future endeavors.',
      connection: '2nd degree connection'
    },
    {
      name: 'Maria Shaffi',
      title: 'Assistant Professor, University of South Asia',
      date: 'September 10, 2021',
      content: 'I know Qalab-e-Abbas for the last five years and it has been a very pleasant experience working with him. He is an ambitious, fast paced individual having strong leadership skills. I believe he is a thorough professional who can add value to any task in which he is a part of. I foresee his future bright and successful.',
      connection: '2nd degree connection'
    },
    {
      name: 'Muhammad Hashim',
      title: 'HCPC Registered Physiotherapist | CEO Physiogic | Educator & Global Speaker',
      date: 'July 28, 2017',
      content: 'Mr Qalab has a versatile personality having an amalgamation of good character, mentoring, role model, nice dressing, excellent teaching skills, team leadership skills, quality management, business sense and charming smile. I enjoy while sitting next to his cabin and his company. I have found him a valuable colleague.',
      connection: '2nd degree connection'
    },
    {
      name: 'Usman Ghani',
      title: 'Driving Growth at Bidalchemist | B2B Sales & Marketing Leader',
      date: 'January 17, 2017',
      content: 'Qalab is one of the Great teacher, I\'ve learned from. Really sharp Humor of Sense, Doing amazingly well, and got the guts to direct anyone. really charming personality. Guy with updated knowledge series. I can not wish anything, He is already doing Great there, I am certain that Qalab is going to continue to do great and creative things in his future. He is talented, caring, intuitive, dedicated, and focused in her pursuits, Qalab is truly a stand-out individual who can impress everyone He meets.',
      connection: '2nd degree connection'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Recommendations</h1>
          <p className="text-xl text-gray-600">What colleagues and peers say about working with Qalab-e-Abbas</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 p-6 rounded-xl">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{recommendations.length}</h3>
              <p className="text-gray-600">LinkedIn Recommendations</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-6 rounded-xl">
              <Linkedin className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">11,121</h3>
              <p className="text-gray-600">LinkedIn Followers</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 p-6 rounded-xl">
              <Quote className="h-12 w-12 text-amber-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-gray-600">Positive Reviews</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 min-h-[400px]">
            <div className="flex flex-col h-full">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-blue-200 mb-6" />
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  "{recommendations[currentSlide].content}"
                </p>
              </div>
              
              {/* Author Info */}
              <div className="border-t pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {recommendations[currentSlide].name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-2 leading-relaxed">
                      {recommendations[currentSlide].title}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{recommendations[currentSlide].date}</span>
                      <span>•</span>
                      <span>{recommendations[currentSlide].connection}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <Linkedin className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Previous recommendation"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Next recommendation"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Key Themes */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Themes from Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h3 className="font-semibold text-blue-900">Leadership Excellence</h3>
              </div>
              <p className="text-sm text-gray-600">Visionary leadership and exceptional management skills</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h3 className="font-semibold text-green-900">Innovation & Strategy</h3>
              </div>
              <p className="text-sm text-gray-600">Innovative approaches to curriculum and training development</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h3 className="font-semibold text-purple-900">Team Collaboration</h3>
              </div>
              <p className="text-sm text-gray-600">Cooperative and understanding team member</p>
            </div>
            <div className="text-center">
              <div className="bg-white p-4 rounded-lg shadow-md mb-3">
                <h3 className="font-semibold text-amber-900">Professional Growth</h3>
              </div>
              <p className="text-sm text-gray-600">Dedicated to continuous improvement and excellence</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Excellence?</h2>
          <p className="text-lg text-gray-600 mb-8">Join the many professionals who have benefited from working with Qalab-e-Abbas</p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};