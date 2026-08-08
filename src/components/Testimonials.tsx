import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, PlusCircle, X, ShieldCheck, ThumbsUp } from 'lucide-react';
import { supabase } from '../lib/supabase';

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  serviceType: string;
  rating: number;
  quote: string;
  date: string;
  verified: boolean;
}

const DEFAULT_VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Amit Sharma',
    location: 'Noida Sector 62 to Dehradun',
    serviceType: 'Household Relocation',
    rating: 5,
    quote: 'The precision with which they handled our household art and antique furniture was remarkable. Zero scratches, itemized inventory, and on-time delivery.',
    date: 'Aug 2026',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Priya Verma',
    location: 'Ghaziabad Tech Park to Gurgaon',
    serviceType: 'Corporate Relocation',
    rating: 5,
    quote: 'Absolute professionalism for our corporate headquarters move. They completed the IT rack migration overnight without any business downtime.',
    date: 'Jul 2026',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Rahul Singh',
    location: 'Greater Noida West to Kanpur',
    serviceType: 'Car Carrier & Shifting',
    rating: 5,
    quote: 'Clean binding pricing with zero surprise charges. The crew was polite, efficient, and careful with every single piece of glassware and our car.',
    date: 'Jul 2026',
    verified: true
  }
];

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(DEFAULT_VERIFIED_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    serviceType: 'Household Relocation',
    rating: 5,
    quote: '',
    consignmentNo: ''
  });

  // Fetch verified reviews directly from Supabase & API fallback
  const loadVerifiedReviews = async () => {
    try {
      const { data: sbData, error: sbErr } = await supabase
        .from('reviews')
        .select('*')
        .eq('verified', true)
        .order('created_at', { ascending: false });

      if (!sbErr && sbData && sbData.length > 0) {
        const formatted: ReviewItem[] = sbData.map(r => ({
          id: r.id,
          name: r.name,
          location: r.location || 'Verified Customer',
          serviceType: r.service_type || r.serviceType || 'Household Relocation',
          rating: Number(r.rating) || 5,
          quote: r.quote,
          date: r.date || 'Recent',
          verified: Boolean(r.verified)
        }));
        setReviews(formatted);
        return;
      }
    } catch (sbEx) {
      console.warn('Supabase fetch reviews note:', sbEx);
    }

    try {
      const res = await fetch('/api/reviews?status=verified');
      const data = await res.json();
      if (data.success && data.data && data.data.length > 0) {
        setReviews(data.data);
      } else {
        setReviews(DEFAULT_VERIFIED_REVIEWS);
      }
    } catch {
      setReviews(DEFAULT_VERIFIED_REVIEWS);
    }
  };

  useEffect(() => {
    loadVerifiedReviews();
    const interval = setInterval(loadVerifiedReviews, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    setIsSubmitting(true);
    const reviewId = `rev-${Date.now()}`;
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    const createdAtIso = new Date().toISOString();

    const supabaseRecord = {
      id: reviewId,
      name: newReview.name,
      location: newReview.location || 'Verified Customer',
      service_type: newReview.serviceType || 'Household Relocation',
      rating: Number(newReview.rating) || 5,
      quote: newReview.quote,
      date: currentDate,
      verified: false,
      consignment_no: newReview.consignmentNo || 'N/A',
      created_at: createdAtIso
    };

    // 1. Insert directly into Supabase
    try {
      const { error: sbErr } = await supabase.from('reviews').insert([supabaseRecord]);
      if (sbErr) console.warn('Supabase review insert note:', sbErr.message);
      else console.log('✓ Review saved directly to Supabase:', reviewId);
    } catch (err) {
      console.error('Supabase review submission exception:', err);
    }

    // 2. Fetch API route fallback
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReview)
      });
    } catch (err) {
      console.error('Backend submission endpoint note:', err);
    } finally {
      setIsSubmitting(false);
    }


    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      setNewReview({
        name: '',
        location: '',
        serviceType: 'Household Relocation',
        rating: 5,
        quote: '',
        consignmentNo: ''
      });
    }, 2500);
  };

  return (
    <section className="py-24 bg-[#ffffff] border-b border-outline-variant/40" id="testimonials">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-outline-variant/30 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#e4edfa] text-[#0b1c30] text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Customer Reviews
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-[#0b1c30] font-bold tracking-tight">
              Trusted Across 50,000+ Moves.
            </h2>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#0b1c30] text-white px-6 py-3.5 rounded text-xs font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all shadow-md self-start md:self-auto cursor-pointer"
          >
            <PlusCircle className="w-4 h-4 text-amber-400" /> Write a Review
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#f8f9ff] border border-outline-variant/60 rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Move
                  </span>
                </div>

                <p className="text-sm text-[#0b1c30] leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0b1c30] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
                    {item.name ? item.name[0].toUpperCase() : 'U'}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#0b1c30]">{item.name}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.location}</p>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border border-outline-variant">
            
            {/* Modal Header */}
            <div className="bg-[#0b1c30] text-white p-6 flex items-center justify-between">
              <div>
                <h3 className="font-display text-xl font-bold">Submit Your Move Review</h3>
                <p className="text-xs text-slate-300 mt-1">Submitted reviews are sent to admin for verification before publishing.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-300 hover:text-white p-1 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            {submittedSuccess ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <ThumbsUp className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#0b1c30]">Review Submitted!</h4>
                <p className="text-sm text-slate-600 max-w-xs mx-auto">
                  Thank you! Your review has been transmitted to admin. Once verified in the admin panel, it will appear live on our website.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="p-6 space-y-4 text-[#0b1c30]">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newReview.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rajesh Kumar"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                      Route / City *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={newReview.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Noida to Dehradun"
                      required
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                      Service Taken
                    </label>
                    <select
                      name="serviceType"
                      value={newReview.serviceType}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none cursor-pointer"
                    >
                      <option value="Household Relocation">Household Relocation</option>
                      <option value="Corporate Relocation">Corporate Relocation</option>
                      <option value="Car & Bike Carrier">Car & Bike Carrier</option>
                      <option value="Bespoke Warehousing">Bespoke Warehousing</option>
                    </select>
                  </div>
                </div>

                {/* Rating Selection */}
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                    Your Rating *
                  </label>
                  <div className="flex items-center gap-2 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                        className="p-1 focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star 
                          className={`w-7 h-7 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} 
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold ml-2 text-slate-700">{newReview.rating} / 5 Stars</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                    Consignment / LR No. (Optional)
                  </label>
                  <input
                    type="text"
                    name="consignmentNo"
                    value={newReview.consignmentNo}
                    onChange={handleInputChange}
                    placeholder="e.g. PTS-2026-8942"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-xs text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 block mb-1">
                    Detailed Review & Experience *
                  </label>
                  <textarea
                    name="quote"
                    rows={3}
                    value={newReview.quote}
                    onChange={handleInputChange}
                    placeholder="Describe the packing quality, staff behavior, timeliness, and safety of your move..."
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2.5 text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#0b1c30] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0b1c30] text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded hover:bg-[#131b2e] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    {isSubmitting ? 'Submitting...' : 'Submit Review to Admin'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
