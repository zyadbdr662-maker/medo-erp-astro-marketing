import { createClient } from '@supabase/supabase-js';

// Read environment variables safely for build and runtime
const supabaseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_SUPABASE_URL) || process.env.PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.PUBLIC_SUPABASE_ANON_KEY) || process.env.PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
