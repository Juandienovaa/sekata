import React, { useState } from 'react';
import { X, Check, Building, Mail, Phone, Coffee, PackageCheck } from 'lucide-react';

export default function WholesaleModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    volume: '25-50 lbs/week',
    roastPreference: 'House Espresso & Single Origin Combo',
    equipment: 'Commercial 2-Group Espresso Machine',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.businessName || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      volume: '25-50 lbs/week',
      roastPreference: 'House Espresso & Single Origin Combo',
      equipment: 'Commercial 2-Group Espresso Machine',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-espresso/60 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-xl bg-cream border-hairline rounded-[8px] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-hairline bg-linen">
          <div className="flex items-center gap-2">
            <span className="badge-stamp bg-burnt-orange text-cream">WHOLESALE ROASTING</span>
            <span className="text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em]">
              PARTNER INQUIRY
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-espresso hover:text-burnt-orange border-hairline rounded-[3px] bg-cream"
            aria-label="Close wholesale modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-linen border-hairline flex items-center justify-center mx-auto text-burnt-orange">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display text-[28px] text-espresso">
                Wholesale Inquiry Received.
              </h3>
              <p className="text-[14px] font-body text-coffee-dust max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactName || formData.businessName}</strong>. Our head of wholesale roasting will review your volume inquiry ({formData.volume}) and reach out to <strong>{formData.email}</strong> within 1 business day with fresh cupping samples and pricing sheets.
              </p>
              <div className="p-4 bg-linen rounded-[6px] border-hairline text-xs font-mono text-left max-w-sm mx-auto space-y-1">
                <p className="text-coffee-dust uppercase">INQUIRY REF: #WH-{Math.floor(1000 + Math.random() * 9000)}</p>
                <p className="text-espresso">EST. WEEKLY NEED: {formData.volume}</p>
                <p className="text-espresso">EQUIPMENT: {formData.equipment}</p>
              </div>
              <div className="pt-4">
                <button onClick={handleReset} className="btn-filled text-xs py-2.5 px-6">
                  CLOSE INQUIRY
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-display text-[26px] text-espresso mb-1">
                  Serve Little Amps at Your Counter.
                </h3>
                <p className="text-[13px] font-body text-coffee-dust">
                  We partner with independent cafés, restaurants, bakeries, and record stores. Free weekly delivery in Central PA; nationwide priority freight everywhere else.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    BUSINESS NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Needle & Bean Cafe"
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    PRIMARY CONTACT NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Jordan Miller"
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@example.com"
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(717) 555-0199"
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    ESTIMATED WEEKLY VOLUME
                  </label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  >
                    <option value="10-25 lbs/week">10–25 lbs / week</option>
                    <option value="25-50 lbs/week">25–50 lbs / week (Most Popular)</option>
                    <option value="50-100 lbs/week">50–100 lbs / week</option>
                    <option value="100+ lbs/week">100+ lbs / week (Multi-location)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                    CURRENT BREWING SETUP
                  </label>
                  <select
                    value={formData.equipment}
                    onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none"
                  >
                    <option value="Commercial 2-Group Espresso Machine">Commercial 2-Group Machine</option>
                    <option value="Batch Brewer (FETCO / Curtis)">Batch Brewer (FETCO / Curtis)</option>
                    <option value="Need Equipment Consultation">Need Equipment Guidance</option>
                    <option value="Cold Brew / Draft Keg Setup">Cold Brew / Keg System</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-coffee-dust uppercase tracking-[0.05em] mb-1">
                  ADDITIONAL COMMENTS OR SPECIAL BLEND REQUESTS
                </label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your space, opening timeline, or coffee goals..."
                  className="w-full px-3 py-2 text-xs font-mono bg-linen border-hairline rounded-[3px] text-espresso focus:border-espresso focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-filled w-full py-3 text-xs tracking-[0.05em]">
                  SUBMIT WHOLESALE APPLICATION
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
