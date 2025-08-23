import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export const EducationPage: React.FC = () => {
  const education = [
    {
      degree: 'Master of Science (MSc)',
      field: 'International Business',
      school: 'University of Dundee',
      location: 'Scotland, UK',
      period: '2009 – 2011',
      grade: 'Merit Degree (2:1)',
      description: 'Specialized in international business strategies, global market analysis, and cross-cultural management practices.',
      isHighlighted: true
    },
    {
      degree: "Master's in Business Administration (MBA)",
      field: 'Business Administration and Management',
      school: 'University of Central Punjab',
      location: 'Lahore, Pakistan',
      period: '2008 – 2010',
      grade: '3.70 CGPA',
      description: 'Comprehensive business education covering management, marketing, finance, and organizational behavior.'
    },
    {
      degree: "Bachelor's in Business Administration (BBA)",
      field: 'Business Administration',
      school: 'University of Central Punjab',
      location: 'Lahore, Pakistan',
      period: '2004 – 2008',
      grade: '3.80 CGPA',
      description: 'Foundation in business principles, accounting, marketing, and management fundamentals.'
    },
    {
      degree: 'Higher Secondary Education',
      field: 'General Studies',
      school: 'Army Public School',
      location: 'Pakistan',
      period: '1999 – 2002',
      grade: 'Distinction',
      description: 'Strong academic foundation with focus on mathematics, sciences, and languages.'
    }
  ];

  const certifications = [
    {
      title: 'Certified Entrepreneurial Coach',
      issuer: 'Lahore University of Management Sciences',
      issued: 'Nov 2023',
      skills: ['Youth Entrepreneurship', 'Coaching', 'Entrepreneurship Development', 'Entrepreneurship Education', 'Entrepreneurship'],
      credentialId: 'LUMS-CEC-2023'
    },
    {
      title: 'Mastering the Art of Teaching and Training',
      issuer: 'Lahore University of Management Sciences',
      issued: 'Mar 2023',
      skills: ['Training', 'Teaching', 'Assessment'],
      credentialId: 'LUMS-MATT-2023'
    },
    {
      title: 'Teacher (Professional) Vocational Education/Training',
      issuer: 'Amal Academy',
      issued: 'Sep 2021',
      skills: ['Professional Teaching', 'Vocational Training', 'Curriculum Development'],
      credentialId: 'AMAL-TPV-2021'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h1>
          <p className="text-xl text-gray-600">Academic Achievements & Professional Development</p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-900 mr-3" />
            Academic Education
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative mb-8 pl-20">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  edu.isHighlighted ? 'bg-amber-400' : 'bg-blue-900'
                }`}></div>

                {/* Education Card */}
                <div className={`bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 ${
                  edu.isHighlighted ? 'border-amber-200 bg-gradient-to-r from-amber-50 to-blue-50' : 'border-gray-200'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-lg text-blue-900 font-semibold mb-2">{edu.field}</p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="h-4 w-4 text-amber-500" />
                        <span className="font-semibold text-gray-900">{edu.grade}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    </div>
                    {edu.isHighlighted && (
                      <div className="mt-4 lg:mt-0 ml-0 lg:ml-4">
                        <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                          International Degree
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="h-8 w-8 text-blue-900 mr-3" />
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-blue-900 font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-3">Issued {cert.issued}</p>
                    <p className="text-xs text-gray-500 mb-4">Credential ID: {cert.credentialId}</p>
                  </div>
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Award className="h-6 w-6 text-blue-900" />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Skills Developed:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-blue-50 text-blue-900 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third certification - full width */}
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 border border-blue-200 rounded-xl shadow-md p-6">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Learning Commitment</h3>
              <p className="text-gray-700 mb-4">
                Committed to lifelong learning and professional development through ongoing certifications, 
                workshops, and training programs in education, coaching, and entrepreneurship.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium">
                  3 Major Certifications
                </span>
                <span className="bg-amber-100 text-amber-900 px-4 py-2 rounded-lg text-sm font-medium">
                  11+ Skills Enhanced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};