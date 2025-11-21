"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Why choose Starwaylink as the best digital marketing agency in UAE?",
    answer: "Starwaylink Services LLC is recognized as one of the best digital marketing agencies in UAE because we combine local market expertise with cutting-edge digital strategies. Our team specializes in SEO, SEM, content marketing, and social media management tailored specifically for UAE audiences. We deliver measurable ROI and have a proven track record of helping businesses grow their online presence in the UAE market.",
  },
  {
    question: "What VAT services do you offer in UAE?",
    answer: "We provide comprehensive VAT services in UAE including VAT registration, VAT filing, VAT return preparation, VAT compliance, VAT advisory, and VAT refund assistance. Our expert team ensures your business stays compliant with UAE VAT regulations while maximizing your tax efficiency.",
  },
  {
    question: "Do you provide software development services in UAE?",
    answer: "Yes, we offer full-stack software development services in UAE. Our services include custom software development, web application development, mobile app development, system integration, API development, and software maintenance. We use modern technologies like Next.js, React, and cloud platforms to build scalable solutions.",
  },
  {
    question: "What makes your digital marketing services different?",
    answer: "As the best digital marketing agency in UAE, we focus on data-driven strategies, local market insights, and measurable results. We offer SEO optimization, pay-per-click advertising, social media marketing, content creation, email marketing, and analytics reporting. Our approach is tailored to the unique characteristics of the UAE market.",
  },
  {
    question: "How do I get started with VAT services?",
    answer: "Getting started with our VAT services is simple. Contact us for a free consultation where we'll assess your VAT requirements, guide you through the registration process if needed, and set up a compliance schedule. We handle all VAT filing and ensure timely submission to avoid penalties.",
  },
  {
    question: "What web development technologies do you use?",
    answer: "We specialize in modern web development using Next.js, React, TypeScript, and other cutting-edge technologies. Our software development services include responsive web design, e-commerce solutions, custom web applications, and progressive web apps (PWAs) optimized for performance and SEO.",
  },
  {
    question: "Can you help with both digital marketing and VAT services?",
    answer: "Absolutely! As a comprehensive business services provider, we can manage both your digital marketing needs and VAT compliance. This integrated approach ensures your business grows while maintaining full compliance with UAE regulations. Many of our clients benefit from our full-service approach.",
  },
  {
    question: "What industries do you serve for software development?",
    answer: "Our software development services cater to various industries in UAE including retail, hospitality, healthcare, logistics, finance, real estate, and e-commerce. We build custom solutions that address industry-specific challenges and compliance requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our digital marketing, VAT services, and software development
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 hover:border-blue-300 transition-colors">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <CardTitle className="flex items-center justify-between text-left text-base sm:text-lg">
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 flex-shrink-0 transition-transform ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </CardTitle>
                  </CardHeader>
                  {openIndex === index && (
                    <CardContent className="pt-0">
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

