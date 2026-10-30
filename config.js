// Paste your values from Supabase → Project Settings → API
window.APP_CONFIG = {
  SUPABASE_URL: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZHZudGtzZ2hzd2pwemhhY25mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNzYyOTYsImV4cCI6MjEwODk1MjI5Nn0.d7407xPwm9enhVvHy4cTITBriOoi1fvE4g4HS_h-AdI",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyZHZudGtzZ2hzd2pwemhhY25mIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MzM3NjI5NiwiZXhwIjoyMTA4OTUyMjk2fQ.AS88oRpqAXgDbmNDfZDpqgLCPYxacZrszXmFw6W00A4"
};

window.db = supabase.createClient(APP_CONFIG.SUPABASE_URL, APP_CONFIG.SUPABASE_ANON_KEY);

window.esc = (s) => String(s ?? "").replace(/[&<>"']/g, c =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
