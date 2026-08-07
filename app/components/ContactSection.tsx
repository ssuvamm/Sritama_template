'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Send, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { YoutubeIcon, InstagramIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Concert Booking Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending form message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Concert Booking Inquiry', message: '' });
    }, 1000);
  };

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      {/* Light background glow */}
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/80 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium backdrop-blur-md"
          >
            <Mail className="w-4 h-4" />
            <span>Booking & Inquiries</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl font-bold text-gold-gradient"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg leading-relaxed font-light"
          >
            For concert bookings, Rabindra Sangeet recitals, cultural event anchoring, workshops, and artistic collaborations.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-stone-900/70 border border-gold-500/20 backdrop-blur-md space-y-6 shadow-xl gold-border-glow">
              <h3 className="font-serif text-2xl font-semibold text-gold-300">
                Contact Information
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                Whether you are organizing a classical concert, a community cultural festival, or a private vocal recital, we welcome your inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-200">Location</h4>
                    <p className="text-xs text-stone-400">United States (Available for global concerts)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-stone-200">Email Inquiries</h4>
                    <p className="text-xs text-stone-400">Direct booking requests & event schedules</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-stone-800 space-y-3">
                <h4 className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  Follow & Listen
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.youtube.com/@SritamaBasu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:text-red-400 hover:border-red-500/40 transition-colors text-xs font-medium"
                  >
                    <YoutubeIcon className="w-4 h-4 text-red-500" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="https://www.instagram.com/sritamabasu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-stone-300 hover:text-pink-400 hover:border-pink-500/40 transition-colors text-xs font-medium"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-stone-900/70 border border-gold-500/20 backdrop-blur-md shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl font-semibold text-gold-300">
                Send a Booking Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-xl bg-gold-500/10 border border-gold-500/30 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold-400 mx-auto animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-gold-300">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-stone-300 text-sm leading-relaxed max-w-md mx-auto">
                    Your inquiry has been received. Sritama Basu&apos;s team will get back to you promptly regarding dates and arrangements.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-stone-800 text-gold-300 hover:bg-stone-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-stone-300 block">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Priyanjali Sen"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/40 transition-all placeholder:text-stone-600"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-stone-300 block">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/40 transition-all placeholder:text-stone-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-stone-300 block">
                      Inquiry Category *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/40 transition-all"
                    >
                      <option value="Concert Booking Inquiry">Classical Concert Booking</option>
                      <option value="Rabindra Sangeet Recital">Rabindra Sangeet Recital</option>
                      <option value="Cultural Stage Anchoring">Stage Anchoring & Presenting</option>
                      <option value="Music Collaboration">Artistic Collaboration / Recording</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-stone-300 block">
                      Message / Event Details *
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 absolute left-3.5 top-3 text-stone-500" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please share details about your event, preferred dates, venue, or proposed collaboration..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-stone-950/80 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/40 transition-all placeholder:text-stone-600 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-stone-950 hover:brightness-110 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 transition-all flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Booking Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
