import { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your typical renovation timeline?",
      answer:
        "Most HDB and condo renovations take 8-12 weeks, while landed properties may require 12-16 weeks depending on the scope of work.",
    },
    {
      question: "Do you provide free quotations?",
      answer:
        "Yes, we provide free consultations and quotations for all renovation projects. Contact us to schedule a meeting.",
    },
    {
      question: "Are you HDB/BCA approved?",
      answer:
        "Yes, we are a registered contractor with HDB and BCA, ensuring all renovations comply with Singapore's building regulations.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We offer a 1-year workmanship warranty on all our renovation projects, with additional warranty coverage on selected materials and installations.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our renovation services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl shadow-md border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${100 * (index + 1)}ms` }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-lg text-gray-800 hover:bg-gray-50 transition-all">
                <span>{faq.question}</span>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="p-6 pt-0 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;