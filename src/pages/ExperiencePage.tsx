import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

export const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      company: 'University of South Asia',
      location: 'Lahore',
      duration: '9 yrs 11 mos',
      type: 'Full-time',
      positions: [
        {
          title: 'Incharge of Centre for Faculty Development',
          period: 'Jun 2022 – Present · 3 yrs 3 mos',
          description: 'Leading faculty development initiatives, conducting training programs, and implementing quality enhancement measures across the university.'
        },
        {
          title: 'Incharge Department of Business Administration',
          period: 'Jan 2021 – Present · 4 yrs 8 mos',
          description: 'Managing academic operations, curriculum development, and strategic planning for the Business Administration department.',
          skills: ['Administration', 'Communication', '+2 skills']
        },
        {
          title: 'Assistant Professor',
          period: 'Oct 2015 – Present · 9 yrs 11 mos',
          description: 'Teaching undergraduate and graduate courses in business administration, conducting research, and mentoring students.',
          skills: ['Administration', 'Communication', '+2 skills']
        }
      ]
    },
    {
      company: 'University of Engineering and Technology, Lahore',
      location: 'Lahore, Punjab, Pakistan',
      duration: '11 mos',
      type: 'Part-time',
      period: 'Aug 2020 – Jun 2021',
      positions: [
        {
          title: 'Adjunct Faculty',
          period: 'Aug 2020 – Jun 2021 · 11 mos',
          description: 'As an adjunct faculty member, I had the incredible opportunity to teach the Principles of Management and Entrepreneurship course. This role was pivotal, allowing me to share my expertise and passion for business management and entrepreneurship with eager students.'
        }
      ]
    },
    {
      company: 'Global Institute Lahore',
      location: 'Lahore',
      duration: '1 yr 8 mos',
      type: 'Full-time',
      period: 'Feb 2014 – Sep 2015',
      positions: [
        {
          title: 'Lecturer',
          period: 'Feb 2014 – Sep 2015 · 1 yr 8 mos',
          description: 'Delivered comprehensive lectures in business studies, developed curriculum materials, and contributed to academic excellence initiatives.'
        }
      ]
    },
    {
      company: 'University of Central Punjab (Official)',
      location: 'Lahore',
      duration: '2 yrs 3 mos',
      type: 'Full-time',
      period: 'Nov 2011 – Jan 2014',
      positions: [
        {
          title: 'Lecturer',
          period: 'Nov 2011 – Jan 2014 · 2 yrs 3 mos',
          description: 'Started my academic career as a lecturer, focusing on business administration subjects and student development programs.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-xl text-gray-600">Career Timeline & Key Achievements</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12 pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>

              {/* Experience Card */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8">
                {/* Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{experience.company}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>{experience.type}</span>
                      </div>
                    </div>
                  </div>
                  {/* Company logo placeholder */}
                  <div className="mt-4 lg:mt-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building className="h-8 w-8 text-gray-400" />
                  </div>
                </div>

                {/* Positions */}
                <div className="space-y-6">
                  {experience.positions.map((position, posIndex) => (
                    <div key={posIndex} className="border-l-4 border-amber-400 pl-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <p className="text-blue-900 font-medium mb-3">{position.period}</p>
                      <p className="text-gray-700 mb-4 leading-relaxed">{position.description}</p>
                      {position.skills && (
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Faculty Development Leadership</h3>
              <p className="text-gray-700">
                Successfully established and led the Centre for Faculty Development, implementing comprehensive training programs that enhanced teaching quality across the university.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Departmental Management</h3>
              <p className="text-gray-700">
                Effectively managed the Business Administration department, overseeing curriculum development, faculty coordination, and student academic success initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Cross-Institutional Impact</h3>
              <p className="text-gray-700">
                Contributed to multiple prestigious institutions including UET Lahore, demonstrating versatility and expertise across different academic environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Long-term Commitment</h3>
              <p className="text-gray-700">
                Maintained consistent growth and impact over 11+ years in higher education, showcasing dedication to academic excellence and student development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};