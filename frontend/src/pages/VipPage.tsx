import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const VipPage: React.FC = () => {
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

  // VIP service packages
  const vipPackages = [
    {
      name: t('services:vip.packages.platinum', 'Platinum Experience'),
      description: t('services:vip.packages.platinum_desc', 'The ultimate VIP airport experience with personalized service from arrival to departure.'),
      price: t('services:vip.packages.platinum_price', 'From $500'),
      features: [
        t('services:vip.features.concierge', 'Dedicated VIP concierge'),
        t('services:vip.features.terminal', 'Private terminal access'),
        t('services:vip.features.lounge', 'Luxury lounge with premium dining'),
        t('services:vip.features.security', 'Private security and immigration clearance'),
        t('services:vip.features.limousine', 'Limousine transfer to/from aircraft'),
        t('services:vip.features.luggage', 'Luggage handling and priority delivery'),
        t('services:vip.features.shopping', 'Personalized shopping assistance')
      ]
    },
    {
      name: t('services:vip.packages.gold', 'Gold Experience'),
      description: t('services:vip.packages.gold_desc', 'Premium VIP service with expedited procedures and exclusive amenities.'),
      price: t('services:vip.packages.gold_price', 'From $300'),
      features: [
        t('services:vip.features.assistant', 'Personal assistant'),
        t('services:vip.features.fast_track', 'Fast track security and immigration'),
        t('services:vip.features.premium_lounge', 'Premium lounge access'),
        t('services:vip.features.priority_baggage', 'Priority baggage handling'),
        t('services:vip.features.luxury_vehicle', 'Luxury vehicle transfer within airport'),
        t('services:vip.features.refreshments', 'Complimentary refreshments')
      ]
    },
    {
      name: t('services:vip.packages.silver', 'Silver Experience'),
      description: t('services:vip.packages.silver_desc', 'Enhanced airport experience with key VIP benefits.'),
      price: t('services:vip.packages.silver_price', 'From $150'),
      features: [
        t('services:vip.features.meet_greet', 'Meet and greet service'),
        t('services:vip.features.fast_track_security', 'Fast track security'),
        t('services:vip.features.business_lounge', 'Business lounge access'),
        t('services:vip.features.baggage', 'Baggage assistance'),
        t('services:vip.features.concierge', 'Airport concierge support')
      ]
    }
  ];

  // VIP service benefits
  const benefits = [
    {
      title: t('services:vip.benefits.privacy', 'Privacy & Exclusivity'),
      description: t('services:vip.benefits.privacy_desc', 'Enjoy complete privacy and exclusive access to restricted areas of the airport.'),
      icon: '🔒',
    },
    {
      title: t('services:vip.benefits.time', 'Time Efficiency'),
      description: t('services:vip.benefits.time_desc', 'Bypass regular procedures and save valuable time with expedited services.'),
      icon: '⏱️',
    },
    {
      title: t('services:vip.benefits.personalized', 'Personalized Service'),
      description: t('services:vip.benefits.personalized_desc', 'Receive attentive, personalized assistance tailored to your specific needs.'),
      icon: '👑',
    },
    {
      title: t('services:vip.benefits.stress_free', 'Stress-Free Travel'),
      description: t('services:vip.benefits.stress_free_desc', 'Eliminate travel stress with seamless handling of all airport procedures.'),
      icon: '✨',
    },
  ];

  // Testimonials specific to VIP service
  const testimonials = [
    {
      quote: t('services:vip.testimonials.quote1', "The VIP service exceeded all my expectations. From the moment I arrived at the airport until I boarded my flight, every detail was handled with precision and care."),
      author: t('services:vip.testimonials.author1', "Jonathan Reynolds"),
      role: t('services:vip.testimonials.role1', "CEO, Global Enterprises")
    },
    {
      quote: t('services:vip.testimonials.quote2', "As a frequent traveler, I've experienced VIP services at airports worldwide, and Hala Service's VIP offering ranks among the very best. Truly exceptional."),
      author: t('services:vip.testimonials.author2', "Sophia Al-Mansour"),
      role: t('services:vip.testimonials.role2', "International Business Consultant")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.vip') || undefined}
        subtitle={t('services:descriptions.vip', "Exclusive airport experience with dedicated personalized service") || undefined}
        imageUrl="/images/service/vip.jpeg"
        imageAlt={t('services:vip.image_alt', "VIP Airport Services") || undefined}
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
              {t('services:vip.heading', 'Exclusive VIP Airport Experience')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:vip.description', 'Experience the ultimate in luxury and convenience with our premium VIP airport services.')}
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
                    src="/images/service/vip.jpeg"
                    alt={t('services:vip.image_alt', 'VIP Airport Services') || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:vip.content.summary', 'Our VIP services redefine the airport experience, offering unparalleled luxury, privacy, and efficiency for discerning travelers.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:vip.content.paragraph1', 'Designed for executives, celebrities, diplomats, and travelers who value privacy and time, our VIP service provides a seamless journey through the airport with dedicated personal assistance at every step.')}
                      </p>
                      <p>
                        {t('services:vip.content.paragraph2', 'From the moment you arrive at the airport, you\'ll be greeted by your personal VIP concierge who will guide you through exclusive channels for check-in, security, and immigration. Enjoy premium lounge access with gourmet dining options, and when it\'s time to board, be escorted directly to your aircraft.')}
                      </p>
                      <p>
                        {t('services:vip.content.paragraph3', 'For arriving passengers, your VIP experience includes meeting you at the aircraft door, expedited immigration and customs clearance, priority baggage handling, and escort to your arranged transportation.')}
                      </p>
                      <p>
                        {t('services:vip.content.paragraph4', 'Every aspect of our VIP service is customizable to meet your specific requirements, ensuring a truly personalized experience that exceeds expectations.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* VIP Packages Section */}
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
              {t('services:vip.packages.heading', 'VIP Service Packages')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:vip.packages.subheading', 'Choose the perfect VIP package for your travel needs.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
            custom={1}
            variants={fadeIn}
          >
            {vipPackages.map((pkg, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-lg font-semibold">{pkg.price}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{pkg.description}</p>

                  <ul className="mt-6 space-y-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex">
                        <svg className="flex-shrink-0 h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    to="/booking"
                    className="block w-full bg-blue-600 border border-transparent rounded-md py-3 px-6 text-center font-medium text-white hover:bg-blue-700"
                  >
                    {t('services:vip.packages.book_button', 'Book {{name}}', { name: pkg.name })}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              {t('services:vip.benefits.heading', 'Benefits of VIP Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:vip.benefits.subheading', 'Discover why discerning travelers choose our VIP services.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            custom={1}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
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
                          {benefit.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{benefit.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              {t('services:vip.testimonials.heading', 'What Our VIP Clients Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:vip.testimonials.subheading', 'Read testimonials from travelers who have experienced our exclusive VIP services.')}
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
            <span className="block">{t('services:vip.cta.heading', 'Ready to experience our exclusive VIP service?')}</span>
            <span className="block text-blue-200">{t('services:vip.cta.subheading', 'Book your premium airport experience today.')}</span>
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

export default VipPage;