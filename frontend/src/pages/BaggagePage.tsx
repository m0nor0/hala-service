import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const BaggagePage: React.FC = () => {
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

  // Baggage service options
  const serviceOptions = [
    {
      name: t('services:baggage.options.assistance', 'Baggage Assistance'),
      description: t('services:baggage.options.assistance_desc', 'Professional porters to handle your luggage throughout the airport journey.'),
      price: t('services:baggage.options.assistance_price', 'From $30'),
      features: [
        t('services:baggage.features.meet_greet', 'Meet and greet at arrival or departure'),
        t('services:baggage.features.handling', 'Luggage handling throughout the airport'),
        t('services:baggage.features.checkin', 'Assistance with check-in and baggage drop'),
        t('services:baggage.features.priority', 'Priority baggage collection'),
        t('services:baggage.features.cart', 'Cart service for multiple or heavy items')
      ]
    },
    {
      name: t('services:baggage.options.tracking', 'Baggage Tracking'),
      description: t('services:baggage.options.tracking_desc', 'Advanced tracking system to monitor your luggage location in real-time.'),
      price: t('services:baggage.options.tracking_price', 'From $20'),
      features: [
        t('services:baggage.features.realtime', 'Real-time location updates'),
        t('services:baggage.features.notifications', 'SMS or email notifications'),
        t('services:baggage.features.app', 'Mobile app tracking'),
        t('services:baggage.features.lost', 'Assistance with delayed or lost baggage'),
        t('services:baggage.features.support', '24/7 customer support')
      ]
    },
    {
      name: t('services:baggage.options.protection', 'Baggage Protection'),
      description: t('services:baggage.options.protection_desc', 'Comprehensive protection for your luggage against damage, loss, or theft.'),
      price: t('services:baggage.options.protection_price', 'From $25'),
      features: [
        t('services:baggage.features.wrapping', 'Secure wrapping service'),
        t('services:baggage.features.seals', 'Tamper-evident seals'),
        t('services:baggage.features.insurance', 'Insurance coverage options'),
        t('services:baggage.features.claims', 'Damage assessment and claims assistance'),
        t('services:baggage.features.replacement', 'Replacement assistance for essential items')
      ]
    },
  ];

  // Baggage service benefits
  const benefits = [
    {
      title: t('services:baggage.benefits.convenience', 'Convenience'),
      description: t('services:baggage.benefits.convenience_desc', 'Eliminate the stress of handling heavy luggage through crowded airports.'),
      icon: '🧳',
    },
    {
      title: t('services:baggage.benefits.time', 'Time Saving'),
      description: t('services:baggage.benefits.time_desc', 'Expedited baggage handling processes save valuable time during your journey.'),
      icon: '⏱️',
    },
    {
      title: t('services:baggage.benefits.peace', 'Peace of Mind'),
      description: t('services:baggage.benefits.peace_desc', 'Know your belongings are being handled with care and professionally tracked.'),
      icon: '✨',
    },
    {
      title: t('services:baggage.benefits.accessibility', 'Accessibility'),
      description: t('services:baggage.benefits.accessibility_desc', 'Essential assistance for elderly travelers, families, or those with mobility issues.'),
      icon: '♿',
    },
  ];

  // Testimonials specific to baggage service
  const testimonials = [
    {
      quote: t('services:baggage.testimonials.quote1', "Traveling with three children and multiple suitcases, the baggage assistance service was a lifesaver. The porters were efficient and friendly, making our airport experience so much smoother."),
      author: t('services:baggage.testimonials.author1', "Emma Rodriguez"),
      role: t('services:baggage.testimonials.role1', "Family Traveler")
    },
    {
      quote: t('services:baggage.testimonials.quote2', "After experiencing lost luggage on a previous trip, I used the baggage tracking service and felt completely at ease knowing exactly where my belongings were throughout my journey."),
      author: t('services:baggage.testimonials.author2', "David Thompson"),
      role: t('services:baggage.testimonials.role2', "Business Traveler")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.baggage') || undefined}
        subtitle={t('services:descriptions.baggage', "Professional baggage handling and tracking services") || undefined}
        imageUrl="/images/service/baggage.jpeg"
        imageAlt={t('services:baggage.image_alt', "Baggage Services") || undefined}
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
              {t('services:baggage.heading', 'Professional Baggage Services')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:baggage.description', 'Comprehensive solutions for hassle-free luggage handling and tracking.')}
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
                    src="/images/service/baggage.jpeg"
                    alt={t('services:baggage.image_alt', 'Baggage Services') || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:baggage.content.summary', 'Our baggage services are designed to eliminate the stress and physical strain of handling luggage during your airport journey.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:baggage.content.paragraph1', 'Navigating through busy airports with heavy luggage can be one of the most stressful aspects of travel. Our comprehensive baggage services are designed to eliminate this burden, providing you with a seamless, hands-free experience from the moment you arrive at the airport until you reach your final destination.')}
                      </p>
                      <p>
                        {t('services:baggage.content.paragraph2', 'Our professional porters will meet you at your vehicle or at the terminal entrance, handle all your luggage throughout your airport journey, assist with check-in procedures, and ensure your belongings are properly tagged and sent to the correct destination. For arriving passengers, we\'ll collect your luggage from the carousel and transport it to your arranged transportation.')}
                      </p>
                      <p>
                        {t('services:baggage.content.paragraph3', 'With our advanced tracking system, you can monitor the location of your luggage in real-time, receiving notifications at key points in the journey. This provides invaluable peace of mind, especially for travelers with connecting flights or those who have experienced lost luggage in the past.')}
                      </p>
                      <p>
                        {t('services:baggage.content.paragraph4', 'We also offer baggage protection services, including secure wrapping, tamper-evident seals, and insurance options to safeguard your belongings against damage, loss, or theft during transit.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Options Section */}
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
              Our Baggage Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Choose the service that best meets your needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
            custom={1}
            variants={fadeIn}
          >
            {serviceOptions.map((service, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-lg font-semibold">{service.price}</span>
                  </p>
                  <p className="mt-6 text-gray-500">{service.description}</p>

                  <ul className="mt-6 space-y-4">
                    {service.features.map((feature, featureIndex) => (
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
                    Book {service.name}
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
              Benefits of Our Baggage Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Why travelers choose our professional baggage handling solutions.
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

      {/* How It Works Section */}
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
              How Our Baggage Service Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              A simple process for stress-free luggage handling.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            custom={1}
            variants={fadeIn}
          >
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Book Your Service</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Select your desired baggage service, provide your flight and luggage details, and complete your booking online or through our customer service team.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Meet Our Team</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our professional porters will meet you at the designated location with identification, ready to assist with your luggage.
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">Enjoy Hassle-Free Travel</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Relax as our team handles your luggage throughout your airport journey, providing tracking updates and ensuring your belongings reach their destination safely.
                  </p>
                </div>
              </div>
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
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Read testimonials from travelers who have experienced our baggage services.
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

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Find answers to common questions about our baggage services.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            custom={1}
            variants={fadeIn}
          >
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">How many bags can your porters handle?</dt>
                <dd className="mt-2 text-base text-gray-500">Our standard service covers up to 3 pieces of luggage per person. For additional items, we offer extended services at a nominal extra charge.</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">How does the baggage tracking system work?</dt>
                <dd className="mt-2 text-base text-gray-500">Our tracking system uses secure tags with unique identifiers that are scanned at key points throughout your journey. You can access real-time updates via our mobile app or receive notifications by SMS or email.</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">What happens if my flight is delayed?</dt>
                <dd className="mt-2 text-base text-gray-500">Our team monitors flight schedules in real-time and adjusts accordingly. There's no need to notify us of delays as our service automatically adapts to your updated arrival or departure time.</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">Is baggage insurance included in your services?</dt>
                <dd className="mt-2 text-base text-gray-500">Basic coverage is included with all our services. We also offer premium insurance options for high-value items or travelers seeking additional peace of mind.</dd>
              </div>
            </dl>
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
            <span className="block">Ready for hassle-free luggage handling?</span>
            <span className="block text-blue-200">Book our professional baggage services today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/booking" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Book Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BaggagePage;