import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const FastTrackPage: React.FC = () => {
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

  // Fast Track service options
  const serviceOptions = [
    {
      name: t('services:fast_track.options.standard', 'Standard Fast Track'),
      description: t('services:fast_track.options.standard_desc', 'Skip the regular lines at security and immigration checkpoints.'),
      price: t('services:fast_track.options.standard_price', 'From $40'),
      features: [
        t('services:fast_track.features.security', 'Priority security screening'),
        t('services:fast_track.features.immigration', 'Expedited immigration process'),
        t('services:fast_track.features.assistance', 'Staff assistance throughout the process'),
        t('services:fast_track.features.time_saving', 'Save up to 45 minutes during peak hours')
      ]
    },
    {
      name: t('services:fast_track.options.premium', 'Premium Fast Track'),
      description: t('services:fast_track.options.premium_desc', 'Enhanced fast track service with additional benefits for a smoother journey.'),
      price: t('services:fast_track.options.premium_price', 'From $65'),
      features: [
        t('services:fast_track.features.security', 'Priority security screening'),
        t('services:fast_track.features.immigration', 'Expedited immigration process'),
        t('services:fast_track.features.dedicated', 'Dedicated fast track lanes'),
        t('services:fast_track.features.personal', 'Personal escort throughout the airport'),
        t('services:fast_track.features.lounge', 'Complimentary lounge access (30 minutes)'),
        t('services:fast_track.features.refreshment', 'Welcome refreshment')
      ]
    },
    {
      name: t('services:fast_track.options.family', 'Family Fast Track'),
      description: t('services:fast_track.options.family_desc', 'Specially designed fast track service for families traveling with children.'),
      price: t('services:fast_track.options.family_price', 'From $90'),
      features: [
        t('services:fast_track.features.security', 'Priority security screening'),
        t('services:fast_track.features.immigration', 'Expedited immigration process'),
        t('services:fast_track.features.family_lane', 'Family-friendly fast track lane'),
        t('services:fast_track.features.stroller', 'Stroller assistance'),
        t('services:fast_track.features.kids_area', 'Access to kids play area'),
        t('services:fast_track.features.family_assistance', 'Specialized assistance for families')
      ]
    },
  ];

  // Fast Track service benefits
  const benefits = [
    {
      title: t('services:fast_track.benefits.time', 'Time Efficiency'),
      description: t('services:fast_track.benefits.time_desc', 'Significantly reduce waiting time at security and immigration checkpoints.'),
      icon: '⏱️',
    },
    {
      title: t('services:fast_track.benefits.stress', 'Stress Reduction'),
      description: t('services:fast_track.benefits.stress_desc', 'Eliminate the anxiety of long queues and tight connections.'),
      icon: '😌',
    },
    {
      title: t('services:fast_track.benefits.priority', 'Priority Treatment'),
      description: t('services:fast_track.benefits.priority_desc', 'Enjoy VIP treatment with dedicated lanes and personalized service.'),
      icon: '⭐',
    },
    {
      title: t('services:fast_track.benefits.flexibility', 'Flexibility'),
      description: t('services:fast_track.benefits.flexibility_desc', 'Perfect for tight connections or maximizing your time at the destination.'),
      icon: '🔄',
    },
  ];

  // Testimonials specific to fast track service
  const testimonials = [
    {
      quote: t('services:fast_track.testimonials.quote1', "The fast track service saved me at least an hour during my connection. Worth every penny!"),
      author: t('services:fast_track.testimonials.author1', "James Wilson"),
      role: t('services:fast_track.testimonials.role1', "Business Traveler")
    },
    {
      quote: t('services:fast_track.testimonials.quote2', "Traveling with three kids was so much easier with the family fast track. The staff was incredibly helpful."),
      author: t('services:fast_track.testimonials.author2', "Maria Rodriguez"),
      role: t('services:fast_track.testimonials.role2', "Family Traveler")
    },
    {
      quote: t('services:fast_track.testimonials.quote3', "I was skeptical at first, but after missing a flight due to long security lines, I now always book the fast track service."),
      author: t('services:fast_track.testimonials.author3', "Ahmed Al-Farsi"),
      role: t('services:fast_track.testimonials.role3', "Frequent Flyer")
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:fast_track.hero.title', 'Fast Track Service') as string}
        subtitle={t('services:fast_track.hero.subtitle', 'Skip the lines and save valuable time with our expedited airport services') as string}
        imageUrl="/images/service/fast-track.jpg"
        imageAlt="Fast Track Service"
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
              {t('services:fast_track.intro.title', 'Expedited Airport Experience')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.intro.description', 'Our Fast Track service allows you to bypass long queues at security and immigration checkpoints, saving you valuable time and reducing stress during your journey.')}
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
              {t('services:fast_track.options.title', 'Our Fast Track Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.options.subtitle', 'Choose the fast track service that best suits your needs')}
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
              {t('services:fast_track.how_it_works.title', 'How It Works')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.how_it_works.subtitle', 'Simple steps to enjoy our Fast Track service')}
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
                  {t('services:fast_track.how_it_works.process', 'The Process')}
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
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:fast_track.how_it_works.step1', 'Book Online')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:fast_track.how_it_works.step1_desc', 'Select your Fast Track service and complete the booking process online.')}
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
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:fast_track.how_it_works.step2', 'Receive Confirmation')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:fast_track.how_it_works.step2_desc', 'Get your booking confirmation with all necessary details via email.')}
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
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:fast_track.how_it_works.step3', 'Meet Our Staff')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:fast_track.how_it_works.step3_desc', 'Our representative will meet you at the designated meeting point.')}
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
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{t('services:fast_track.how_it_works.step4', 'Enjoy Fast Track')}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {t('services:fast_track.how_it_works.step4_desc', 'Skip the lines and enjoy expedited processing through security and immigration.')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials Section */}
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
            <span className="block">{t('services:fast_track.cta.ready', 'Ready to skip the lines?')}</span>
            <span className="block text-blue-200">{t('services:fast_track.cta.book_today', 'Book your Fast Track service today.')}</span>
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

export default FastTrackPage;