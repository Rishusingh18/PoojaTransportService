-- ============================================================
-- SUPABASE SQL MIGRATION SCRIPT FOR POOJA TRANSPORT SERVICE
-- Paste this into your Supabase SQL Editor and click RUN
-- ============================================================

-- 1. Create Reviews Table
CREATE TABLE IF NOT EXISTS public.reviews (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT,
    service_type TEXT,
    rating INTEGER DEFAULT 5,
    quote TEXT NOT NULL,
    date TEXT,
    verified BOOLEAN DEFAULT FALSE,
    consignment_no TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS and Policies for Reviews
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Reviews" ON public.reviews;
CREATE POLICY "Public Read Reviews" ON public.reviews FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Reviews" ON public.reviews;
CREATE POLICY "Public Insert Reviews" ON public.reviews FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Update Reviews" ON public.reviews;
CREATE POLICY "Public Update Reviews" ON public.reviews FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public Delete Reviews" ON public.reviews;
CREATE POLICY "Public Delete Reviews" ON public.reviews FOR DELETE USING (true);


-- 2. Create Quotes & Bookings Table
CREATE TABLE IF NOT EXISTS public.quotes (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    origin TEXT,
    destination TEXT,
    service_type TEXT,
    move_date TEXT,
    notes TEXT,
    status TEXT DEFAULT 'Pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS and Policies for Quotes
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Quotes" ON public.quotes;
CREATE POLICY "Public Read Quotes" ON public.quotes FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Quotes" ON public.quotes;
CREATE POLICY "Public Insert Quotes" ON public.quotes FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Update Quotes" ON public.quotes;
CREATE POLICY "Public Update Quotes" ON public.quotes FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public Delete Quotes" ON public.quotes;
CREATE POLICY "Public Delete Quotes" ON public.quotes FOR DELETE USING (true);


-- 3. Seed Initial Verified Reviews
INSERT INTO public.reviews (id, name, location, service_type, rating, quote, date, verified, consignment_no)
VALUES 
  ('rev-1', 'Amit Sharma', 'Noida Sector 62 to Dehradun', 'Household Relocation', 5, 'The precision with which they handled our household art and antique furniture was remarkable. Zero scratches, itemized inventory, and on-time delivery.', 'Aug 2026', true, 'PTS-2026-8942'),
  ('rev-2', 'Priya Verma', 'Ghaziabad Tech Park to Gurgaon', 'Corporate Relocation', 5, 'Absolute professionalism for our corporate headquarters move. They completed the IT rack migration overnight without any business downtime.', 'Jul 2026', true, 'PTS-2026-7811'),
  ('rev-3', 'Rahul Singh', 'Greater Noida West to Kanpur', 'Car Carrier & Shifting', 5, 'Clean binding pricing with zero surprise charges. The crew was polite, efficient, and careful with every single piece of glassware and our car.', 'Jul 2026', true, 'PTS-2026-6102')
ON CONFLICT (id) DO NOTHING;
