import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrtprmwpyyyprlkgvfeb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydHBybXdweXl5cHJsa2d2ZmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NjgzMDEsImV4cCI6MjA1MDA0NDMwMX0.AK57eAqjZTnfbxMkZGj4o3PXKZaGTxuDL16iACFFP_4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
