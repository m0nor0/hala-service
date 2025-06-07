import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const TransferPage: React.FC = () => {
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

  // Transfer vehicle options
  const vehicleOptions = [
    {
      name: t('services:transfer.vehicles.sedan', 'Executive Sedan'),
      description: t('services:transfer.vehicles.sedan_desc', 'Comfortable and stylish sedan for individuals or couples with standard luggage.'),
      capacity: t('services:transfer.capacity.sedan', 'Up to 2 passengers'),
      luggage: t('services:transfer.luggage.sedan', '2 standard suitcases'),
      image: '/images/service/transfer.jpeg',
      features: [
        t('services:transfer.features.chauffeur', 'Professional chauffeur'),
        t('services:transfer.features.ac', 'Air conditioning'),
        t('services:transfer.features.water', 'Complimentary bottled water'),
        t('services:transfer.features.wifi', 'Wi-Fi available'),
        t('services:transfer.features.flight_monitoring', 'Flight monitoring'),
        t('services:transfer.features.meet_greet', 'Meet & greet service')
      ]
    },
    {
      name: t('services:transfer.vehicles.suv', 'Business SUV'),
      description: t('services:transfer.vehicles.suv_desc', 'Spacious SUV offering extra comfort and luggage space for small groups or families.'),
      capacity: t('services:transfer.capacity.suv', 'Up to 4 passengers'),
      luggage: t('services:transfer.luggage.suv', '4 standard suitcases'),
      image: '/images/service/transfer.jpeg',
      features: [
        t('services:transfer.features.chauffeur', 'Professional chauffeur'),
        t('services:transfer.features.ac', 'Air conditioning'),
        t('services:transfer.features.water', 'Complimentary bottled water'),
        t('services:transfer.features.wifi', 'Wi-Fi available'),
        t('services:transfer.features.flight_monitoring', 'Flight monitoring'),
        t('services:transfer.features.meet_greet', 'Meet & greet service'),
        t('services:transfer.features.legroom', 'Extra legroom')
      ]
    },
    {
      name: t('services:transfer.vehicles.van', 'Luxury Van'),
      description: t('services:transfer.vehicles.van_desc', 'Premium van with ample space for larger groups and substantial luggage requirements.'),
      capacity: t('services:transfer.capacity.van', 'Up to 7 passengers'),
      luggage: t('services:transfer.luggage.van', '7 standard suitcases'),
      image: '/images/service/transfer.jpeg',
      features: [
        t('services:transfer.features.chauffeur', 'Professional chauffeur'),
        t('services:transfer.features.ac', 'Air conditioning'),
        t('services:transfer.features.snacks', 'Complimentary bottled water and snacks'),
        t('services:transfer.features.wifi', 'Wi-Fi available'),
        t('services:transfer.features.flight_monitoring', 'Flight monitoring'),
        t('services:transfer.features.meet_greet', 'Meet & greet service'),
        t('services:transfer.features.seating', 'Spacious seating arrangement')
      ]
    },
  ];

  // Transfer service benefits
  const benefits = [
    {
      title: t('services:transfer.benefits.reliability', 'Reliability'),
      description: t('services:transfer.benefits.reliability_desc', 'Punctual service with real-time flight monitoring to adjust for any schedule changes.'),
      icon: '⏰',
    },
    {
      title: t('services:transfer.benefits.comfort', 'Comfort'),
      description: t('services:transfer.benefits.comfort_desc', 'Travel in premium vehicles with professional chauffeurs for a stress-free journey.'),
      icon: '🛋️',
    },
    {
      title: t('services:transfer.benefits.convenience', 'Convenience'),
      description: t('services:transfer.benefits.convenience_desc', 'Door-to-door service with no waiting or navigating unfamiliar transportation systems.'),
      icon: '🚪',
    },
    {
      title: t('services:transfer.benefits.safety', 'Safety'),
      description: t('services:transfer.benefits.safety_desc', 'Professional drivers with extensive knowledge of local routes and safety protocols.'),
      icon: '🛡️',
    },
  ];

  // Testimonials specific to transfer service
  const testimonials = [
    {
      quote: t('services:transfer.testimonials.quote1', "After a long international flight, having a driver waiting for me made all the difference. The vehicle was immaculate and the driver was professional and courteous."),
      author: t('services:transfer.testimonials.author1', "Michael Chen"),
      role: t('services:transfer.testimonials.role1', "Business Traveler")
    },
    {
      quote: t('services:transfer.testimonials.quote2', "Traveling with my family and all our luggage was made so much easier with Hala's transfer service. The spacious vehicle and helpful driver ensured we started our vacation stress-free."),
      author: t('services:transfer.testimonials.author2', "Sarah Johnson"),
      role: t('services:transfer.testimonials.role2', "Family Traveler")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.transfer') || undefined}
        subtitle={t('services:descriptions.transfer', "Premium airport transfers with professional chauffeurs") || undefined}
        imageUrl="/images/service/transfer.jpeg"
        imageAlt={t('services:transfer.image_alt', "Airport Transfer Services") || undefined}
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
              {t('services:transfer.heading', 'Premium Airport Transfer Services')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:transfer.description', 'Seamless, comfortable transportation to and from the airport with professional chauffeurs.')}
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
                    src="/images/service/transfer.jpeg"
                    alt={t('services:transfer.image_alt', 'Airport Transfer Services') || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:transfer.content.summary', 'Our airport transfer service provides reliable, comfortable transportation with professional chauffeurs for a stress-free journey to or from the airport.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:transfer.content.paragraph1', 'Whether you\'re arriving after a long flight or heading to the airport for departure, our transfer service ensures a smooth, comfortable journey. We offer a range of premium vehicles to suit your needs, from executive sedans to spacious vans for groups or families with substantial luggage.')}
                      </p>
                      <p>
                        {t('services:transfer.content.paragraph2', 'For arrivals, your professional chauffeur will monitor your flight and be waiting at the designated meeting point, ready to assist with your luggage and transport you to your destination. For departures, your chauffeur will arrive punctually at your location, help with your luggage, and ensure you reach the airport with plenty of time for check-in.')}
                      </p>
                      <p>
                        {t('services:transfer.content.paragraph3', 'All our vehicles are meticulously maintained, air-conditioned, and equipped with amenities to enhance your comfort. Our professional chauffeurs are experienced, knowledgeable about local routes, and committed to providing exceptional service.')}
                      </p>
                      <p>
                        {t('services:transfer.content.paragraph4', 'With our transfer service, you can avoid the stress of navigating public transportation or waiting for taxis, and instead enjoy a personalized, door-to-door experience that perfectly complements your journey.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vehicle Options Section */}
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
              {t('services:transfer.vehicles.heading', 'Our Vehicle Options')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:transfer.vehicles.subheading', 'Choose the perfect vehicle for your transfer needs.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8"
            custom={1}
            variants={fadeIn}
          >
            {vehicleOptions.map((vehicle, index) => (
              <motion.div 
                key={index} 
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="flex-1">
                  <div className="w-full overflow-hidden rounded-lg">
                    <img src={vehicle.image} alt={t('services:transfer.vehicles.image_alt', '{{name}}', { name: vehicle.name }) || undefined} className="w-full h-48 object-cover" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{vehicle.name}</h3>
                  <p className="mt-3 text-gray-500">{vehicle.description}</p>
                  
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2">{vehicle.capacity}</span>
                    </span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-2">{vehicle.luggage}</span>
                    </span>
                  </div>

                  <ul className="mt-6 space-y-4">
                    {vehicle.features.map((feature, featureIndex) => (
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
                    {t('services:transfer.vehicles.book_button', 'Book {{name}}', { name: vehicle.name })}
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
              {t('services:transfer.benefits.heading', 'Benefits of Our Transfer Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:transfer.benefits.subheading', 'Experience the advantages of our premium airport transfer service.')}
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
              {t('services:transfer.how_it_works.heading', 'How Our Transfer Service Works')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:transfer.how_it_works.subheading', 'A simple, seamless process from booking to arrival.')}
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
                  <h3 className="text-lg font-medium text-gray-900">{t('services:transfer.how_it_works.step1.title', 'Book Your Transfer')}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {t('services:transfer.how_it_works.step1.description', 'Select your vehicle type, provide your flight and contact details, and complete your booking online or through our customer service team.')}
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{t('services:transfer.how_it_works.step2.title', 'Receive Confirmation')}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {t('services:transfer.how_it_works.step2.description', 'Get instant confirmation with all your transfer details, chauffeur contact information, and meeting instructions.')}
                  </p>
                </div>
              </div>

              <div className="relative mt-10 lg:mt-0">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{t('services:transfer.how_it_works.step3.title', 'Meet Your Chauffeur')}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {t('services:transfer.how_it_works.step3.description', 'Your professional chauffeur will be waiting at the designated meeting point with a personalized sign, ready to assist with your luggage and transport you to your destination.')}
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
              {t('services:transfer.testimonials.heading', 'What Our Clients Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:transfer.testimonials.subheading', 'Read testimonials from travelers who have experienced our transfer services.')}
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
            <span className="block">{t('services:transfer.cta.heading', 'Ready to book your airport transfer?')}</span>
            <span className="block text-blue-200">{t('services:transfer.cta.subheading', 'Secure your premium transportation today.')}</span>
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

export default TransferPage;