import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceHero from '../components/ui/ServiceHero';
import ServiceCard from '../components/ui/ServiceCard';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation(['services', 'common']);

  // Services data
  const services = [
    {
      title: t('services:categories.meet-greet'),
      description: t('services:descriptions.meet-greet'),
      icon: '👋',
      link: '/services/meet-greet'
    },
    {
      title: t('services:categories.lounges'),
      description: t('services:descriptions.lounges'),
      icon: '🛋️',
      link: '/services/lounges'
    },
    {
      title: t('services:categories.vip'),
      description: t('services:descriptions.vip'),
      icon: '⭐',
      link: '/services/vip'
    },
    {
      title: t('services:categories.transfer'),
      description: t('services:descriptions.transfer'),
      icon: '🚗',
      link: '/services/transfer'
    },
    {
      title: t('services:categories.baggage'),
      description: t('services:descriptions.baggage'),
      icon: '🧳',
      link: '/services/baggage'
    },
    {
      title: t('services:categories.chauffeur'),
      description: t('services:descriptions.chauffeur'),
      icon: '🚘',
      link: '/services/chauffeur'
    }
  ];

  const features = [
    {
      name: t('services:features.fast_track'),
      description: t('services:feature_descriptions.fast_track', 'Skip the long lines at security and immigration checkpoints.'),
      icon: '⚡'
    },
    {
      name: t('services:features.priority_checkin'),
      description: t('services:feature_descriptions.priority_checkin', 'Expedited check-in process with dedicated counters.'),
      icon: '✓'
    },
    {
      name: t('services:features.lounge_access'),
      description: t('services:feature_descriptions.lounge_access', 'Relax in exclusive airport lounges before your flight.'),
      icon: '🛋️'
    },
    {
      name: t('services:features.porter_service'),
      description: t('services:feature_descriptions.porter_service', 'Assistance with your luggage throughout the airport.'),
      icon: '🧳'
    },
    {
      name: t('services:features.private_security'),
      description: t('services:feature_descriptions.private_security', 'Private security screening for enhanced privacy and comfort.'),
      icon: '🔒'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <ServiceHero
        title={t('services:hero.title') as string}
        subtitle={t('services:hero.subtitle') as string}
        imageUrl="/images/airport-services.jpg"
        imageAlt="Airport services"
      />
      
      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('services:hero.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('common:services_description', 'Choose from our range of exclusive airport services designed to enhance your travel experience.')}
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('common:features.premium_features', 'Premium Features')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('common:features.enjoy_exclusive', 'Enjoy these exclusive features with our airport services.')}
            </p>
          </div>
          
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('common:cta.ready_services', 'Ready to experience our services?')}</span>
            <span className="block text-blue-200">{t('common:cta.book_today', 'Book your airport service today.')}</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/booking" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                {t('common:buttons.book_now', 'Book Now')}
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400">
                {t('common:navigation.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;