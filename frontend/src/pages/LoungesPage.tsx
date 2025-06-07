import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const LoungesPage: React.FC = () => {
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

  // Lounge amenities
  const amenities = [
    {
      title: t('services:lounges.amenities.seating', 'Comfortable Seating'),
      description: t('services:lounges.amenities.seating_desc', 'Relax in ergonomic chairs and sofas designed for maximum comfort during your wait.'),
      icon: '🛋️',
    },
    {
      title: t('services:lounges.amenities.food', 'Gourmet Food & Beverages'),
      description: t('services:lounges.amenities.food_desc', 'Enjoy a selection of complimentary refreshments, snacks, and meals prepared by top chefs.'),
      icon: '🍽️',
    },
    {
      title: t('services:lounges.amenities.wifi', 'High-Speed Wi-Fi'),
      description: t('services:lounges.amenities.wifi_desc', 'Stay connected with reliable, high-speed internet access throughout the lounge.'),
      icon: '📶',
    },
    {
      title: t('services:lounges.amenities.shower', 'Shower Facilities'),
      description: t('services:lounges.amenities.shower_desc', 'Refresh yourself with premium shower amenities before or after your flight.'),
      icon: '🚿',
    },
  ];

  // Lounge types
  const loungeTypes = [
    {
      name: t('services:lounges.types.business', 'Business Lounge'),
      description: t('services:lounges.types.business_desc', 'Designed for business travelers with workstations, meeting rooms, and business services.'),
      features: [
        t('services:lounges.features.workstations', 'Private workstations'), 
        t('services:lounges.features.meeting_rooms', 'Meeting rooms'), 
        t('services:lounges.features.printing', 'Printing services'), 
        t('services:lounges.features.newspapers', 'International newspapers')
      ]
    },
    {
      name: t('services:lounges.types.first_class', 'First Class Lounge'),
      description: t('services:lounges.types.first_class_desc', 'The ultimate luxury experience with personalized service and exclusive amenities.'),
      features: [
        t('services:lounges.features.dining', 'À la carte dining'), 
        t('services:lounges.features.beverages', 'Premium beverages'), 
        t('services:lounges.features.spa', 'Spa treatments'), 
        t('services:lounges.features.suites', 'Private suites')
      ]
    },
    {
      name: t('services:lounges.types.family', 'Family Lounge'),
      description: t('services:lounges.types.family_desc', 'Family-friendly spaces with entertainment and services for travelers with children.'),
      features: [
        t('services:lounges.features.kids_area', 'Kids play area'), 
        t('services:lounges.features.family_dining', 'Family dining options'), 
        t('services:lounges.features.entertainment', 'Entertainment systems'), 
        t('services:lounges.features.baby_care', 'Baby care facilities')
      ]
    }
  ];

  // Testimonials specific to Lounge service
  const testimonials = [
    {
      quote: t('services:lounges.testimonials.quote1', "The airport lounge was a sanctuary during my long layover. The comfortable seating and excellent food made all the difference."),
      author: t('services:lounges.testimonials.author1', "David Thompson"),
      role: t('services:lounges.testimonials.role1', "Business Executive")
    },
    {
      quote: t('services:lounges.testimonials.quote2', "As a family traveling with young children, the family lounge was perfect. The kids were entertained, and we could relax before our flight."),
      author: t('services:lounges.testimonials.author2', "Sarah Chen"),
      role: t('services:lounges.testimonials.role2', "Family Traveler")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.lounges') || undefined}
        subtitle={t('services:descriptions.lounges', "Comfortable waiting areas with premium amenities for a relaxing pre-flight experience") || undefined}
        imageUrl="/images/service/lounges.jpg"
        imageAlt={t('services:lounges.image_alt', "Airport Lounges") || undefined}
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
              {t('services:lounges.heading', 'Premium Airport Lounges')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounges.description', 'Escape the hustle and bustle of the terminal and relax in comfort before your flight.')}
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
                    src="/images/service/lounges.jpg"
                    alt={t('services:lounges.image_alt', 'Airport Lounges') || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:lounges.content.summary', 'Our airport lounge access service provides you with a peaceful retreat away from the crowded terminals, allowing you to relax, work, or refresh yourself before your flight.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:lounges.content.paragraph1', 'Whether you\'re traveling for business or leisure, our lounge access offers a comfortable space with premium amenities to enhance your pre-flight experience.')}
                      </p>
                      <p>
                        {t('services:lounges.content.paragraph2', 'Enjoy complimentary food and beverages, comfortable seating, high-speed Wi-Fi, shower facilities, and a quiet environment to work or relax. Some lounges also offer additional services such as spa treatments, sleeping pods, and meeting rooms.')}
                      </p>
                      <p>
                        {t('services:lounges.content.paragraph3', 'We provide access to a network of premium lounges across major international airports, ensuring that wherever your journey takes you, you can enjoy the comfort and convenience of airport lounges.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amenities Section */}
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
              {t('services:lounges.amenities.heading', 'Lounge Amenities')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounges.amenities.subheading', 'Discover the premium amenities available in our partner lounges.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            custom={1}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((amenity, index) => (
                <motion.div 
                  key={index} 
                  className="pt-6"
                  custom={index + 2}
                  variants={fadeIn}
                >
                  <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg text-white text-3xl">
                          {amenity.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{amenity.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{amenity.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Lounge Types Section */}
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
              {t('services:lounges.types.heading', 'Types of Lounges')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounges.types.subheading', 'We offer access to various types of lounges to suit your specific needs.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-3"
            custom={1}
            variants={fadeIn}
          >
            {loungeTypes.map((lounge, index) => (
              <motion.div 
                key={index}
                custom={index + 2}
                variants={fadeIn}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
              >
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{lounge.name}</h3>
                  <p className="text-gray-600 mb-6">{lounge.description}</p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {lounge.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
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
              {t('services:lounges.testimonials.heading', 'What Our Clients Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:lounges.testimonials.subheading', 'Read testimonials from travelers who have enjoyed our lounge access service.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2"
            custom={1}
            variants={fadeIn}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                custom={index + 2}
                variants={fadeIn}
              >
                <Testimonial
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        custom={0}
      >
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('services:lounges.cta.heading', 'Ready to experience our premium lounges?')}</span>
            <span className="block text-blue-200">{t('services:lounges.cta.subheading', 'Book your lounge access today.')}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/booking" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                {t('common:buttons.book_now', 'Book Now')}
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
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

export default LoungesPage;