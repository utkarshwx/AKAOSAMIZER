import React, { useState, useRef } from 'react';
import { FaPlane, FaUser, FaSearch, FaSuitcase, FaExclamationTriangle, FaRobot, FaChartLine, FaBell, FaSignInAlt } from 'react-icons/fa';

export default function App() {
  const [flightNumber, setFlightNumber] = useState('');
  const [disruptionInfo, setDisruptionInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [flightSearch, setFlightSearch] = useState('');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ sender: 'bot', message: 'Hello! How can I assist you today?' }]);
  
  // Baggage tracking state
  const [baggageNumber, setBaggageNumber] = useState('');
  const [baggageInfo, setBaggageInfo] = useState(null);
  
  const homeRef = useRef(null);
  const dashboardRef = useRef(null);
  const disruptionRef = useRef(null);
  const baggageRef = useRef(null);
  const helpRef = useRef(null);
  const chatRef = useRef(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleFlightSearch = (e) => {
    e.preventDefault();
    alert(`Searching for flight: ${flightSearch}`);
    setFlightSearch('');
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('chatInput');
    const userMessage = input.value.trim();
    if (userMessage) {
      setChatMessages([...chatMessages, { sender: 'user', message: userMessage }]);
      // Simulate bot response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'bot', message: "I'm sorry, I'm just a demo bot. I can't actually help with your query." }]);
      }, 1000);
      input.value = '';
    }
  };

  const handleCheckDisruption = () => {
    // Replace this with actual logic to fetch disruption data
    if (flightNumber === 'ABC1234') {
      const hardcodedDisruptionData = {
        status: 'Delayed',
        flightNumbers: ['ABC1234', 'ABC1235'],
      };
      setDisruptionInfo(hardcodedDisruptionData);
    } else {
      setDisruptionInfo({ status: 'No disruptions found.' });
    }
  };
  
  const handleRebookFlight = (flightNumber) => {
    // Logic to rebook the flight (this is just a placeholder)
    alert(`Rebooking flight: ${flightNumber}`);
  };
  

  // Baggage tracking function
  const handleTrackBaggage = () => {
    if (baggageNumber === 'ABC123') {
      const hardcodedData = {
        status: 'In Transit',
        location: 'Chicago O\'Hare International Airport',
        estimatedDelivery: 'October 3, 2024, 12:00 PM',
      };
      setBaggageInfo(hardcodedData);
    } else {
      setBaggageInfo({ status: 'Not Found' });
    }
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-10 text-black">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaPlane className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-800">Akosamizer</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><button onClick={() => scrollToSection(homeRef)} className="text-gray-600 hover:text-orange-600">Home</button></li>
              {isLoggedIn && <li><button onClick={() => scrollToSection(dashboardRef)} className="text-gray-600 hover:text-orange-600">Dashboard</button></li>}
              <li><button onClick={() => scrollToSection(disruptionRef)} className="text-gray-600 hover:text-orange-600">Disruptions</button></li>
              <li><button onClick={() => scrollToSection(baggageRef)} className="text-gray-600 hover:text-orange-600">Baggage</button></li>
              <li><button onClick={() => scrollToSection(helpRef)} className="text-gray-600 hover:text-orange-600">Help</button></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <form onSubmit={handleFlightSearch} className="hidden md:flex">
              <input
                type="text"
                placeholder="Search flight status"
                value={flightSearch}
                onChange={(e) => setFlightSearch(e.target.value)}
                className="w-64 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <FaSearch className="h-5 w-5" />
              </button>
            </form>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="px-4 py-2 border border-orange-600 text-orange-600 rounded-md hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                Logout
              </button>
            ) : (
              <button onClick={handleLogin} className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center">
                <FaSignInAlt className="h-5 w-5 mr-2" />
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        <section ref={homeRef} className="py-12">
          <div className="container mx-auto px-4 text-black">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Akosamizer</h1>
            <p className="text-xl text-gray-600 mb-8">Revolutionizing your airline experience with real-time updates and personalized services.</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <button onClick={() => scrollToSection(dashboardRef)} className="flex text-black items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaUser className="h-6 w-6 text-orange-600 mr-2" />
                <span>User Dashboard</span>
              </button>
              <button onClick={() => scrollToSection(disruptionRef)} className="flex text-black items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaExclamationTriangle className="h-6 w-6 text-orange-600 mr-2" />
                <span>Disruption Management</span>
              </button>
              <button onClick={() => scrollToSection(baggageRef)} className="flex text-black items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaSuitcase className="h-6 w-6 text-orange-600 mr-2" />
                <span>Baggage Tracking</span>
              </button>
              <button onClick={() => scrollToSection(helpRef)} className="flex text-black items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaRobot className="h-6 w-6 text-orange-600 mr-2" />
                <span>AI Support</span>
              </button>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Updates</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h3 className="text-lg font-semibold text-red-600 mb-2">Important: Weather Advisory</h3>
              <p className="text-gray-700">Severe thunderstorms expected in the northeastern United States. Please check your flight status regularly for any updates or changes.</p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Akosamizer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Real-time Updates</h3>
                <p className="text-gray-700">Stay informed with instant notifications about your flight status, gate changes, and more.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-700">Our dedicated support team is available around the clock to assist you with any inquiries.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">User-Friendly Interface</h3>
                <p className="text-gray-700">Easily navigate through our services with a clean and intuitive design.</p>
              </div>
            </div>
          </div>
        </section>

        {isLoggedIn && (
          <section ref={dashboardRef} className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-black">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h2>
              <p className="text-lg text-gray-600 mb-4">Manage your bookings and stay updated on your travel plans.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Upcoming Flights</h3>
                  <p className="text-gray-700">View details about your upcoming flights, including status and gate information.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Notifications</h3>
                  <p className="text-gray-700">Check your notifications for any important updates regarding your flights.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Travel History</h3>
                  <p className="text-gray-700">Review your past flights and experiences with us.</p>
                </div>
              </div>
            </div>
          </section>
        )}

<section ref={disruptionRef} className="py-12 bg-white">
  <div className="container mx-auto px-4 text-black">
    <p className='text-orange-600'>Enter flight number as: ABC1234</p>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Check Flight Disruption</h2>
    <input
      type="text"
      value={flightNumber}
      onChange={(e) => setFlightNumber(e.target.value)}
      placeholder="Enter flight number (e.g., ABC1234)"
      className="px-4 py-2 bg-slate-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
    />
    <button onClick={handleCheckDisruption} className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
      Check Disruption
    </button>

    {disruptionInfo && (
      <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Disruption Status:</h3>
        <p className="text-gray-700">Status: {disruptionInfo.status}</p>
        {disruptionInfo.status === 'Delayed' && (
          <div>
            <h4 className="font-semibold">Affected Flights:</h4>
            <ul className="list-disc pl-5">
              {disruptionInfo.flightNumbers.map((flight, index) => (
                <li key={index} className="text-gray-700">{flight}</li>
              ))}
            </ul>
            <button onClick={() => handleRebookFlight(disruptionInfo.flightNumbers[0])} className="mt-2 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              Rebook Flight
            </button>
          </div>
        )}
      </div>
    )}
  </div>
</section>


        <section ref={baggageRef} className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-black">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Baggage Tracking</h2>
            <p className="text-lg text-gray-600 mb-4">Stay informed about the status of your baggage with our tracking feature.</p>
            <input
              type="text"
              value={baggageNumber}
              onChange={(e) => setBaggageNumber(e.target.value)}
              placeholder="Enter baggage number (e.g., ABC123)"
              className="px-4 py-2 bg-slate-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
            />
            <button onClick={handleTrackBaggage} className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Track Baggage</button>
            {baggageInfo && (
              <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Baggage Status:</h3>
                {baggageInfo.status === 'Not Found' ? (
                  <p className="text-red-600">{baggageInfo.status}</p>
                ) : (
                  <>
                    <p className="text-gray-700">Status: {baggageInfo.status}</p>
                    <p className="text-gray-700">Location: {baggageInfo.location}</p>
                    <p className="text-gray-700">Estimated Delivery: {baggageInfo.estimatedDelivery}</p>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        <section ref={helpRef} className="py-12 bg-white">
          <div className="container mx-auto px-4 text-black">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Help & Support</h2>
            <p className="text-lg text-gray-600 mb-4">Need assistance? Our team is here to help you with any questions or concerns.</p>
            <button onClick={() => alert("Help feature coming soon!")} className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">Contact Support</button>
          </div>
        </section>
        
        <section ref={chatRef} className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-black">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Chatbot Support</h2>
            <button onClick={() => setChatbotOpen(!chatbotOpen)} className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700">
              {chatbotOpen ? 'Close Chat' : 'Open Chat'}
            </button>
            {chatbotOpen && (
              <div className="mt-4 border border-gray-300 rounded-lg p-4">
                <div className="h-64 overflow-y-auto mb-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      <span className={`${msg.sender === 'user' ? 'bg-orange-100' : 'bg-gray-200'} rounded-lg p-2 inline-block`}>
                        {msg.message}
                      </span>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleChatSubmit} className="flex">
                  <input
                    type="text"
                    name="chatInput"
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button type="submit" className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700">Send</button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-md mt-12">
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Akosamizer. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-orange-600">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="text-gray-600 hover:text-orange-600">Terms of Service</a>
            <span>|</span>
            <a href="#" className="text-gray-600 hover:text-orange-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
