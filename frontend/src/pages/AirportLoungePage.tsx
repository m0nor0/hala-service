import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const AirportLoungePage: React.FC = () => {
  const { t } = useTranslation(['services', 'common']);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Lounge service options
  const loungeOptions = [
    {
      name: t('services:lounge.options.standard', 'Standard Lounge Access'),
      description: t('services:lounge.options.standard_desc', 'Comfortable lounge access with essential amenities for a relaxing pre-flight experience.'),
      price: t('services:lounge.options.standard_price', 'From $50'),
      image: '/images/service/lounge-standard.jpeg',
      features: [
        t('services:lounge.features.seating', 'Comfortable seating'),
        t('services:lounge.features.wifi', 'Complimentary Wi-Fi'),
        t('services:lounge.features.refreshments', 'Refreshments and snacks'),
        t('services:lounge.features.newspapers', 'Newspapers and magazines'),
        t('services:lounge.features.tv', 'TV and entertainment'),
        t('services:lounge.features.charging', 'Charging stations')
      ]
    },
    {
      name: t('services:lounge.options.premium', 'Premium Lounge Access'),
      description: t('services:lounge.options.premium_desc', 'Enhanced lounge experience with premium food and beverage options and additional amenities.'),
      price: t('services:lounge.options.premium_price', 'From $80'),
      image: '/images/service/lounge-premium.jpeg',
      features: [
        t('services:lounge.features.all_standard', 'All standard lounge features'),
        t('services:lounge.features.hot_food', 'Hot food options'),
        t('services:lounge.features.premium_drinks', 'Premium alcoholic beverages'),
        t('services:lounge.features.shower', 'Shower facilities'),
        t('services:lounge.features.quiet_zone', 'Quiet zones'),
        t('services:lounge.features.business_center', 'Business center access')
      ]
    },
    {
      name: t('services:lounge.options.vip', 'VIP Lounge Access'),
      description: t('services:lounge.options.vip_desc', 'Exclusive VIP lounge access with personalized service and luxury amenities.'),
      price: t('services:lounge.options.vip_price', 'From $120'),
      image: '/images/service/lounge-vip.jpeg',
      features: [
        t('services:lounge.features.all_premium', 'All premium lounge features'),
        t('services:lounge.features.private_area', 'Private seating areas'),
        t('services:lounge.features.concierge', 'Dedicated concierge service'),
        t('services:lounge.features.spa', 'Spa treatments available'),
        t('services:lounge.features.fine_dining', 'Fine dining options'),
        t('services:lounge.features.meeting_rooms', 'Private meeting rooms')
      ]
    },
  ];

  // Lounge benefits
  const benefits = [
    {
      title: t('services:lounge.benefits.comfort', 'Comfort'),
      description: t('services:lounge.benefits.comfort_desc', 'Relax in comfortable seating away from the crowded terminal areas.'),
      icon: '🛋️',
    },
    {
      title: t('services:lounge.benefits.productivity', 'Productivity'),
      description: t('services:lounge.benefits.productivity_desc', 'Stay productive with Wi-Fi, workspaces, and business facilities.'),
      icon: '💼',
    },
    {
      title: t('services:lounge.benefits.refreshment', 'Refreshment'),
      description: t('services:lounge.benefits.refreshment_desc', 'Enjoy complimentary food and beverages before your flight.'),
      icon: '🍹',
    },
    {
      title: t('services:lounge.benefits.relaxation', 'Relaxation'),
      description: t('services:lounge.benefits.relaxation_desc', 'Unwind with entertainment options and quiet spaces for rest.'),
      icon: '😌',
    },
  ];

  // Testimonials specific to lounge service
  const testimonials = [
    {
      quote: t('services:lounge.testimonials.quote1', "The airport lounge access was the perfect way to start our vacation. The comfortable seating, delicious food, and attentive service made our pre-flight experience so enjoyable."),
      author: t('services:lounge.testimonials.author1', "Emma Thompson"),
      role: t('services:lounge.testimonials.role1', "Frequent Traveler")
    },
    {
      quote: t('services:lounge.testimonials.quote2', "As a business traveler, the lounge access is essential for my productivity. The quiet environment, reliable Wi-Fi, and business facilities allow me to work efficiently before boarding."),
      author: t('services:lounge.testimonials.author2', "David Chen"),
      role: t('services:lounge.testimonials.role2', "Business Executive")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.lounges') || undefined}
        subtitle={t('services:descriptions.lounges', "Exclusive airport lounge access worldwide") || undefined}
        imageUrl="/images/service/lounge.jpeg"
        imageAlt={t('services:lounge.image_alt', "Airport Lounge Access") || undefined}
      />
      
      {/* Main Content */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:lounge.heading', 'Airport Lounge Access')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounge.description', 'Enjoy exclusive access to premium airport lounges worldwide for a comfortable and relaxing pre-flight experience.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-16"
            custom={1}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto rounded-lg shadow-lg"
                    width="490"
                    src="/images/service/lounge.jpeg"
                    alt={t('services:lounge.image_alt', "Airport Lounge Access") || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:lounge.content.summary', 'Our airport lounge access service provides you with a sanctuary away from the busy terminal, offering comfort, refreshments, and amenities to enhance your pre-flight experience.')}
                    </p>
                    <div className="mt-5 prose prose-indigo text-gray-500">
                      <p>
                        {t('services:lounge.content.paragraph1', 'Whether you're traveling for business or leisure, our lounge access service offers a peaceful environment where you can relax, work, or enjoy refreshments before your flight. Escape the crowded terminal and enjoy premium amenities in a comfortable setting.')}
                      </p>
                      <p>
                        {t('services:lounge.content.paragraph2', 'We provide access to a network of premium lounges across major airports worldwide. Each lounge offers a range of amenities including comfortable seating, complimentary food and beverages, Wi-Fi, and business facilities.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Options */}
      <motion.section 
        className="py-12 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:lounge.options_heading', 'Lounge Access Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounge.options_description', 'Choose the lounge access package that best suits your needs and preferences.')}
            </p>
          </motion.div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {loungeOptions.map((option, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{option.name}</h3>
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">{option.price}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{option.description}</p>

                  {/* Features */}
                  <ul className="mt-6 space-y-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex">
                        <span className="text-green-500 flex-shrink-0">
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    {t('services:lounge.book_now', 'Book Now')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            custom={0}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:lounge.benefits_heading', 'Benefits of Airport Lounge Access')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounge.benefits_description', 'Discover the advantages of our airport lounge access service.')}
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  custom={index + 1}
                  variants={fadeIn}
                >
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
              {t('services:lounge.testimonials_heading', 'What Our Clients Say')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="bg-blue-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">{t('services:lounge.cta_heading', 'Ready to enhance your travel experience?')}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              {t('services:lounge.cta_description', 'Book our airport lounge access service today and enjoy a comfortable pre-flight experience.')}
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
                {t('common:navigation.contact', 'Contact Us')}
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AirportLoungePage;