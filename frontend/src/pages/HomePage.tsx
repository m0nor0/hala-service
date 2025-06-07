import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/ui/Hero';
import ServiceCard from '../components/ui/ServiceCard';
import Testimonial from '../components/ui/Testimonial';

const HomePage: React.FC = () => {
  const { t } = useTranslation(['common', 'services']);

  // Services data
  const services = [
    {
      title: t('services:categories.meet_greet'),
      description: t('services:descriptions.meet_greet'),
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
  ];

  const testimonials = [
    {
      quote: t('common:testimonials.quote1', "Hala Service made my journey through Dubai Airport incredibly smooth. The fast-track service saved me hours of waiting time."),
      author: t('common:testimonials.author1', "Sarah Johnson"),
      role: t('common:testimonials.role1', "Business Traveler")
    },
    {
      quote: t('common:testimonials.quote2', "The VIP lounge access was perfect for our family layover. Comfortable seating, great food, and the kids had space to relax."),
      author: t('common:testimonials.author2', "Ahmed Al-Farsi"),
      role: t('common:testimonials.role2', "Family Traveler")
    },
    {
      quote: t('common:testimonials.quote3', "Their meet and greet service was exceptional. My elderly parents were well taken care of from arrival to departure."),
      author: t('common:testimonials.author3', "Michael Chen"),
      role: t('common:testimonials.role3', "Frequent Flyer")
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <Hero
        title={t('common:hero.home_title')}
        subtitle={t('common:hero.home_subtitle')}
        imageUrl="/images/airport-home.jpg"
        imageAlt="Airport terminal with planes"
        showButtons={true}
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
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              {t('common:features.why_choose_us', 'Why Choose Us')}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t('common:features.better_travel', 'A better way to travel')}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {t('common:features.experience_difference', 'Experience the difference with our premium airport services.')}
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('services:features.fast_track')}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t('services:feature_descriptions.fast_track', 'Skip the long lines and save valuable time with our expedited security and immigration services.')}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('services:features.lounge_access')}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t('services:feature_descriptions.lounge_access', 'Relax in comfort with access to premium airport lounges featuring complimentary food, drinks, and amenities.')}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('services:features.porter_service')}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t('services:feature_descriptions.porter_service', 'Let our professional porters handle your luggage, making your journey through the airport effortless.')}
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{t('services:features.priority_checkin')}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {t('services:feature_descriptions.priority_checkin', 'Enjoy dedicated check-in counters and priority boarding for a seamless airport experience.')}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t('common:testimonials.heading', 'What Our Customers Say')}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {t('common:testimonials.subheading', 'Don\'t just take our word for it — hear from some of our satisfied customers.')}
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
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
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">{t('common:cta.ready', 'Ready to elevate your travel experience?')}</span>
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

export default HomePage;