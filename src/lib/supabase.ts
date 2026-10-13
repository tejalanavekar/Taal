import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// AsyncStorage touches `window` immediately, which crashes Expo Router's
// server-side render (Node has no `window`). No-op there; use real storage
// only once the app is actually running in a browser/device.
const ssrSafeStorage = {
  getItem: (key: string) =>
    typeof window === "undefined"
      ? Promise.resolve(null)
      : AsyncStorage.getItem(key),
  setItem: (key: string, value: string) =>
    typeof window === "undefined"
      ? Promise.resolve()
      : AsyncStorage.setItem(key, value),
  removeItem: (key: string) =>
    typeof window === "undefined"
      ? Promise.resolve()
      : AsyncStorage.removeItem(key),
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ssrSafeStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
