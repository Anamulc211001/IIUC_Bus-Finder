import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles, Clock, MapPin, Bus, Phone, Mail, ExternalLink, Zap, Star } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  suggestions?: string[];
}

interface AIAssistantProps {
  schedules: any[];
}

const AIAssistant: React.FC<AIAssistantProps> = ({ schedules }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your IIUC Bus Assistant! I can help you find bus schedules, routes, and answer any transport-related questions. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      suggestions: [
        "Show me morning buses to IIUC",
        "What are Friday schedules?",
        "Find buses from BOT",
        "Contact information"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // AI Response Logic
  const generateResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return {
        text: "Hello! 👋 I'm here to help you with IIUC bus schedules and transport information. What would you like to know?",
        suggestions: ["Show bus schedules", "Friday timings", "Route information", "Contact details"]
      };
    }

    // Time-based queries
    if (message.includes('morning') || message.includes('early')) {
      const morningBuses = schedules.filter(s => {
        const hour = parseInt(s.time.split(':')[0]);
        return hour >= 6 && hour <= 9;
      });
      
      return {
        text: `🌅 I found ${morningBuses.length} morning buses (6:00 AM - 9:00 AM). The earliest starts at 6:40 AM from Baroyarhat. Would you like specific details about any route?`,
        suggestions: ["6:40 AM details", "Female buses", "Male buses", "All morning routes"]
      };
    }

    // Friday schedule queries
    if (message.includes('friday')) {
      const fridayBuses = schedules.filter(s => s.scheduleType === 'Friday');
      return {
        text: `🕌 Friday has special schedules with ${fridayBuses.length} different timings. These include AC buses, IIUC buses, and special routes for teachers and students. The first bus starts at 7:30 AM.`,
        suggestions: ["AC bus timings", "Teacher buses", "Student buses", "Return timings"]
      };
    }

    // Location-based queries
    if (message.includes('bot') || message.includes('bahaddarhat')) {
      const botBuses = schedules.filter(s => 
        s.startingPoint.toLowerCase().includes('bot') || 
        s.route.toLowerCase().includes('bot')
      );
      
      return {
        text: `🚌 Found ${botBuses.length} buses from/via BOT (Bahaddarhat). Regular schedule: 7:00 AM and 9:00 AM. Friday schedule: 7:45 AM, 9:30 AM, and return trips.`,
        suggestions: ["BOT morning times", "BOT Friday schedule", "BOT to IIUC route", "Return from IIUC"]
      };
    }

    if (message.includes('agrabad')) {
      return {
        text: "🏢 Agrabad buses: Regular schedule at 7:00 AM and 9:05 AM via Lucky Plaza. Friday: 7:45 AM and 8:00 AM with special AC bus for teachers. Route: Agrabad → Boropool → AK Khan → IIUC.",
        suggestions: ["Agrabad timings", "Lucky Plaza route", "AC bus details", "Return schedule"]
      };
    }

    if (message.includes('chatteswari')) {
      return {
        text: "🏘️ Chatteswari routes available! Regular: 7:00 AM and 9:05 AM. Friday: 7:45 AM. Route: Chatteswari Road → GEC → 2 no gate → Baizid Link Road → IIUC.",
        suggestions: ["Chatteswari timings", "GEC connection", "Weekend schedule", "Return journey"]
      };
    }

    // Gender-specific queries
    if (message.includes('female') || message.includes('women') || message.includes('girls')) {
      const femaleBuses = schedules.filter(s => s.gender === 'Female');
      return {
        text: `👩 Female-only buses: ${femaleBuses.length} schedules available. First bus at 6:40 AM from Baroyarhat. Multiple routes including BOT, Agrabad, Chatteswari, and more.`,
        suggestions: ["Female morning buses", "Female routes", "Safety features", "Pickup points"]
      };
    }

    if (message.includes('male') || message.includes('men') || message.includes('boys')) {
      const maleBuses = schedules.filter(s => s.gender === 'Male');
      return {
        text: `👨 Male buses: ${maleBuses.length} schedules starting from 8:30 AM. Routes from CUET, Hathazari, BOT, Agrabad, and other major points.`,
        suggestions: ["Male morning buses", "CUET connection", "Male routes", "Timing details"]
      };
    }

    // AC Bus queries
    if (message.includes('ac') || message.includes('air condition')) {
      const acBuses = schedules.filter(s => s.busType?.includes('AC'));
      return {
        text: `❄️ AC buses available on Friday schedules only. ${acBuses.length} AC bus timings: 8:00 AM and 9:30 AM for teachers, with return trips at 12:10 PM and 4:00 PM.`,
        suggestions: ["AC bus timings", "Teacher schedule", "AC bus routes", "Booking info"]
      };
    }

    // Contact information
    if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return {
        text: "📞 IIUC Transport Contact:\n• Phone: +880-31-2510500\n• Email: transport@iiuc.ac.bd\n• Address: Kumira, Chittagong-4318\n• Service Hours: 6:40 AM - 4:35 PM (Regular), 7:30 AM - 6:30 PM (Friday)",
        suggestions: ["Call transport", "Email query", "Office location", "Service hours"]
      };
    }

    // Route information
    if (message.includes('route') || message.includes('path') || message.includes('way')) {
      return {
        text: "🗺️ IIUC buses cover 15+ major routes including:\n• Baroyarhat → Mirshorai → Sitakunda → IIUC\n• BOT → Muradpur → Baizid Link → IIUC\n• Agrabad → Boropool → AK Khan → IIUC\n• Chatteswari → GEC → Khulshi → IIUC",
        suggestions: ["Specific route details", "Travel time", "Stops information", "Alternative routes"]
      };
    }

    // Return/shuttle queries
    if (message.includes('return') || message.includes('back') || message.includes('shuttle')) {
      const returnBuses = schedules.filter(s => 
        s.direction === 'IIUCToCity' || s.direction === 'FromUniversity'
      );
      
      return {
        text: `🔄 Return shuttles: ${returnBuses.length} services from IIUC. Regular shuttles at 11:00 AM, 11:45 AM, 12:15 PM, 1:30 PM, 1:40 PM, 2:55 PM, and 4:35 PM.`,
        suggestions: ["Shuttle timings", "Return routes", "Last shuttle", "Weekend returns"]
      };
    }

    // Timing queries
    if (message.includes('time') || message.includes('schedule') || message.includes('when')) {
      return {
        text: "⏰ Bus Schedules:\n• Regular Days (Sat-Wed): 6:40 AM - 4:35 PM\n• Friday: 7:30 AM - 6:30 PM\n• First bus: 6:40 AM (Female from Baroyarhat)\n• Last return: 4:35 PM (All routes)",
        suggestions: ["Morning schedules", "Evening schedules", "Friday special", "Weekend info"]
      };
    }

    // Help and general queries
    if (message.includes('help') || message.includes('assist') || message.includes('support')) {
      return {
        text: "🤝 I can help you with:\n• 🚌 Bus schedules and timings\n• 🗺️ Route information\n• 👥 Gender-specific buses\n• 📅 Friday special schedules\n• 📞 Contact information\n• 🎯 Specific location queries",
        suggestions: ["Find my bus", "Route planner", "Contact support", "Schedule updates"]
      };
    }

    // Default response with smart suggestions
    return {
      text: "🤔 I'd love to help! Could you be more specific? I can assist with bus timings, routes, contact info, or any transport-related questions.",
      suggestions: [
        "Show all schedules",
        "Find buses from my area", 
        "Friday special timings",
        "Contact transport office"
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(inputText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds delay
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button - Now positioned on bottom-right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`group relative bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 hover:from-blue-600 hover:via-purple-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm ${
            isOpen ? 'scale-110' : 'hover:scale-110 animate-pulse'
          }`}
          aria-label="Open AI Assistant"
        >
          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              <Sparkles className="h-3 w-3" />
            </div>
          )}

          {/* Icon */}
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-300" />
          ) : (
            <div className="relative">
              <Bot className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          )}

          {/* Tooltip */}
          <div className={`absolute bottom-full right-1/2 transform translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg transition-all duration-200 whitespace-nowrap ${
            isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}>
            🤖 AI Bus Assistant
            <div className="absolute top-full right-1/2 transform translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      </div>

      {/* Chat Window - Now positioned from bottom-right */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-fade-slide-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg">IIUC Bus Assistant</h3>
                <p className="text-blue-100 text-sm flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online & Ready to Help</span>
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl ${
                  message.isBot 
                    ? 'bg-white text-gray-800 shadow-md border border-gray-200' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                }`}>
                  
                  {/* Message Header */}
                  <div className="flex items-center space-x-2 mb-2">
                    {message.isBot ? (
                      <Bot className="h-4 w-4 text-blue-500" />
                    ) : (
                      <User className="h-4 w-4 text-white" />
                    )}
                    <span className="text-xs opacity-75">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {/* Message Text */}
                  <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>

                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      <p className="text-xs opacity-75 font-medium">Quick actions:</p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-md border border-gray-200 max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-blue-500" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about bus schedules, routes, timings..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                  disabled={isTyping}
                />
                
                {/* Quick Action Buttons */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button
                    onClick={() => handleSuggestionClick("Show morning buses")}
                    className="p-1.5 text-gray-400 hover:text-blue-500 transition-colors"
                    title="Morning buses"
                  >
                    <Clock className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleSuggestionClick("Contact information")}
                    className="p-1.5 text-gray-400 hover:text-green-500 transition-colors"
                    title="Contact info"
                  >
                    <Phone className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white p-3 rounded-2xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>

            {/* Powered by indicator */}
            <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
              <Zap className="h-3 w-3 mr-1" />
              <span>Powered by AI • Real-time Bus Data</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;