import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Question',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: 'General Question', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-cream border-b-hairline scroll-mt-20">
      <div className="container-max">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b-hairline">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-stamp bg-espresso text-cream">N° 06 — VISIT</span>
              <p className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
                LOCATIONS, HOURS & ANALOG CORRESPONDENCE
              </p>
            </div>
            <h2 className="font-display text-[36px] sm:text-[46px] leading-[0.95] text-espresso tracking-[-0.06em]">
              Find Us in Harrisburg.
            </h2>
          </div>
          <p className="text-[13px] font-body text-coffee-dust max-w-md">
            Stop by for a freshly pulled lever shot, thumb through our record crates, or write us a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Locations & Hours Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location 1: Midtown */}
            <div className="bg-linen p-6 rounded-[8px] border-hairline">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="badge-stamp bg-burnt-orange text-cream mb-2">FLAGSHIP CAFE</span>
                  <h3 className="font-display text-[24px] text-espresso">Midtown Espresso & Vinyl Bar</h3>
                </div>
                <span className="text-[11px] font-mono text-coffee-dust uppercase">EST. 2011</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-3 border-t-hairline">
                <div>
                  <p className="text-coffee-dust uppercase mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burnt-orange" /> ADDRESS
                  </p>
                  <p className="text-espresso">1336 N 3rd St</p>
                  <p className="text-espresso">Harrisburg, PA 17102</p>
                </div>

                <div>
                  <p className="text-coffee-dust uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-burnt-orange" /> OPERATING HOURS
                  </p>
                  <p className="text-espresso">Mon – Fri: 7:00 AM – 5:00 PM</p>
                  <p className="text-espresso">Sat – Sun: 8:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Location 2: Downtown Lab */}
            <div className="bg-linen p-6 rounded-[8px] border-hairline">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="badge-stamp bg-dusty-blue text-cream mb-2">ROASTING LAB & SOUND ROOM</span>
                  <h3 className="font-display text-[24px] text-espresso">Downtown Roastery & Tasting Room</h3>
                </div>
                <span className="text-[11px] font-mono text-coffee-dust uppercase">CAST IRON DRUM</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-3 border-t-hairline">
                <div>
                  <p className="text-coffee-dust uppercase mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-burnt-orange" /> ADDRESS
                  </p>
                  <p className="text-espresso">209 N 2nd St</p>
                  <p className="text-espresso">Harrisburg, PA 17101</p>
                </div>

                <div>
                  <p className="text-coffee-dust uppercase mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-burnt-orange" /> TASTING HOURS
                  </p>
                  <p className="text-espresso">Thurs – Sun: 9:00 AM – 3:00 PM</p>
                  <p className="text-espresso">Public Cuppings: Saturdays 11 AM</p>
                </div>
              </div>
            </div>

            {/* Direct Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-linen rounded-[6px] border-hairline flex items-center gap-3">
                <Phone className="w-4 h-4 text-burnt-orange flex-shrink-0" />
                <div className="text-xs font-mono">
                  <p className="text-coffee-dust uppercase text-[10px]">DIRECT BAR LINE</p>
                  <p className="text-espresso font-medium">(717) 695-6995</p>
                </div>
              </div>

              <div className="p-4 bg-linen rounded-[6px] border-hairline flex items-center gap-3">
                <Mail className="w-4 h-4 text-burnt-orange flex-shrink-0" />
                <div className="text-xs font-mono">
                  <p className="text-coffee-dust uppercase text-[10px]">ELECTRONIC MAIL</p>
                  <p className="text-espresso font-medium">hello@littleampscoffee.com</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-5 bg-linen p-6 sm:p-7 rounded-[8px] border-hairline">
            <h3 className="font-display text-[24px] text-espresso mb-1">
              Drop Us a Line.
            </h3>
            <p className="text-[13px] font-body text-coffee-dust mb-5">
              Have questions regarding coffee extraction, catering, music curation, or bulk orders? Send a dispatch.
            </p>

            {submitted ? (
              <div className="p-6 bg-cream rounded-[6px] border-hairline text-center space-y-2">
                <Check className="w-6 h-6 text-burnt-orange mx-auto" />
                <p className="font-mono text-xs uppercase font-medium text-espresso">
                  DISPATCH SENT SUCCESSFULLY
                </p>
                <p className="text-xs font-body text-coffee-dust">
                  We read every message over morning espresso and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    INQUIRY TYPE
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  >
                    <option value="General Question">General Question</option>
                    <option value="Online Order Support">Online Order Support</option>
                    <option value="Private Event / Catering">Private Event / Catering</option>
                    <option value="Record Donation / Vinyl Curation">Record Donation / Vinyl</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    MESSAGE *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note here..."
                    className="w-full px-3 py-2 text-xs font-mono bg-cream border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button type="submit" className="btn-filled w-full py-2.5 text-xs tracking-[0.05em]">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

