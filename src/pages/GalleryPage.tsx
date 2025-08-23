import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { CTAButtons } from '../components/CTAButtons';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'seminars', name: 'Seminars & Conferences' },
    { id: 'workshops', name: 'Workshops & Training' },
    { id: 'speaking', name: 'Speaking Events' },
    { id: 'recognition', name: 'Awards & Recognition' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      title: 'Faculty Development Workshop',
      date: '2024-01-15',
      venue: 'University of South Asia',
      category: 'workshops',
      description: 'Leading a comprehensive faculty development workshop on modern teaching methodologies.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      title: 'Entrepreneurship Conference',
      date: '2023-11-20',
      venue: 'Lahore Business Summit',
      category: 'seminars',
      description: 'Keynote presentation on entrepreneurship development in emerging markets.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
      title: 'Leadership Training Session',
      date: '2023-09-10',
      venue: 'Corporate Training Center',
      category: 'workshops',
      description: 'Interactive leadership development workshop for corporate executives.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      title: 'International Business Seminar',
      date: '2023-08-05',
      venue: 'Chamber of Commerce, Lahore',
      category: 'speaking',
      description: 'Speaking on international business strategies and market entry approaches.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      title: 'Excellence in Education Award',
      date: '2023-06-30',
      venue: 'Educational Excellence Awards',
      category: 'recognition',
      description: 'Receiving recognition for outstanding contributions to higher education.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
      title: 'Team Building Workshop',
      date: '2023-05-18',
      venue: 'University of South Asia',
      category: 'workshops',
      description: 'Conducting team building exercises for academic staff development.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg',
      title: 'Public Speaking Masterclass',
      date: '2023-04-12',
      venue: 'Professional Development Center',
      category: 'speaking',
      description: 'Teaching advanced public speaking techniques to aspiring leaders.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      title: 'Research Presentation Conference',
      date: '2023-03-22',
      venue: 'Academic Research Forum',
      category: 'seminars',
      description: 'Presenting research findings on entrepreneurship in higher education.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg',
      title: 'Corporate Coaching Session',
      date: '2023-02-14',
      venue: 'Business Excellence Center',
      category: 'workshops',
      description: 'One-on-one executive coaching session with industry leaders.'
    }
  ];

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Gallery</h1>
          <p className="text-xl text-gray-600">Showcasing seminars, training sessions, speaking events, and achievements</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-700 mb-4">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-blue-900 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(image)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.date} • {image.venue}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.date} • {image.venue}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Invite Me for Your Next Event</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Looking for an experienced speaker, trainer, or coach for your organization?
            Let's discuss how I can contribute to your team's success and professional development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButtons service="Speaking Engagement" />
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              {/* <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button> */}

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white text-gray-900 shadow-lg hover:bg-gray-200 p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>


              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedImage.title}</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Date:</span>
                      <span>{selectedImage.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Venue:</span>
                      <span>{selectedImage.venue}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium mr-2">Category:</span>
                      <span className="capitalize">{selectedImage.category.replace('-', ' & ')}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedImage.description}</p>
                  <CTAButtons service="Similar Event" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};