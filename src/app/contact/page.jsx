"use client";

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Contact <span className="text-primary">PawHaven</span>
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with our pet care experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className=" p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text font-medium">First Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-medium">Last Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Subject</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full "
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea className="textarea textarea-bordered w-full h-32 "></textarea>
              </div>
              <button className="btn btn-primary text-primary-content w-full">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-primary-content p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="font-medium">Visit Our Store</p>
                    <p className="text-gray-600">
                      123 Pet Street, Barkville, PA 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span>📞</span>
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">(555) 123-PAWS</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span>✉️</span>
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">hello@pawhaven.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-content p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-bold mb-4 text-primary">
                Store Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">11:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-secondary p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Emergency Contact
              </h3>
              <p className="text-gray-700 mb-4">
                For urgent pet care needs after hours
              </p>
              <p className="text-lg font-bold text-primary">(555) 911-PETS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
