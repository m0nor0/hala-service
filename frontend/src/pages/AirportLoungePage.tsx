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

  // Airport Lounge service options
  const serviceOptions = [
    {
      name: t('services:airport_lounge.options.standard', 'Standard Lounge Access'),
      description: t('services:airport_lounge.options.standard_desc', 'Enjoy a comfortable space to relax before your flight with basic amenities.'),
      price: t('services:airport_lounge.options.standard_price', 'From $45'),
      features: [
        t('services:airport_lounge.features.comfortable', 'Comfortable seating'),
        t('services:airport_lounge.features.wifi', 'Complimentary Wi-Fi'),
        t('services:airport_lounge.features.refreshments', 'Light refreshments and snacks'),
        t('services:airport_lounge.features.newspapers', 'Newspapers and magazines'),
        t('services:airport_lounge.features.duration', '3 hours of access')
      ]
    },
    {
      name: t('services:airport_lounge.options.premium', 'Premium Lounge Access'),
      description: t('services:airport_lounge.options.premium_desc', 'Enhanced lounge experience with premium amenities and services.'),
      price: t('services:airport_lounge.options.premium_price', 'From $75'),
      features: [
        t('services:airport_lounge.features.comfortable', 'Comfortable seating'),
        t('services:airport_lounge.features.wifi', 'High-speed Wi-Fi'),
        t('services:airport_lounge.features.meals', 'Hot meals and premium beverages'),
        t('services:airport_lounge.features.shower', 'Shower facilities'),
        t('services:airport_lounge.features.business', 'Business center access'),
        t('services:airport_lounge.features.duration_premium', '5 hours of access')
      ]
    },
    {
      name: t('services:airport_lounge.options.vip', 'VIP Lounge Access'),
      description: t('services:airport_lounge.options.vip_desc', 'Exclusive VIP lounge experience with personalized service and luxury amenities.'),
      price: t('services:airport_lounge.options.vip_price', 'From $120'),
      features: [
        t('services:airport_lounge.features.private', 'Private seating areas'),
        t('services:airport_lounge.features.wifi', 'Ultra high-speed Wi-Fi'),
        t('services:airport_lounge.features.dining', 'À la carte dining'),
        t('services:airport_lounge.features.premium_drinks', 'Premium alcoholic beverages'),
        t('services:airport_lounge.features.shower', 'Luxury shower facilities'),
        t('services:airport_lounge.features.spa', 'Spa treatments (subject to availability)'),
        t('services:airport_lounge.features.concierge', 'Personal concierge service'),
        t('services:airport_lounge.features.duration_vip', 'Unlimited access until departure')
      ]
    },
  ];

  // Airport Lounge service benefits
  const benefits = [
    {
      title: t('services:airport_lounge.benefits.comfort', 'Comfort & Relaxation'),
      description: t('services:airport_lounge.benefits.comfort_desc', 'Escape the hustle and bustle of the terminal and relax in a comfortable, quiet environment.'),
      icon: '🛋️',
    },
    {
      title: t('services:airport_lounge.benefits.productivity', 'Enhanced Productivity'),
      description: t('services:airport_lounge.benefits.productivity_desc', 'Access to business facilities and high-speed internet to stay productive while waiting for your flight.'),
      icon: '💼',
    },
    {
      title: t('services:airport_lounge.benefits.refreshments', 'Food & Refreshments'),
      description: t('services:airport_lounge.benefits.refreshments_desc', 'Enjoy complimentary food and beverages, from light snacks to gourmet meals depending on your package.'),
      icon: '🍽️',
    },
    {
      title: t('services:airport_lounge.benefits.amenities', 'Premium Amenities'),
      description: t('services:airport_lounge.benefits.amenities_desc', 'Access to shower facilities, entertainment options, and other premium amenities to enhance your pre-flight experience.'),
      icon: '🚿',
    },
  ];

  // Testimonials specific to airport lounge service
  const testimonials = [
    {
      quote: t('services:airport_lounge.testimonials.quote1', "The airport lounge access was the perfect way to start my vacation. Relaxing with a drink before a long flight made all the difference."),
      author: t('services:airport_lounge.testimonials.author1', "Emma Johnson"),
      role: t('services:airport_lounge.testimonials.role1', "Leisure Traveler")
    },
    {
      quote: t('services:airport_lounge.testimonials.quote2', "As a business traveler, the premium lounge access is essential. I can work, freshen up, and enjoy a meal all before boarding."),
      author: t('services:airport_lounge.testimonials.author2', "David Kim"),
      role: t('services:airport_lounge.testimonials.role2', "Business Executive")
    },
    {
      quote: t('services:airport_lounge.testimonials.quote3', "The VIP lounge experience was exceptional. The personal concierge service and private seating area made me feel like royalty."),
      author: t('services:airport_lounge.testimonials.author3', "Fatima Al-Sayed"),
      role: t('services:airport_lounge.testimonials.role3', "First Class Passenger")
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:airport_lounge.hero.title', 'Airport Lounge Access') as string}
        subtitle={t('services:airport_lounge.hero.subtitle', 'Elevate your pre-flight experience with exclusive lounge access') as string}
        imageUrl="/images/service/airport-lounge.jpg"
        imageAlt="Airport Lounge Access"
      />
      
      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:airport_lounge.intro.title', 'Luxury Before Take-off')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:airport_lounge.intro.description', 'Transform your airport experience with our exclusive lounge access services. Enjoy comfort, convenience, and premium amenities before your flight.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="relative"
                  variants={fadeIn}
                  custom={index + 1}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <span className="text-2xl">{benefit.icon}</span>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{benefit.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {benefit.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>
      
      {/* Service Options Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:airport_lounge.options.title', 'Our Lounge Access Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:airport_lounge.options.subtitle', 'Choose the lounge experience that best suits your needs and preferences')}
            </p>
          </motion.div>
          
          <div className="mt-12 space-y-8">
            {serviceOptions.map((option, index) => (
              <motion.div 
                key={index}
                className="bg-white overflow-hidden shadow-lg rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                custom={index + 1}
              >
                <div className="px-6 py-8 sm:p-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-semibold text-gray-900">{option.name}</h3>
                    <p className="text-xl font-bold text-blue-600">{option.price}</p>
                  </div>
                  <p className="mt-4 text-gray-600">{option.description}</p>
                  <ul className="mt-8 space-y-4">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link 
                      to="/booking" 
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {t('common:buttons.book_now', 'Book Now')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:airport_lounge.how_it_works.title', 'How It Works')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:airport_lounge.how_it_works.subtitle', 'Simple steps to enjoy our Airport Lounge Access service')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-lg font-medium text-gray-900">
                  {t('services:airport_lounge.how_it_works.process', 'The Process')}
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid gap-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
              <motion.div variants={fadeIn} custom={1}>
                <div className="relative">
                  <div className="text-center">
                    <span className="h-12 w-12 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center mx-auto">
                      1
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:airport_lounge.how_it_works.step1', 'Book Online')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.how_it_works.step1_desc', 'Select your preferred lounge access package and complete the booking process online.')}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} custom={2}>
                <div className="relative">
                  <div className="text-center">
                    <span className="h-12 w-12 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center mx-auto">
                      2
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:airport_lounge.how_it_works.step2', 'Receive Confirmation')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.how_it_works.step2_desc', 'Get your booking confirmation with lounge access voucher via email.')}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} custom={3}>
                <div className="relative">
                  <div className="text-center">
                    <span className="h-12 w-12 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center mx-auto">
                      3
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:airport_lounge.how_it_works.step3', 'Arrive at the Airport')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.how_it_works.step3_desc', 'Present your voucher at the lounge reception desk.')}
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} custom={4}>
                <div className="relative">
                  <div className="text-center">
                    <span className="h-12 w-12 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center mx-auto">
                      4
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:airport_lounge.how_it_works.step4', 'Enjoy the Lounge')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.how_it_works.step4_desc', 'Relax and enjoy all the amenities and services available in the lounge.')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Lounge Amenities Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:airport_lounge.amenities.title', 'Lounge Amenities')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:airport_lounge.amenities.subtitle', 'Discover the premium amenities available in our partner lounges')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={1}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.food_title', 'Food & Beverages')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.food_desc', 'From light snacks to hot meals, enjoy a variety of food options and beverages including alcoholic drinks.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={2}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.business_title', 'Business Facilities')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.business_desc', 'Stay productive with workstations, high-speed Wi-Fi, printing services, and meeting rooms in select lounges.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={3}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.entertainment_title', 'Entertainment')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.entertainment_desc', 'Enjoy TV screens with news and sports channels, magazines, newspapers, and entertainment options.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={4}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.comfort_title', 'Comfort & Relaxation')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.comfort_desc', 'Comfortable seating, quiet zones, and in some lounges, spa services and massage chairs for ultimate relaxation.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={5}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.shower_title', 'Shower Facilities')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.shower_desc', 'Freshen up before or after your flight with clean shower facilities and premium toiletries.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white overflow-hidden shadow rounded-lg"
              variants={fadeIn}
              custom={6}
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{t('services:airport_lounge.amenities.flight_title', 'Flight Information')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:airport_lounge.amenities.flight_desc', 'Stay updated with real-time flight information displays and announcements for boarding calls.')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('common:testimonials.heading', 'What Our Customers Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('common:testimonials.subheading', 'Don\'t just take our word for it — hear from some of our satisfied customers.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} custom={index + 1}>
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('services:airport_lounge.cta.ready', 'Ready to elevate your airport experience?')}</span>
            <span className="block text-blue-200">{t('services:airport_lounge.cta.book_today', 'Book your Airport Lounge Access today.')}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                {t('common:buttons.book_now', 'Book Now')}
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                {t('common:buttons.contact_us', 'Contact Us')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportLoungePage;