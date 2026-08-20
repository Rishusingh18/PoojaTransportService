export const SUPABASE_URL = 'https://mblcnitrxqzhbigbsqdr.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibGNuaXRyeHF6aGJpZ2JzcWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjIzOTgsImV4cCI6MjEwMTU5ODM5OH0.94hKdSXgzM8yH47PImrhVeUonMEO2V3I1EHs77HkyCA';

export async function insertSupabaseQuote(record: Record<string, any>) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/quotes`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(record)
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error('Direct Supabase quote REST error:', err);
    return { ok: false, error: err };
  }
}

export async function insertSupabaseReview(record: Record<string, any>) {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(record)
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error('Direct Supabase review REST error:', err);
    return { ok: false, error: err };
  }
}

let _supabaseClient: any = null;

export async function getSupabase() {
  if (!_supabaseClient) {
    const { createClient } = await import('@supabase/supabase-js');
    _supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  return _supabaseClient;
}
