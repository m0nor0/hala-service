import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const MeetGreetPage: React.FC = () => {
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

  // Features of the Meet & Greet service
  const features = [
    {
      title: t('services:meet_greet.features.personal_assistance', 'Personal Assistance'),
      description: t('services:meet_greet.features.personal_assistance_desc', 'Our dedicated staff will meet you at the airport and guide you through all procedures.'),
      icon: '👋',
    },
    {
      title: t('services:features.fast_track'),
      description: t('services:feature_descriptions.fast_track', 'Skip the long lines at security and immigration checkpoints with our expedited service.'),
      icon: '⚡',
    },
    {
      title: t('services:meet_greet.features.baggage_assistance', 'Baggage Assistance'),
      description: t('services:meet_greet.features.baggage_assistance_desc', 'We help with your luggage from arrival to departure, ensuring a hassle-free experience.'),
      icon: '🧳',
    },
    {
      title: t('services:features.priority_checkin'),
      description: t('services:feature_descriptions.priority_checkin', 'Enjoy expedited check-in process with dedicated counters for a smoother start to your journey.'),
      icon: '✓',
    },
  ];

  // Testimonials specific to Meet & Greet service
  const testimonials = [
    {
      quote: t('services:meet_greet.testimonials.quote1', "The meet and greet service was exceptional. I was guided through the airport efficiently, saving me valuable time."),
      author: t('services:meet_greet.testimonials.author1', "James Wilson"),
      role: t('services:meet_greet.testimonials.role1', "Business Traveler")
    },
    {
      quote: t('services:meet_greet.testimonials.quote2', "As a first-time visitor, having someone meet me at the airport made my arrival stress-free and enjoyable."),
      author: t('services:meet_greet.testimonials.author2', "Maria Rodriguez"),
      role: t('services:meet_greet.testimonials.role2', "Tourist")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.meet_greet') || undefined}
        subtitle={t('services:descriptions.meet_greet') || undefined}
        imageUrl="/images/service/meet-greet.jpg"
        imageAlt={t('services:meet_greet.image_alt', 'Meet and Greet Service') || undefined}
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
              {t('services:meet_greet.heading', 'Personalized Airport Assistance')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:meet_greet.description', 'Our Meet & Greet service provides personalized assistance throughout your airport journey, ensuring a smooth and stress-free experience.')}
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
                    src="/images/service/meet-greet.jpg"
                    alt="Meet and Greet Service"
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:meet_greet.content.summary', 'Our Meet & Greet service is designed to make your airport experience as smooth and comfortable as possible. From the moment you arrive until your departure, our professional staff will be by your side to assist with all airport procedures.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:meet_greet.content.paragraph1', 'Whether you\'re a business traveler looking to save time, a family needing extra assistance, or a first-time visitor to a new airport, our Meet & Greet service provides the personal touch that makes all the difference.')}
                      </p>
                      <p>
                        {t('services:meet_greet.content.paragraph2', 'Our experienced staff will meet you at your arrival gate or at the terminal entrance, assist with immigration and customs procedures, help with baggage claim, and guide you to your transportation or connecting flight.')}
                      </p>
                      <p>
                        {t('services:meet_greet.content.paragraph3', 'For departures, we\'ll assist with check-in, expedite security and immigration procedures, and escort you to your departure gate or airport lounge, ensuring a stress-free start to your journey.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
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
              {t('services:meet_greet.features.heading', 'Service Features')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:meet_greet.features.subheading', 'Discover the exclusive features of our Meet & Greet service.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10"
            custom={1}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
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
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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
              {t('services:meet_greet.testimonials.heading', 'What Our Clients Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:meet_greet.testimonials.subheading', 'Read testimonials from travelers who have experienced our Meet & Greet service.')}
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
            <span className="block">{t('services:meet_greet.cta.heading', 'Ready to experience our Meet & Greet service?')}</span>
            <span className="block text-blue-200">{t('services:meet_greet.cta.subheading', 'Book your personalized airport assistance today.')}</span>
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

export default MeetGreetPage;