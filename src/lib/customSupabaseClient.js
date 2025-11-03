import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kxdhfomxawtjspujbceb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4ZGhmb214YXd0anNwdWpiY2ViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NjA5ODUsImV4cCI6MjA3NzUzNjk4NX0.Kx8vhq-71a74YmsjNY6bJGXNEiP0GiHYZ1nYIjpIszE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);