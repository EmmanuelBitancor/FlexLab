import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
            About FlexWear
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            FlexWear is your one-stop shop for innovative, flexible wearables and seamless shopping experiences. Our mission is to provide high-quality, affordable, and unique items that make your life easier, more connected, and enjoyable. We are passionate about customer satisfaction and strive to deliver the best service possible.
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg">
              Explore Our Products
            </button>
          </div>
        </section>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Our Vision */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be a leading online marketplace known for reliability, innovation, and customer-centric values. We aim to empower our customers by offering a diverse range of flexible wearables tailored to their active lifestyles and needs.
            </p>
          </section>

          {/* Our Mission */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Delivering cutting-edge technology in everyday wearables that blend comfort, style, and functionality. We commit to sustainability and ethical sourcing to build a better future for our community and the planet.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-purple-600">Contact Us</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Have questions or feedback? We're here to help!
            </p>
            <a 
              href="mailto:support@flexwear.com" 
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
            >
              Email Us
            </a>
          </section>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-4xl font-bold">10K+</h3>
            <p className="text-purple-100">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-purple-100">Unique Products</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-4xl font-bold">99%</h3>
            <p className="text-purple-100">Satisfaction Rate</p>
          </div>
        </section>

        {/* Footer Teaser */}
        <footer className="text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600 mb-4">
            Ready to experience the future of flexible wearables?
          </p>
          <a 
            href="/products" 
            className="text-purple-600 hover:text-purple-800 font-semibold underline"
          >
            Shop Now
          </a>
        </footer>
      </div>
    </div>
  );
};

export default About;