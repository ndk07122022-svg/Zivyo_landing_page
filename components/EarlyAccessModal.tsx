import React, { useState, useEffect } from 'react';
import { Button } from './UI/Button';
import { supabase } from '../lib/supabase';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    role: '',
    workEmail: '',
    primaryInterest: 'Channel Growth',
    markets: ''
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early Access Submission started:', formData.workEmail);
    setLoading(true);
    setError(null);

    try {
      if (!import.meta.env.VITE_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL.includes('your-supabase-url')) {
        throw new Error('Supabase credentials are not properly configured. Please check your .env.local file and restart the dev server.');
      }

      // 1. Check if email already exists
      console.log('Checking for existing email...');
      const { data: existing, error: checkError } = await supabase
        .from('early_access_requests')
        .select('work_email')
        .eq('work_email', formData.workEmail)
        .maybeSingle();

      if (checkError) {
        console.error('Check error:', checkError);
        throw checkError;
      }

      if (existing) {
        console.log('Email already exists, proceeding to success state.');
        setSubmitted(true);
        return;
      }

      // 2. Insert the new request
      console.log('Inserting new request...');
      const { error: insertError } = await supabase
        .from('early_access_requests')
        .insert([{
          full_name: formData.fullName,
          company_name: formData.companyName,
          role: formData.role,
          work_email: formData.workEmail,
          primary_interest: formData.primaryInterest,
          markets: formData.markets
        }]);

      if (insertError) {
        console.error('Insert error:', insertError);
        if (insertError.code === '23505') {
          setSubmitted(true);
        } else {
          throw insertError;
        }
      } else {
        console.log('Request inserted successfully.');
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error('Submission catch error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center p-6 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}`}
      onClick={(e) => {
        // Close if clicking the backdrop (outer container)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop - pointer-events-none so clicks pass through to parent */}
      <div className="absolute inset-0 bg-zinc-950/40 dark:bg-black/60 backdrop-blur-sm pointer-events-none" />

      {/* Modal Container */}
      <div
        className={`pointer-events-auto relative w-full max-w-[560px] bg-white dark:bg-zinc-900 rounded-[2.5rem] shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'}`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-8 right-8 text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors p-2 z-50"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10 md:p-14">
          {!submitted ? (
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="text-[10px] mono font-bold text-brand-blue uppercase tracking-[0.4em]">
                  EARLY ACCESS – LIMITED RELEASE
                </div>
                <h2 className="text-3xl text-zinc-950 dark:text-zinc-50">
                  Request Early Access to Zivyo
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                  We’re onboarding a limited group of growth leaders before full public release.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50"
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Company Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50"
                      placeholder="Enterprise Brands Inc."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Role / Title</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50"
                      placeholder="Head of Growth"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50"
                      placeholder="jane@company.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Primary Interest</label>
                  <select
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50 appearance-none"
                    value={formData.primaryInterest}
                    onChange={(e) => setFormData({ ...formData, primaryInterest: e.target.value })}
                  >
                    <option>Channel Growth</option>
                    <option>Market Expansion</option>
                    <option>Full Platform</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] mono uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-widest">Markets of Interest (Optional)</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all text-zinc-950 dark:text-zinc-50"
                    placeholder="e.g. Western Europe, UAE, US Marketplaces"
                    value={formData.markets}
                    onChange={(e) => setFormData({ ...formData, markets: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 py-4 rounded-xl shadow-xl hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Request Access</span>
                  )}
                </button>
              </form>
              {error && (
                <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
              )}
            </div>
          ) : (
            <div className="py-20 text-center space-y-8 animate-reveal">
              <div className="w-20 h-20 bg-brand-blue rounded-3xl mx-auto flex items-center justify-center shadow-2xl shadow-brand-blue/20">
                <svg className="w-10 h-10 text-zinc-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="space-y-3">
                <h2 className="text-3xl text-zinc-950 dark:text-zinc-50">You’re on the list.</h2>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
                  Our team will review your request and reach out shortly to discuss your growth objectives.
                </p>
              </div>
              <Button onClick={onClose} variant="outline" className="px-12 rounded-xl">Close</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
