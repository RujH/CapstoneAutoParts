"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from '../../styles/contact-us.module.css';

function ContactUs ()  {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    vin: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear email error when user types in email field
    if (name === 'email') {
      setEmailError(false);
    }
    setError(""); // Reset error message as user types
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    // Validation Check: Ensure all fields are filled out
    if (!formData.name || !formData.email || !formData.vin || !formData.message) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    // Email format validation
    if (!emailPattern.test(formData.email)) {
      setEmailError(true);
      return;
    }

    emailjs.send(
      "service_4bonqnb", 
      "template_gidx7ag", 
      formData,           
      "fJzLNj9p738CBzFg-"   
    ).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          vin: "",
          message: "",
        });
        // Clear the success message after a timeout
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      },
      (error) => {
        console.error("Error sending email:", error);
        setError("An error occurred while sending your message. Please try again.");
      }
    );

    setIsSubmitted(true);

    setFormData({
      name: "",
      email: "",
      vin: "",
      message: "",
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="bg-white py-12" id="contactUs">
      <div className="container mx-auto px-4">
        <h2 className={styles.contactTitle}>Tired of Ordering the Wrong Part? We Can Help</h2>
      
      
        {isSubmitted && (
          <p className="text-green-368 text-center mb-4">
            Your message has been sent successfully!
          </p>
        )}

        
        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto p-6  rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-black font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368 text-gray-900"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-black font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    emailError 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'focus:ring-green-368'
                  } text-gray-900`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">Invalid email address</p>
                )}
              </div>

              {/* VIN Input */}
              <div>
                <label className="block text-black font-medium mb-1">VIN</label>
                <input
                  type="text"
                  name="vin"
                  placeholder="Vehicle Identification Number"
                  value={formData.vin}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368 text-gray-900"
                />
              </div>
            </div>

           
            <div>
              <label className="block text-black font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows={8}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-368 text-gray-900"
              ></textarea>
            </div>
          </div>

         
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="w-full bg-grey-11 text-white py-2 rounded-md hover:bg-green-368 transition duration-300"
            >
              Send Message
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
