import React from 'react';
import { Award, Users, Laptop, Star } from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const professionalSkills = [
    { name: 'Coaching', endorsements: 1, certified: true },
    { name: 'Entrepreneurship', endorsements: 2, certified: true },
    { name: 'Teaching', endorsements: 0, certified: true },
    { name: 'Training', endorsements: 0, certified: true },
    { name: 'Education', endorsements: 1, experiences: 6 },
    { name: 'Administration', endorsements: 0, experiences: 7 },
    { name: 'Educational Leadership', endorsements: 1, experiences: 5 },
    { name: 'Communication', endorsements: 1, experiences: 6 },
    { name: 'Leadership', endorsements: 5 },
    { name: 'Public Speaking', endorsements: 4 },
    { name: 'Research', endorsements: 6 },
    { name: 'Strategic Planning', endorsements: 4 },
    { name: 'Team Management', endorsements: 5 },
    { name: 'Project Management', endorsements: 2 },
    { name: 'Management', endorsements: 4 },
  ];

  const technicalSkills = [
    { name: 'Microsoft Office', endorsements: 9 },
    { name: 'Microsoft Excel', endorsements: 4 },
    { name: 'Microsoft Word', endorsements: 2 },
    { name: 'Microsoft PowerPoint', endorsements: 2 },
    { name: 'PowerPoint', endorsements: 2 },
  ];

  const otherSkills = [
    { name: 'Customer Service', endorsements: 5 },
    { name: 'Social Media', endorsements: 3 },
    { name: 'Marketing', endorsements: 4 },
    { name: 'Teamwork', endorsements: 3 },
  ];

  const SkillCard = ({ skill, category }: { skill: any; category: string }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
        {skill.certified && (
          <Award className="h-5 w-5 text-amber-500" title="Certified" />
        )}
      </div>
      
      <div className="space-y-2">
        {skill.endorsements > 0 && (
          <div className="flex items-center space-x-2">
            <Star className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-600">
              {skill.endorsements} endorsement{skill.endorsements !== 1 ? 's' : ''}
            </span>
          </div>
        )}
        
        {skill.experiences && (
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-600">
              {skill.experiences} experience{skill.experiences !== 1 ? 's' : ''}
            </span>
          </div>
        )}

        {skill.certified && (
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-amber-500" />
            <span className="text-sm text-amber-700 font-medium">Certified</span>
          </div>
        )}
      </div>
      
      <div className="mt-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              category === 'professional' ? 'bg-blue-500' :
              category === 'technical' ? 'bg-green-500' : 'bg-purple-500'
            }`}
            style={{ 
              width: `${Math.min(100, Math.max(20, (skill.endorsements || 1) * 20))}%` 
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Skills</h1>
          <p className="text-xl text-gray-600">Comprehensive expertise across multiple domains</p>
        </div>

        {/* Skills Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center">
            <Award className="h-10 w-10 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">3</h3>
            <p className="text-blue-100">Certifications</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl text-center">
            <Laptop className="h-10 w-10 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-green-100">Technical Skills</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center">
            <Users className="h-10 w-10 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">15+</h3>
            <p className="text-purple-100">Professional Skills</p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-xl text-center">
            <Star className="h-10 w-10 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-amber-100">Total Endorsements</p>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Award className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Professional & Leadership Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="professional" />
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Laptop className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="technical" />
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Star className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Additional Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} category="other" />
            ))}
          </div>
        </div>

        {/* Skill Categories Summary */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Skill Expertise Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Coaching & Development</h3>
              <p className="text-gray-600 text-sm">
                Certified in entrepreneurial coaching, teaching, and training with proven methodologies for professional development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership & Management</h3>
              <p className="text-gray-600 text-sm">
                Extensive experience in educational leadership, team management, and strategic planning across multiple institutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Laptop className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology & Communication</h3>
              <p className="text-gray-600 text-sm">
                Proficient in Microsoft Office suite, presentation tools, and modern communication technologies for effective teaching and training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};