import React from 'react';
import { MapPin, Award, BookOpen } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Qalab-e-Abbas</h1>
          <p className="text-xl text-gray-600">Dedicated Educator & Professional Coach</p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/qalab-e-abbas.jpeg"
              alt="Qalab-e-Abbas"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <div className="bg-blue-50 p-6 rounded-xl mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <MapPin className="h-5 w-5 text-blue-900" />
                <span className="text-gray-700">Lahore District, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-5 w-5 text-blue-900" />
                <span className="text-gray-700">MSc. International Business - University of Dundee, UK</span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-blue-900" />
                <span className="text-gray-700">11+ Years in Higher Education</span>
              </div>
            </div>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-lg text-gray-700">
              "I strongly believe that classroom is a training ground not only in the field of study but many aspects of life."
            </blockquote>
          </div>
        </div>

        {/* Detailed Bio */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Biography</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Mr. Qalab-e-Abbas holds a Master of Science (MSc.) in International Business from the prestigious 
            University of Dundee, Scotland, UK, where he achieved a Merit Degree (2:1). His academic journey 
            also includes dual Master's degrees in Business Administration from the University of Central Punjab, 
            demonstrating his commitment to continuous learning and academic excellence.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            His teaching and research focuses on the interface between international entrepreneurship, innovation, 
            and marketing management within the context of small and medium-size enterprises. This specialized 
            expertise has made him a sought-after educator and consultant in the business community.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            As a dedicated, ambitious, and goal-driven educator with 11 years of progressive experience in higher 
            education institutes, Mr. Qalab-e-Abbas has consistently demonstrated his ability to inspire and 
            develop both students and faculty members. His current role as Incharge of Academics & Faculty 
            Development at the University of South Asia showcases his leadership capabilities and commitment 
            to educational excellence.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Mission & Vision</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Mission</h4>
              <p className="text-gray-700">
                To empower individuals and organizations through innovative educational approaches, 
                practical coaching methodologies, and transformative leadership development programs.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-amber-800 mb-3">Vision</h4>
              <p className="text-gray-700">
                To create a generation of confident leaders and entrepreneurs who can navigate the 
                complexities of the modern business world with integrity and innovation.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-sm text-gray-600">Commitment to the highest standards in education and coaching</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-sm text-gray-600">Embracing new methodologies and technologies in learning</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Integrity</h4>
              <p className="text-sm text-gray-600">Maintaining ethical standards in all professional endeavors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};