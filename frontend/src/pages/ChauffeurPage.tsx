import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ServiceHero from '../components/ui/ServiceHero';
import Testimonial from '../components/ui/Testimonial';

const ChauffeurPage: React.FC = () => {
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

  // Chauffeur service options
  const serviceOptions = [
    {
      name: t('services:chauffeur.options.airport', 'Airport Transfer'),
      description: t('services:chauffeur.options.airport_desc', 'Luxury transportation to or from the airport with professional chauffeur service.'),
      price: t('services:chauffeur.options.airport_price', 'From $80'),
      image: '/images/service/chauffeur.jpeg',
      features: [
        t('services:chauffeur.features.uniformed', 'Professional uniformed chauffeur'),
        t('services:chauffeur.features.vehicle_options', 'Luxury sedan, SUV, or van options'),
        t('services:chauffeur.features.flight_monitoring', 'Flight monitoring and adjustment for delays'),
        t('services:chauffeur.features.meet_greet', 'Meet and greet service with name sign'),
        t('services:chauffeur.features.wait_time', 'Complimentary wait time'),
        t('services:chauffeur.features.luggage', 'Luggage assistance'),
        t('services:chauffeur.features.door_to_door', 'Door-to-door service')
      ]
    },
    {
      name: t('services:chauffeur.options.hourly', 'Hourly Charter'),
      description: t('services:chauffeur.options.hourly_desc', 'Flexible chauffeur service charged by the hour for meetings, events, or sightseeing.'),
      price: t('services:chauffeur.options.hourly_price', 'From $100/hour'),
      image: '/images/service/chauffeur.jpeg',
      features: [
        t('services:chauffeur.features.uniformed', 'Professional uniformed chauffeur'),
        t('services:chauffeur.features.luxury_vehicle', 'Luxury vehicle of your choice'),
        t('services:chauffeur.features.flexible_itinerary', 'Flexible itinerary'),
        t('services:chauffeur.features.multiple_stops', 'Multiple stops as needed'),
        t('services:chauffeur.features.personalized', 'Personalized service'),
        t('services:chauffeur.features.water', 'Complimentary bottled water'),
        t('services:chauffeur.features.wifi', 'Wi-Fi available in select vehicles')
      ]
    },
    {
      name: t('services:chauffeur.options.corporate', 'Corporate Service'),
      description: t('services:chauffeur.options.corporate_desc', 'Premium transportation solutions for business executives and corporate events.'),
      price: t('services:chauffeur.options.corporate_price', 'Custom pricing'),
      image: '/images/service/chauffeur.jpeg',
      features: [
        t('services:chauffeur.features.executive_fleet', 'Executive fleet vehicles'),
        t('services:chauffeur.features.trained_chauffeurs', 'Professionally trained chauffeurs'),
        t('services:chauffeur.features.account_management', 'Corporate account management'),
        t('services:chauffeur.features.billing', 'Centralized billing options'),
        t('services:chauffeur.features.coordination', 'Roadshow and event coordination'),
        t('services:chauffeur.features.global_network', 'Global service network'),
        t('services:chauffeur.features.confidentiality', 'Confidentiality guaranteed')
      ]
    },
  ];

  // Chauffeur service benefits
  const benefits = [
    {
      title: t('services:chauffeur.benefits.professionalism', 'Professionalism'),
      description: t('services:chauffeur.benefits.professionalism_desc', 'Experienced, professionally trained chauffeurs in formal attire providing exceptional service.'),
      icon: '👔',
    },
    {
      title: t('services:chauffeur.benefits.reliability', 'Reliability'),
      description: t('services:chauffeur.benefits.reliability_desc', 'Punctual service with immaculately maintained luxury vehicles for consistent quality.'),
      icon: '⏰',
    },
    {
      title: t('services:chauffeur.benefits.comfort', 'Comfort'),
      description: t('services:chauffeur.benefits.comfort_desc', 'Premium vehicles with spacious interiors and amenities for a relaxing journey.'),
      icon: '🛋️',
    },
    {
      title: t('services:chauffeur.benefits.convenience', 'Convenience'),
      description: t('services:chauffeur.benefits.convenience_desc', 'Door-to-door service with personalized attention to your specific requirements.'),
      icon: '✨',
    },
  ];

  // Fleet options
  const fleetOptions = [
    {
      type: t('services:chauffeur.fleet.sedan', 'Luxury Sedan'),
      description: t('services:chauffeur.fleet.sedan_desc', 'Elegant and comfortable sedans perfect for individual travelers or couples.'),
      capacity: t('services:chauffeur.fleet.sedan_capacity', 'Up to 2 passengers'),
      examples: t('services:chauffeur.fleet.sedan_examples', 'Mercedes-Benz S-Class, BMW 7 Series, Audi A8')
    },
    {
      type: t('services:chauffeur.fleet.suv', 'Executive SUV'),
      description: t('services:chauffeur.fleet.suv_desc', 'Spacious luxury SUVs offering additional comfort and luggage space.'),
      capacity: t('services:chauffeur.fleet.suv_capacity', 'Up to 4 passengers'),
      examples: t('services:chauffeur.fleet.suv_examples', 'Mercedes-Benz GLS, BMW X7, Cadillac Escalade')
    },
    {
      type: t('services:chauffeur.fleet.van', 'Luxury Van'),
      description: t('services:chauffeur.fleet.van_desc', 'Premium vans with ample space for larger groups and substantial luggage.'),
      capacity: t('services:chauffeur.fleet.van_capacity', 'Up to 7 passengers'),
      examples: t('services:chauffeur.fleet.van_examples', 'Mercedes-Benz V-Class, Volkswagen Multivan')
    },
    {
      type: t('services:chauffeur.fleet.limo', 'Stretch Limousine'),
      description: t('services:chauffeur.fleet.limo_desc', 'The ultimate luxury experience for special occasions and VIP transportation.'),
      capacity: t('services:chauffeur.fleet.limo_capacity', 'Up to 8 passengers'),
      examples: t('services:chauffeur.fleet.limo_examples', 'Lincoln Stretch, Mercedes-Benz Stretch')
    },
  ];

  // Testimonials specific to chauffeur service
  const testimonials = [
    {
      quote: t('services:chauffeur.testimonials.quote1', "The chauffeur service was impeccable. Our driver was professional, punctual, and provided excellent service throughout our business trip. The vehicle was luxurious and immaculately maintained."),
      author: t('services:chauffeur.testimonials.author1', "Jonathan Blake"),
      role: t('services:chauffeur.testimonials.role1', "CFO, Global Investments")
    },
    {
      quote: t('services:chauffeur.testimonials.quote2', "We used the hourly charter service for our wedding day transportation, and it exceeded all expectations. The chauffeur was courteous and accommodating, making our special day even more memorable."),
      author: t('services:chauffeur.testimonials.author2', "Sophia & Michael Reynolds"),
      role: t('services:chauffeur.testimonials.role2', "Newlyweds")
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:categories.chauffeur') || undefined}
        subtitle={t('services:descriptions.chauffeur', "Premium chauffeur services with luxury vehicles") || undefined}
        imageUrl="/images/service/chauffeur.jpeg"
        imageAlt={t('services:chauffeur.image_alt', "Chauffeur Services") || undefined}
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
              {t('services:chauffeur.heading', 'Premium Chauffeur Services')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.description', 'Exceptional transportation with professionally trained chauffeurs and luxury vehicles.')}
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
                    src="/images/service/chauffeur.jpeg"
                    alt={t('services:chauffeur.image_alt', "Chauffeur Services") || undefined}
                  />
                </div>
                <div className="lg:col-start-2">
                  <div className="text-base max-w-prose mx-auto lg:max-w-none">
                    <p className="text-lg text-gray-500">
                      {t('services:chauffeur.content.summary', 'Our chauffeur services combine luxury vehicles with professionally trained drivers to provide an exceptional transportation experience.')}
                    </p>
                    <div className="mt-5 prose prose-blue text-gray-500">
                      <p>
                        {t('services:chauffeur.content.paragraph1', 'Experience the ultimate in ground transportation with our premium chauffeur services. We provide more than just a driver – our professionally trained chauffeurs offer a comprehensive service experience focused on safety, reliability, and personalized attention to detail.')}
                      </p>
                      <p>
                        {t('services:chauffeur.content.paragraph2', 'Each of our chauffeurs undergoes rigorous training in defensive driving, etiquette, and customer service to ensure they meet our exacting standards. They are always impeccably presented in formal attire, punctual, and committed to providing discreet, professional service throughout your journey.')}
                      </p>
                      <p>
                        {t('services:chauffeur.content.paragraph3', 'Our luxury fleet includes a range of premium vehicles from world-renowned manufacturers, all meticulously maintained to the highest standards. From executive sedans and SUVs to luxury vans and stretch limousines, we have the perfect vehicle to meet your specific requirements and preferences.')}
                      </p>
                      <p>
                        {t('services:chauffeur.content.paragraph4', 'Whether you need airport transfers, hourly charters for business meetings or special events, or comprehensive corporate transportation solutions, our chauffeur services provide a seamless, stress-free experience that reflects your professional image and personal style.')}
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
              {t('services:chauffeur.services.heading', 'Our Chauffeur Services')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.services.subheading', 'Choose the service that best suits your transportation needs.')}
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
                  <div className="w-full overflow-hidden rounded-lg">
                    <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">{service.name}</h3>
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
                    {t('services:chauffeur.services.book_button', 'Book')} {service.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Fleet Section */}
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
              {t('services:chauffeur.fleet.heading', 'Our Luxury Fleet')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.fleet.subheading', 'Explore our range of premium vehicles available for your chauffeur service.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            custom={1}
            variants={fadeIn}
          >
            {fleetOptions.map((vehicle, index) => (
              <motion.div 
                key={index} 
                className="bg-white overflow-hidden shadow rounded-lg"
                custom={index + 2}
                variants={fadeIn}
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{vehicle.type}</h3>
                  <p className="mt-2 text-sm text-gray-500">{vehicle.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {vehicle.capacity}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-gray-500">
                    <span className="font-medium">Examples:</span> {vehicle.examples}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
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
              {t('services:chauffeur.benefits.heading', 'Benefits of Our Chauffeur Service')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.benefits.subheading', 'Why discerning clients choose our premium chauffeur services.')}
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
              {t('services:chauffeur.testimonials.heading', 'What Our Clients Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.testimonials.subheading', 'Read testimonials from clients who have experienced our chauffeur services.')}
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
              {t('services:chauffeur.faq.heading', 'Frequently Asked Questions')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('services:chauffeur.faq.subheading', 'Find answers to common questions about our chauffeur services.')}
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            custom={1}
            variants={fadeIn}
          >
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">{t('services:chauffeur.faq.q1', 'How far in advance should I book a chauffeur service?')}</dt>
                <dd className="mt-2 text-base text-gray-500">{t('services:chauffeur.faq.a1', 'We recommend booking at least 24 hours in advance to ensure availability, especially during peak travel seasons. For special events or corporate services, earlier booking is advisable.')}</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">{t('services:chauffeur.faq.q2', 'What happens if my flight is delayed?')}</dt>
                <dd className="mt-2 text-base text-gray-500">{t('services:chauffeur.faq.a2', 'Our chauffeurs monitor flight arrivals in real-time and adjust their schedule accordingly. There are no additional charges for standard flight delays.')}</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">{t('services:chauffeur.faq.q3', 'Can I request a specific vehicle model?')}</dt>
                <dd className="mt-2 text-base text-gray-500">{t('services:chauffeur.faq.a3', 'Yes, you can request specific vehicle models subject to availability. Please specify your preference when booking, and we will do our best to accommodate your request.')}</dd>
              </div>
              <div className="space-y-2">
                <dt className="text-lg leading-6 font-medium text-gray-900">{t('services:chauffeur.faq.q4', 'Do you offer corporate accounts?')}</dt>
                <dd className="mt-2 text-base text-gray-500">{t('services:chauffeur.faq.a4', 'Yes, we offer corporate accounts with customized billing options, dedicated account managers, and preferential rates for businesses with regular transportation needs.')}</dd>
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
            <span className="block">{t('services:chauffeur.cta.heading', 'Ready to experience premium transportation?')}</span>
            <span className="block text-blue-200">{t('services:chauffeur.cta.subheading', 'Book our professional chauffeur service today.')}</span>
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

export default ChauffeurPage;