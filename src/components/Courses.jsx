import React from 'react';
import Banner from './Banner';

const coursesByCategory = {
  "Front-End Development": [
    
  ],
  "Back-End Development": [
    
  ],
  "UI/UX Design": [
   
  ],
  
  
};

export default function Courses() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.keys(coursesByCategory).map((category) => (
          <div key={category} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <ul className="list-disc pl-5">
              {coursesByCategory[category].map((course, index) => (
                <li key={index} className="mb-2 text-lg">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Banner/>
    </div>
  );
}
