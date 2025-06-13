import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Mail, Lock, User, Chrome } from 'lucide-react';

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userName', formData.name || formData.email.split('@')[0]);
    navigate('/chat');
  };

  const handleGoogleAuth = () => {
    // Simulate Google auth
    localStorage.setItem('userEmail', 'user@gmail.com');
    localStorage.setItem('userName', 'Google User');
    navigate('/chat');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7b2cbf]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* Top Section - Site Introduction */}
        <div className="text-center mb-12 max-w-4xl">
          {/* Logo and Main Title */}
          <div className="flex items-center justify-center mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-[#7b2cbf] to-purple-600 shadow-2xl shadow-[#7b2cbf]/30 mr-4">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white font-inter">
              Uplyft AI Assistant
            </h1>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-[#7b2cbf] mb-8 font-inter">
            Your Smart AI Chat Partner for Quick Help & Product Discovery
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-inter">
              Uplyft AI is an intelligent chatbot platform designed to answer your product questions, 
              provide helpful suggestions, and make your search experience smarter.
            </p>
            <p className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white font-medium font-inter">
              Seamless, responsive, and personalized — powered by AI.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#7b2cbf] rounded-full animate-pulse"></div>
              <span className="text-purple-200 text-sm font-medium">Instant Responses</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#7b2cbf] rounded-full animate-pulse delay-200"></div>
              <span className="text-purple-200 text-sm font-medium">Smart Suggestions</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-[#7b2cbf] rounded-full animate-pulse delay-400"></div>
              <span className="text-purple-200 text-sm font-medium">24/7 Available</span>
            </div>
          </div>
        </div>

        {/* Login/Signup Card */}
        <div className="w-full max-w-md">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-[#7b2cbf]/20 relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#7b2cbf]/10 to-purple-600/10 rounded-3xl blur-xl"></div>
            
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Toggle Login/Signup */}
                <div className="flex rounded-2xl p-1 bg-white/5 border border-white/10 backdrop-blur-sm">
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 font-inter ${
                      isLogin 
                        ? 'bg-gradient-to-r from-[#7b2cbf] to-purple-600 text-white shadow-lg shadow-[#7b2cbf]/30 transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 font-inter ${
                      !isLogin 
                        ? 'bg-gradient-to-r from-[#7b2cbf] to-purple-600 text-white shadow-lg shadow-[#7b2cbf]/30 transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Name Field (Sign Up Only) */}
                {!isLogin && (
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#7b2cbf] transition-colors" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:border-transparent transition-all duration-300 backdrop-blur-sm font-inter hover:bg-white/10"
                      placeholder="Full Name"
                      required={!isLogin}
                    />
                  </div>
                )}

                {/* Email Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#7b2cbf] transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:border-transparent transition-all duration-300 backdrop-blur-sm font-inter hover:bg-white/10"
                    placeholder="Email Address"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#7b2cbf] transition-colors" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7b2cbf] focus:border-transparent transition-all duration-300 backdrop-blur-sm font-inter hover:bg-white/10"
                    placeholder="Password"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#7b2cbf] to-purple-600 hover:from-[#6a1b9a] hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-[#7b2cbf]/30 hover:shadow-[#7b2cbf]/50 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 font-inter"
                >
                  {isLogin ? 'Sign In to Continue' : 'Create Your Account'}
                </button>

                {/* Divider */}
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#0e0e0e] text-gray-400 font-medium font-inter">OR</span>
                  </div>
                </div>

                {/* Google Button */}
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  className="w-full py-4 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm font-inter hover:shadow-lg hover:shadow-white/10"
                >
                  <Chrome className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span>Continue with Google</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-8 max-w-md font-inter">
          By continuing, you agree to our{' '}
          <span className="text-purple-300 hover:text-purple-200 cursor-pointer transition-colors">Terms of Service</span>
          {' '}and{' '}
          <span className="text-purple-300 hover:text-purple-200 cursor-pointer transition-colors">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default LandingPage;