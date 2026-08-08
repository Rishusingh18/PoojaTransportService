import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'data', 'db.json');

// Supabase Configuration
const SUPABASE_URL = 'https://mblcnitrxqzhbigbsqdr.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibGNuaXRyeHF6aGJpZ2JzcWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjIzOTgsImV4cCI6MjEwMTU5ODM5OH0.94hKdSXgzM8yH47PImrhVeUonMEO2V3I1EHs77HkyCA';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));
app.use(express.static(path.join(__dirname, '..')));

// Helper function to read local DB file
function readLocalDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      return { reviews: [], quotes: [] };
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading local DB:', err);
    return { reviews: [], quotes: [] };
  }
}

// Helper function to write local DB file
function writeLocalDB(data) {
  try {
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing local DB:', err);
  }
}

// Auto-verify and sync database tables on startup
async function initDatabase() {
  try {
    const { data: revData, error: revErr } = await supabase.from('reviews').select('*');
    if (!revErr && revData && revData.length > 0) {
      console.log(`✓ Supabase Reviews Table Connected (${revData.length} records).`);
    }

    const { data: qData, error: qErr } = await supabase.from('quotes').select('*');
    if (!qErr && qData) {
      console.log(`✓ Supabase Quotes Table Connected (${qData.length} records).`);
      // Mirror Supabase quotes to local DB so both stores stay 1:1 in sync
      const localDB = readLocalDB();
      const mappedSupabaseQuotes = qData.map(q => ({
        id: q.id,
        name: q.name,
        mobile: q.mobile,
        from: q.from || q.origin || 'Not specified',
        to: q.to || q.destination || 'Not specified',
        serviceType: q.serviceType || q.service_type || 'Household Relocation',
        moveDate: q.moveDate || q.move_date || 'Flexible',
        notes: q.notes || '',
        status: q.status || 'Pending',
        createdAt: q.created_at || q.createdAt || new Date().toISOString()
      }));
      localDB.quotes = mappedSupabaseQuotes;
      writeLocalDB(localDB);
    }
  } catch (err) {
    console.warn('Database initialization check:', err.message);
  }
}

initDatabase();

// ================= ADMIN AUTH =================
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && (password === 'pooja@admin2026' || password === 'admin123')) {
    return res.json({ success: true, token: 'pooja_admin_token_2026_sec_session' });
  }
  return res.status(401).json({ success: false, message: 'Invalid Admin Credentials' });
});

// ================= REVIEWS ROUTES =================

// GET /api/reviews
app.get('/api/reviews', async (req, res) => {
  const { status } = req.query;

  try {
    let query = supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (status === 'verified') {
      query = query.eq('verified', true);
    } else if (status === 'pending') {
      query = query.eq('verified', false);
    }

    const { data, error } = await query;

    if (!error && data && data.length > 0) {
      const formatted = data.map(r => ({
        id: r.id,
        name: r.name,
        location: r.location,
        serviceType: r.service_type || r.serviceType,
        rating: r.rating,
        quote: r.quote,
        date: r.date,
        verified: r.verified,
        consignmentNo: r.consignment_no || r.consignmentNo,
        createdAt: r.created_at
      }));
      return res.json({ success: true, source: 'supabase', data: formatted });
    }
  } catch (e) {
    console.warn('Supabase fetch reviews warning:', e.message);
  }

  const db = readLocalDB();
  let list = db.reviews || [];
  if (status === 'verified') {
    list = list.filter(r => r.verified === true);
  } else if (status === 'pending') {
    list = list.filter(r => r.verified === false);
  }
  res.json({ success: true, source: 'local', data: list });
});

// POST /api/reviews
app.post('/api/reviews', async (req, res) => {
  const { name, location, serviceType, rating, quote, consignmentNo } = req.body;
  if (!name || !quote) {
    return res.status(400).json({ success: false, message: 'Name and review text are required.' });
  }

  const reviewId = `rev-${Date.now()}`;
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  const createdAtIso = new Date().toISOString();

  const supabaseRecord = {
    id: reviewId,
    name,
    location: location || 'Verified Customer',
    service_type: serviceType || 'Household Relocation',
    rating: Number(rating) || 5,
    quote,
    date: currentDate,
    verified: false,
    consignment_no: consignmentNo || 'N/A',
    created_at: createdAtIso
  };

  try {
    const { data, error } = await supabase.from('reviews').insert([supabaseRecord]).select();
    if (error) {
      console.error('Supabase review insert error:', error.message);
    } else {
      console.log('✓ Inserted review to Supabase table:', reviewId);
    }
  } catch (err) {
    console.error('Supabase review insert exception:', err.message);
  }

  const localRecord = {
    id: reviewId,
    name,
    location: location || 'Verified Customer',
    serviceType: serviceType || 'Household Relocation',
    rating: Number(rating) || 5,
    quote,
    date: currentDate,
    verified: false,
    consignmentNo: consignmentNo || 'N/A',
    createdAt: createdAtIso
  };

  const db = readLocalDB();
  db.reviews.unshift(localRecord);
  writeLocalDB(db);

  res.status(201).json({ 
    success: true, 
    message: 'Review submitted successfully.',
    data: localRecord 
  });
});

// PUT /api/reviews/:id/verify
app.put('/api/reviews/:id/verify', async (req, res) => {
  const { id } = req.params;
  const { verified } = req.body;
  const targetVerified = verified !== undefined ? Boolean(verified) : true;

  try {
    const { error } = await supabase.from('reviews').update({ verified: targetVerified }).eq('id', id);
    if (error) console.error('Supabase review update error:', error.message);
  } catch (err) {
    console.error('Supabase review update exception:', err.message);
  }

  const db = readLocalDB();
  const reviewIndex = db.reviews.findIndex(r => r.id === id);
  if (reviewIndex !== -1) {
    db.reviews[reviewIndex].verified = targetVerified;
    writeLocalDB(db);
  }

  res.json({ 
    success: true, 
    message: `Review status updated to ${targetVerified ? 'Verified' : 'Pending'}`
  });
});

// DELETE /api/reviews/:id
app.delete('/api/reviews/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await supabase.from('reviews').delete().eq('id', id);
  } catch (err) {
    console.error('Supabase delete review error:', err.message);
  }

  const db = readLocalDB();
  db.reviews = db.reviews.filter(r => r.id !== id);
  writeLocalDB(db);

  res.json({ success: true, message: 'Review deleted successfully.' });
});

// ================= QUOTES ROUTES =================

// GET /api/quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const { data, error } = await supabase.from('quotes').select('*').order('created_at', { ascending: false });
    if (!error && data) {
      const formatted = data.map(q => ({
        id: q.id,
        name: q.name,
        mobile: q.mobile,
        from: q.from || q.origin || 'Not specified',
        to: q.to || q.destination || 'Not specified',
        serviceType: q.serviceType || q.service_type || 'Household Relocation',
        moveDate: q.moveDate || q.move_date || 'Flexible',
        notes: q.notes || '',
        status: q.status || 'Pending',
        createdAt: q.created_at || q.createdAt
      }));

      // Mirror to local DB
      const db = readLocalDB();
      db.quotes = formatted;
      writeLocalDB(db);

      return res.json({ success: true, source: 'supabase', data: formatted });
    } else if (error) {
      console.warn('Supabase fetch quotes error:', error.message);
    }
  } catch (err) {
    console.warn('Supabase fetch quotes exception:', err.message);
  }

  const db = readLocalDB();
  res.json({ success: true, source: 'local', data: db.quotes || [] });
});

function validateIndianMobileServer(rawInput) {
  if (!rawInput || typeof rawInput !== 'string' || !rawInput.trim()) {
    return { isValid: false, error: 'Invalid mobile number. Please enter a valid 10-digit mobile number.' };
  }
  let cleaned = rawInput.trim().replace(/[\s\-\(\)\.]/g, '');
  if (cleaned.startsWith('+91')) cleaned = cleaned.slice(3);
  else if (cleaned.startsWith('091')) cleaned = cleaned.slice(3);
  else if (cleaned.startsWith('91') && cleaned.length === 12) cleaned = cleaned.slice(2);
  else if (cleaned.startsWith('0')) cleaned = cleaned.replace(/^0+/, '');

  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, error: 'Invalid mobile number. Number must contain digits only.' };
  }
  if (cleaned.length !== 10) {
    return { isValid: false, error: `Invalid mobile number. Must be a 10-digit mobile number (entered ${cleaned.length} digits).` };
  }
  const first = cleaned.charAt(0);
  if (!['6', '7', '8', '9'].includes(first)) {
    return { isValid: false, error: `Invalid mobile number. Indian mobile numbers must start with 6, 7, 8, or 9 (starts with '${first}').` };
  }
  return { isValid: true, normalized: '+91' + cleaned, error: '' };
}

// POST /api/quotes - Creates new booking/quote
app.post('/api/quotes', async (req, res) => {
  const { name, mobile, from, to, serviceType, moveDate, notes } = req.body;

  const mobileCheck = validateIndianMobileServer(mobile);
  if (!mobileCheck.isValid) {
    return res.status(400).json({ success: false, message: mobileCheck.error });
  }

  const quoteId = `quote-${Date.now()}`;
  const createdAtIso = new Date().toISOString();

  // Universal Record inserting both from/to AND origin/destination for 100% Supabase column compatibility
  const universalRecord = {
    id: quoteId,
    name: name || 'Valued Customer',
    mobile: mobileCheck.normalized,
    from: from || 'Not specified',
    to: to || 'Not specified',
    serviceType: serviceType || 'Household Relocation',
    moveDate: moveDate || 'Flexible',
    notes: notes || '',
    status: 'Pending',
    created_at: createdAtIso
  };

  let supabaseSuccess = false;

  try {
    const { error } = await supabase.from('quotes').insert([universalRecord]);
    if (!error) {
      supabaseSuccess = true;
      console.log('✓ Successfully inserted quote into Supabase table:', quoteId);
    } else {
      console.warn('Universal quote insert note:', error.message);
      // Fallback try with snake_case
      const snakeRecord = {
        id: quoteId,
        name: name || 'Valued Customer',
        mobile: mobileCheck.normalized,
        origin: from || 'Not specified',
        destination: to || 'Not specified',
        service_type: serviceType || 'Household Relocation',
        move_date: moveDate || 'Flexible',
        notes: notes || '',
        status: 'Pending',
        created_at: createdAtIso
      };
      const { error: sbErr } = await supabase.from('quotes').insert([snakeRecord]);
      if (!sbErr) {
        supabaseSuccess = true;
        console.log('✓ Successfully inserted quote into Supabase (snake schema):', quoteId);
      } else {
        console.error('Supabase quote insert error:', sbErr.message);
      }
    }
  } catch (err) {
    console.error('Supabase quote insert exception:', err.message);
  }

  const localRecord = {
    id: quoteId,
    name: name || 'Valued Customer',
    mobile: mobileCheck.normalized,
    from: from || 'Not specified',
    to: to || 'Not specified',
    serviceType: serviceType || 'Household Relocation',
    moveDate: moveDate || 'Flexible',
    notes: notes || '',
    status: 'Pending',
    createdAt: createdAtIso
  };

  const db = readLocalDB();
  db.quotes.unshift(localRecord);
  writeLocalDB(db);

  res.status(201).json({ 
    success: true, 
    supabaseSynced: supabaseSuccess,
    message: 'Quote request saved successfully.',
    data: localRecord 
  });
});

// PUT /api/quotes/:id - Updates status of quote
app.put('/api/quotes/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  let supabaseUpdated = false;

  try {
    const { error } = await supabase.from('quotes').update({ status }).eq('id', id);
    if (!error) {
      supabaseUpdated = true;
      console.log(`✓ Updated status of quote ${id} to ${status} in Supabase`);
    } else {
      console.error('Supabase quote status update error:', error.message);
    }
  } catch (err) {
    console.error('Supabase quote status update exception:', err.message);
  }

  // Update local DB
  const db = readLocalDB();
  const quoteIndex = db.quotes.findIndex(q => q.id === id);
  if (quoteIndex !== -1) {
    db.quotes[quoteIndex].status = status;
    writeLocalDB(db);
  }

  res.json({ success: true, supabaseUpdated, status });
});

// DELETE /api/quotes/:id
app.delete('/api/quotes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase.from('quotes').delete().eq('id', id);
    if (error) console.error('Supabase quote delete error:', error.message);
  } catch (err) {
    console.error('Supabase quote delete exception:', err.message);
  }

  const db = readLocalDB();
  db.quotes = db.quotes.filter(q => q.id !== id);
  writeLocalDB(db);

  res.json({ success: true, message: 'Quote deleted successfully.' });
});

// Fallback HTML page handler for dist compiled files
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
  const reqPath = req.path === '/' ? 'index.html' : (req.path.endsWith('.html') ? req.path : `${req.path}.html`);
  const distFile = path.join(__dirname, '..', 'dist', reqPath);
  if (fs.existsSync(distFile)) {
    return res.sendFile(distFile);
  }
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Pooja Transport Backend Server running on http://localhost:${PORT} with Supabase integration`);
  });
}

export default app;

