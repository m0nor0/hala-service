import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const PriorityCheckinPage: React.FC = () => {
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

  // Priority Check-in service options
  const serviceOptions = [
    {
      name: t('services:priority_checkin.options.standard', 'Standard Priority Check-in'),
      description: t('services:priority_checkin.options.standard_desc', 'Expedited check-in process at dedicated counters with reduced waiting time.'),
      price: t('services:priority_checkin.options.standard_price', 'From $35'),
      image: '/images/service/priority-checkin.jpeg',
      features: [
        t('services:priority_checkin.features.dedicated_counter', 'Dedicated check-in counter'),
        t('services:priority_checkin.features.reduced_wait', 'Reduced waiting time'),
        t('services:priority_checkin.features.baggage_tags', 'Priority baggage tags'),
        t('services:priority_checkin.features.boarding_pass', 'Expedited boarding pass issuance')
      ]
    },
    {
      name: t('services:priority_checkin.options.premium', 'Premium Priority Check-in'),
      description: t('services:priority_checkin.options.premium_desc', 'Enhanced check-in experience with personal assistance and additional services.'),
      price: t('services:priority_checkin.options.premium_price', 'From $60'),
      image: '/images/service/priority-checkin-premium.jpeg',
      features: [
        t('services:priority_checkin.features.all_standard', 'All standard priority check-in features'),
        t('services:priority_checkin.features.personal_assistant', 'Personal check-in assistant'),
        t('services:priority_checkin.features.luggage_handling', 'Luggage handling assistance'),
        t('services:priority_checkin.features.fast_track_discount', 'Discounted Fast Track service'),
        t('services:priority_checkin.features.seat_selection', 'Preferred seat selection assistance')
      ]
    },
    {
      name: t('services:priority_checkin.options.vip', 'VIP Priority Check-in'),
      description: t('services:priority_checkin.options.vip_desc', 'Exclusive VIP check-in experience with comprehensive assistance and premium services.'),
      price: t('services:priority_checkin.options.vip_price', 'From $90'),
      image: '/images/service/priority-checkin-vip.jpeg',
      features: [
        t('services:priority_checkin.features.all_premium', 'All premium priority check-in features'),
        t('services:priority_checkin.features.private_area', 'Private check-in area'),
        t('services:priority_checkin.features.escort', 'Escort to security/immigration'),
        t('services:priority_checkin.features.lounge_access', 'Complimentary lounge access'),
        t('services:priority_checkin.features.concierge', 'Dedicated concierge service')
      ]
    },
  ];

  // Priority Check-in benefits
  const benefits = [
    {
      title: t('services:priority_checkin.benefits.time', 'Time Saving'),
      description: t('services:priority_checkin.benefits.time_desc', 'Significantly reduce your check-in time with dedicated counters and expedited processing.'),
      icon: '⏱️',
    },
    {
      title: t('services:priority_checkin.benefits.convenience', 'Convenience'),
      description: t('services:priority_checkin.benefits.convenience_desc', 'Enjoy a smoother start to your journey with personalized assistance and priority service.'),
      icon: '✨',
    },
    {
      title: t('services:priority_checkin.benefits.luggage', 'Luggage Priority'),
      description: t('services:priority_checkin.benefits.luggage_desc', 'Your luggage receives priority handling, ensuring it's among the first to arrive at baggage claim.'),
      icon: '🧳',
    },
    {
      title: t('services:priority_checkin.benefits.stress', 'Reduced Stress'),
      description: t('services:priority_checkin.benefits.stress_desc', 'Begin your journey with less stress and more comfort through our streamlined check-in process.'),
      icon: '😌',
    },
  ];

  // Testimonials specific to Priority Check-in service
  const testimonials = [
    {
      quote: t('services:priority_checkin.testimonials.quote1', "The Priority Check-in service was excellent. I was checked in within minutes, and my luggage was among the first to arrive at my destination. Definitely worth it for business travelers."),
      author: t('services:priority_checkin.testimonials.author1', "James Wilson"),
      role: t('services:priority_checkin.testimonials.role1', "Executive Traveler")
    },
    {
      quote: t('services:priority_checkin.testimonials.quote2', "As a family of five, check-in can be chaotic. The VIP Priority Check-in made it so much easier. The private area and dedicated staff helped us start our vacation stress-free."),
      author: t('services:priority_checkin.testimonials.author2', "Maria Rodriguez"),
      role: t('services:priority_checkin.testimonials.role2', "Family Traveler")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.priority_checkin') || "Priority Check-in Service"}
        subtitle={t('services:descriptions.priority_checkin', "Expedited check-in with dedicated counters") || undefined}
        imageUrl="/images/service/priority-checkin.jpeg"
        imageAlt={t('services:priority_checkin.image_alt', "Priority Check-in Service") || undefined}
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
              {t('services:priority_checkin.heading', 'Priority Check-in Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:priority_checkin.description', 'Start your journey smoothly with our expedited check-in service at dedicated counters.')}
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
                    src="/images/service/priority-checkin.jpeg"
                    alt={t('services:priority_checkin.image_alt', "Priority Check-in Service") || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:priority_checkin.content.summary', 'Our Priority Check-in service allows you to bypass regular check-in queues and enjoy a faster, more personalized check-in experience at dedicated counters.')}
                    </p>
                    <div className="mt-5 prose prose-indigo text-gray-500">
                      <p>
                        {t('services:priority_checkin.content.paragraph1', 'Airport check-in can often be time-consuming, especially during peak travel periods. Our Priority Check-in service provides access to dedicated counters with shorter queues, allowing you to complete the check-in process quickly and efficiently.')}
                      </p>
                      <p>
                        {t('services:priority_checkin.content.paragraph2', 'With our Priority Check-in service, you'll receive personalized assistance from our professional staff who will handle your check-in process, ensuring your boarding passes are issued promptly and your luggage is tagged for priority handling.')}
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
              {t('services:priority_checkin.options_heading', 'Priority Check-in Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:priority_checkin.options_description', 'Choose the Priority Check-in service that best suits your needs and preferences.')}
            </p>
          </motion.div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {serviceOptions.map((option, index) => (
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
                    {t('services:priority_checkin.book_now', 'Book Now')}
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
              {t('services:priority_checkin.benefits_heading', 'Benefits of Priority Check-in')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:priority_checkin.benefits_description', 'Discover the advantages of our Priority Check-in service.')}
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
              {t('services:priority_checkin.testimonials_heading', 'What Our Clients Say')}
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
              <span className="block">{t('services:priority_checkin.cta_heading', 'Ready for a smoother check-in experience?')}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              {t('services:priority_checkin.cta_description', 'Book our Priority Check-in service today and start your journey with ease and efficiency.')}
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

export default PriorityCheckinPage;