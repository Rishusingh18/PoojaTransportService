import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mblcnitrxqzhbigbsqdr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibGNuaXRyeHF6aGJpZ2JzcWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjIzOTgsImV4cCI6MjEwMTU5ODM5OH0.94hKdSXgzM8yH47PImrhVeUonMEO2V3I1EHs77HkyCA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function test() {
  console.log('Testing quotes table...');
  const { data: quotes, error: qErr } = await supabase.from('quotes').select('*');
  console.log('Quotes res:', { count: quotes?.length, error: qErr });

  console.log('Testing reviews table...');
  const { data: reviews, error: rErr } = await supabase.from('reviews').select('*');
  console.log('Reviews res:', { count: reviews?.length, error: rErr });
}

test();
