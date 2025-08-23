import React from 'react';
import { CTAButtons } from '../components/CTAButtons';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Building, 
  Heart, 
  Mic, 
  FileText, 
  UserCheck, 
  BookOpen 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: 'Career Development Coaching',
      description: 'Personalized guidance to help you navigate your career path, identify opportunities, and achieve your professional goals with strategic planning and actionable insights.',
    },
    {
      icon: Building,
      title: 'Corporate Training',
      description: 'Comprehensive training programs designed to enhance organizational effectiveness, improve employee performance, and foster a culture of continuous learning.',
    },
    {
      icon: TrendingUp,
      title: 'Executive Coaching',
      description: 'One-on-one coaching for senior executives and managers to develop leadership skills, improve decision-making, and drive organizational success.',
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Develop essential leadership competencies through proven methodologies, practical exercises, and real-world applications that create lasting impact.',
    },
    {
      icon: Heart,
      title: 'Life Coaching',
      description: 'Holistic approach to personal development, helping you balance professional success with personal fulfillment and well-being.',
    },
    {
      icon: Mic,
      title: 'Public Speaking',
      description: 'Build confidence and master the art of public speaking through structured training, practice sessions, and personalized feedback.',
    },
    {
      icon: FileText,
      title: 'Resume Review',
      description: 'Professional resume optimization and career document preparation to help you stand out in competitive job markets.',
    },
    {
      icon: UserCheck,
      title: 'Team Building',
      description: 'Interactive workshops and activities designed to strengthen team dynamics, improve collaboration, and enhance organizational culture.',
    },
    {
      icon: BookOpen,
      title: 'Training Programs',
      description: 'Customized training solutions covering various aspects of business, entrepreneurship, and professional development tailored to your needs.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering individuals and organizations through comprehensive coaching, training, and development programs 
            designed to unlock potential and drive success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
              <CTAButtons service={service.title} />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards achieving your professional goals. Let's discuss how we can work together 
            to unlock your potential and create lasting success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButtons />
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose My Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '11+ Years Experience',
                description: 'Extensive experience in higher education and professional development'
              },
              {
                title: 'Certified Coach',
                description: 'Certified Entrepreneurial Coach with proven methodologies'
              },
              {
                title: 'International Education',
                description: 'MSc. from University of Dundee, Scotland, UK'
              },
              {
                title: '11K+ Network',
                description: 'Strong professional network and industry connections'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};