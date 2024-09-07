import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { title: 'Web Development', path: '/Services/web' },
    { title: 'App Development', path: '/Services/mobile' },
    { title: 'SEO Services', path: '/Services/seo' },
    { title: 'Graphic Design', path: '/Services/graphicdesign' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-9xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-gray-200 p-6 rounded-lg shadow-md hover:bg-gray-300 transition-colors"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h2>
              <p className="text-gray-600">Click to learn more</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
