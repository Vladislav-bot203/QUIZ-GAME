import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://qwotzzkkymggpbexcvln.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3b3R6emtreW1nZ3BiZXhjdmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMzMyOTAsImV4cCI6MTk4MTYwOTI5MH0.sUHjDvVAlqNz7wEuf-edpcyAiD2NKA5dy5oMW2gpa9g';

export const supabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  }
});
