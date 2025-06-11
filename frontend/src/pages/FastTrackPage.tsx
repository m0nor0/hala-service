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
      description: t('services:fast_track.options.standard_desc', 'Expedited passage through security and immigration checkpoints.'),
      price: t('services:fast_track.options.standard_price', 'From $40'),
      image: '/images/service/fast-track.jpeg',
      features: [
        t('services:fast_track.features.security', 'Priority security screening'),
        t('services:fast_track.features.immigration', 'Expedited immigration clearance'),
        t('services:fast_track.features.assistance', 'Basic assistance'),
        t('services:fast_track.features.time_saving', 'Significant time saving')
      ]
    },
    {
      name: t('services:fast_track.options.premium', 'Premium Fast Track'),
      description: t('services:fast_track.options.premium_desc', 'Enhanced expedited service with personal escort and additional assistance.'),
      price: t('services:fast_track.options.premium_price', 'From $70'),
      image: '/images/service/fast-track-premium.jpeg',
      features: [
        t('services:fast_track.features.all_standard', 'All standard Fast Track features'),
        t('services:fast_track.features.personal_escort', 'Personal escort through checkpoints'),
        t('services:fast_track.features.luggage_assistance', 'Luggage assistance'),
        t('services:fast_track.features.priority_lanes', 'Access to exclusive priority lanes'),
        t('services:fast_track.features.lounge_discount', 'Discounted lounge access')
      ]
    },
    {
      name: t('services:fast_track.options.family', 'Family Fast Track'),
      description: t('services:fast_track.options.family_desc', 'Specialized Fast Track service designed for families traveling with children.'),
      price: t('services:fast_track.options.family_price', 'From $100'),
      image: '/images/service/fast-track-family.jpeg',
      features: [
        t('services:fast_track.features.all_premium', 'All premium Fast Track features'),
        t('services:fast_track.features.family_lane', 'Family-friendly priority lanes'),
        t('services:fast_track.features.child_assistance', 'Special assistance for children'),
        t('services:fast_track.features.stroller', 'Stroller and baby equipment handling'),
        t('services:fast_track.features.family_seating', 'Family seating arrangement assistance')
      ]
    },
  ];

  // Fast Track benefits
  const benefits = [
    {
      title: t('services:fast_track.benefits.time', 'Time Efficiency'),
      description: t('services:fast_track.benefits.time_desc', 'Save valuable time by bypassing long queues at security and immigration.'),
      icon: '⏱️',
    },
    {
      title: t('services:fast_track.benefits.stress', 'Reduced Stress'),
      description: t('services:fast_track.benefits.stress_desc', 'Enjoy a smoother, less stressful airport experience with priority processing.'),
      icon: '😌',
    },
    {
      title: t('services:fast_track.benefits.assistance', 'Personal Assistance'),
      description: t('services:fast_track.benefits.assistance_desc', 'Receive guidance and support from experienced staff throughout the process.'),
      icon: '🤝',
    },
    {
      title: t('services:fast_track.benefits.privacy', 'Enhanced Privacy'),
      description: t('services:fast_track.benefits.privacy_desc', 'Experience more privacy and personal space during security and immigration procedures.'),
      icon: '🔒',
    },
  ];

  // Testimonials specific to Fast Track service
  const testimonials = [
    {
      quote: t('services:fast_track.testimonials.quote1', "The Fast Track service was a game-changer for my business trip. I was able to clear security and immigration in minutes, giving me extra time to prepare for my meeting."),
      author: t('services:fast_track.testimonials.author1', "Robert Johnson"),
      role: t('services:fast_track.testimonials.role1', "Business Traveler")
    },
    {
      quote: t('services:fast_track.testimonials.quote2', "Traveling with three young children is usually stressful, but the Family Fast Track service made it so much easier. The staff was incredibly helpful and patient with our kids."),
      author: t('services:fast_track.testimonials.author2', "Sarah Williams"),
      role: t('services:fast_track.testimonials.role2', "Family Traveler")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.fast_track') || "Fast Track Service"}
        subtitle={t('services:descriptions.fast_track', "Expedited security and immigration clearance") || undefined}
        imageUrl="/images/service/fast-track.jpeg"
        imageAlt={t('services:fast_track.image_alt', "Fast Track Service") || undefined}
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
              {t('services:fast_track.heading', 'Fast Track Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.description', 'Skip the lines and save time with our expedited security and immigration clearance service.')}
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
                    src="/images/service/fast-track.jpeg"
                    alt={t('services:fast_track.image_alt', "Fast Track Service") || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:fast_track.content.summary', 'Our Fast Track service allows you to bypass long queues at security and immigration checkpoints, saving you valuable time and reducing stress during your journey.')}
                    </p>
                    <div className="mt-5 prose prose-indigo text-gray-500">
                      <p>
                        {t('services:fast_track.content.paragraph1', 'Airport security and immigration procedures can be time-consuming, especially during peak travel periods. Our Fast Track service provides expedited processing through these checkpoints, allowing you to move through the airport quickly and efficiently.')}
                      </p>
                      <p>
                        {t('services:fast_track.content.paragraph2', "With our Fast Track service, you'll be escorted to dedicated priority lanes, bypassing the regular queues. Our experienced staff will assist you throughout the process, ensuring a smooth and hassle-free experience.")}
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
              {t('services:fast_track.options_heading', 'Fast Track Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.options_description', 'Choose the Fast Track service that best suits your needs and preferences.')}
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
                    {t('services:fast_track.book_now', 'Book Now')}
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
              {t('services:fast_track.benefits_heading', 'Benefits of Fast Track Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:fast_track.benefits_description', 'Discover the advantages of our Fast Track service.')}
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
              {t('services:fast_track.testimonials_heading', 'What Our Clients Say')}
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
              <span className="block">{t('services:fast_track.cta_heading', 'Ready to save time at the airport?')}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-200">
              {t('services:fast_track.cta_description', 'Book our Fast Track service today and enjoy a smoother, faster airport experience.')}
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

export default FastTrackPage;