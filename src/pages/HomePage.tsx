import React from 'react';
import { ArrowRight, Users, Calendar, Award, Star } from 'lucide-react';
import { CTAButtons } from '../components/CTAButtons';

export const HomePage: React.FC = () => {
  const stats = [
    { icon: Users, value: '11K+', label: 'Followers' },
    { icon: Calendar, value: '11+', label: 'Years Teaching' },
    { icon: Award, value: '50+', label: 'Seminars Conducted' },
    { icon: Star, value: '500+', label: 'Connections' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your
                <span className="block text-amber-400">Career & Leadership</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Incharge of Academics & Faculty Development • Educationist • Certified Teacher & Trainer • Certified Entrepreneurial Coach
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg mb-8">
                <p className="text-lg italic">
                  "I strongly believe that classroom is a training ground not only in the field of study but many aspects of life."
                </p>
                <p className="text-amber-400 font-semibold mt-2">- Qalab-e-Abbas</p>
              </div>
              <CTAButtons />
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <img
                  src="/qalab-e-abbas.jpeg"
                  alt="Professional educator"
                  className="w-80 h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="h-12 w-12 text-blue-900 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Qalab-e-Abbas</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Mr. Qalab-e-Abbas holds a MSc. International Business from University of Dundee, Scotland, UK. 
                His teaching and research focuses on the interface between international entrepreneurship, 
                innovation and marketing management within the context of small and medium-size enterprises.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                He is a dedicated, ambitious and goal-driven educator with 11 years progressive experience 
                in higher education institutes.
              </p>
              <a
                href="/about"
                className="inline-flex items-center space-x-2 text-blue-900 hover:text-blue-700 font-semibold transition-colors"
              >
                <span>Learn More About Me</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                  alt="Teaching"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Seminar"
                  className="rounded-lg shadow-md mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h2>
            <p className="text-xl text-gray-600">Empowering individuals and organizations to reach their full potential</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Career Development Coaching',
              'Executive Coaching',
              'Leadership Development',
              'Corporate Training',
              'Public Speaking',
              'Team Building',
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service}</h3>
                <p className="text-gray-600 mb-6">Professional guidance and expertise to help you achieve your goals.</p>
                <CTAButtons service={service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};