import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/bookingpage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import MeetGreetPage from './pages/MeetGreetPage';
import LoungesPage from './pages/LoungesPage';
import VipPage from './pages/VipPage';
import TransferPage from './pages/TransferPage';
import BaggagePage from './pages/BaggagePage';
import ChauffeurPage from './pages/ChauffeurPage';
import FastTrackPage from './pages/FastTrackPage';
import PriorityCheckinPage from './pages/PriorityCheckinPage';
import AirportLoungePage from './pages/AirportLoungePage';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

// Import i18n configuration
import './i18n/config';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/meet-greet" element={<MeetGreetPage />} />
          <Route path="/services/lounges" element={<LoungesPage />} />
          <Route path="/services/vip" element={<VipPage />} />
          <Route path="/services/transfer" element={<TransferPage />} />
          <Route path="/services/baggage" element={<BaggagePage />} />
          <Route path="/services/chauffeur" element={<ChauffeurPage />} />
          <Route path="/services/fast-track" element={<FastTrackPage />} />
          <Route path="/services/priority-checkin" element={<PriorityCheckinPage />} />
          <Route path="/services/airport-lounge" element={<AirportLoungePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<div className="py-10 text-center"><h1 className="text-2xl font-bold">Page Not Found</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
