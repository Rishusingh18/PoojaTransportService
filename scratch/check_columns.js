import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mblcnitrxqzhbigbsqdr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibGNuaXRyeHF6aGJpZ2JzcWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjIzOTgsImV4cCI6MjEwMTU5ODM5OH0.94hKdSXgzM8yH47PImrhVeUonMEO2V3I1EHs77HkyCA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function checkReviews() {
  const { data, error } = await supabase.from('reviews').select('*').limit(5);
  console.log('Reviews data sample:', JSON.stringify(data, null, 2));
  console.log('Reviews error:', error);
}

checkReviews();
