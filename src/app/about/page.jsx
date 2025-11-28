"use client";

import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">PawHaven</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in pet care, dedicated to keeping your furry
              friends happy, healthy, and loved.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Founded with a passion for animal welfare, PawHaven began as a
                small neighborhood pet store and has grown into a comprehensive
                pet care center serving thousands of happy pets and their
                families.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Our journey started when our founder noticed the lack of
                reliable, compassionate pet care services in the community. What
                began as a simple mission to provide quality pet products has
                evolved into a full-service haven for all your pet's needs.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we're proud to be your go-to destination for everything
                from grooming and veterinary services to premium pet supplies
                and expert advice.
              </p>
            </div>

            {/* Image placeholder - replace with actual image */}
            <div className="w-full rounded-xl flex items-center justify-center">
              <Image
                src="/aboutUsIMG.png"
                alt="About PawHaven"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center  p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Compassionate Care
              </h3>
              <p className="text-gray-700">
                Every pet is treated with the love and respect they deserve,
                ensuring their comfort and happiness.
              </p>
            </div>
            <div className="text-center  p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Expert Quality
              </h3>
              <p className="text-gray-700">
                Professional services and premium products backed by years of
                experience and expertise.
              </p>
            </div>
            <div className="text-center  p-6 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                Trust & Reliability
              </h3>
              <p className="text-gray-700">
                Building lasting relationships with pet parents through
                consistent, dependable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5K+</div>
              <div className="text-gray-600">Happy Pets Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Pet Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Give Your Pet the Best Care?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today and discover why thousands of pet parents trust
            PawHaven.
          </p>
          <button className="btn bg-accent text-primary border-0 px-8 py-3 text-lg font-semibold hover:bg-accent/90">
            Visit Our Store
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
