import React from 'react';

export default function About() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Mission Statement */}
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a leading provider of innovative solutions, committed to delivering excellence in every project. Our team of experts works tirelessly to ensure that our clients receive the best possible service and results.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="/path-to-team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Jane Doe</h3>
            <p className="text-gray-600">CEO</p>
            <p className="mt-2 text-gray-700">
              Jane leads our team with over 20 years of experience in the industry. Her passion for innovation drives our mission forward.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="/path-to-team-member2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">John Smith</h3>
            <p className="text-gray-600">CTO</p>
            <p className="mt-2 text-gray-700">
              John is our tech guru, overseeing all technical aspects of our projects and ensuring that we stay ahead of the curve.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src="/path-to-team-member3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Alice Johnson</h3>
            <p className="text-gray-600">COO</p>
            <p className="mt-2 text-gray-700">
              Alice manages our operations and ensures that everything runs smoothly. Her organizational skills are key to our success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to deliver innovative and effective solutions that help our clients achieve their goals. We believe in transparency, integrity, and excellence in everything we do.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have questions or want to get in touch? Feel free to reach out to us through the following methods:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li className="mb-2">Email: <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a></li>
          <li className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+123 456 7890</a></li>
          <li className="mb-2">Address: 123 Example St, City, Country</li>
        </ul>
      </section>
    </div>
  );
}
