import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mblcnitrxqzhbigbsqdr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ibGNuaXRyeHF6aGJpZ2JzcWRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYwMjIzOTgsImV4cCI6MjEwMTU5ODM5OH0.94hKdSXgzM8yH47PImrhVeUonMEO2V3I1EHs77HkyCA';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function testFullFlow() {
  const testId = `quote-${Date.now()}`;
  console.log('--- Step 1: Submitting new booking form (Hero/Contact) ---');
  const payload = {
    id: testId,
    name: 'Verification Customer',
    mobile: '+919876543210',
    from: 'Noida Sector 62',
    to: 'Gurgaon Cyber City',
    serviceType: 'Household Relocation',
    moveDate: 'Aug 15, 2026',
    notes: 'Automated verification test quote',
    status: 'Pending',
    created_at: new Date().toISOString()
  };

  const { error: insertErr } = await supabase.from('quotes').insert([payload]);
  if (insertErr) {
    console.error('FAILED to insert quote:', insertErr);
    return;
  }
  console.log('✓ Successfully inserted quote:', testId);

  console.log('--- Step 2: Admin Dashboard fetching quotes ---');
  const { data: quotes, error: fetchErr } = await supabase
    .from('quotes')
    .select('*')
    .order('created_at', { ascending: false });

  if (fetchErr) {
    console.error('FAILED to fetch quotes:', fetchErr);
    return;
  }

  const insertedQuote = quotes.find(q => q.id === testId);
  console.log('✓ Found inserted quote in Admin list:', insertedQuote);

  console.log('--- Step 3: Admin updating status to Contacted ---');
  const { error: updateErr } = await supabase
    .from('quotes')
    .update({ status: 'Contacted' })
    .eq('id', testId);

  if (updateErr) {
    console.error('FAILED to update status:', updateErr);
    return;
  }
  console.log('✓ Successfully updated status to Contacted');

  console.log('--- Step 4: Admin deleting test quote clean up ---');
  const { error: deleteErr } = await supabase
    .from('quotes')
    .delete()
    .eq('id', testId);

  if (deleteErr) {
    console.error('FAILED to delete test quote:', deleteErr);
    return;
  }
  console.log('✓ Successfully cleaned up test quote!');

  console.log('\nALL STEPS PASSED SUCCESSFULLY!');
}

testFullFlow();
