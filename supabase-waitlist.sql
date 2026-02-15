-- Waitlist table: matches what the site sends (first_name, last_name, email, sport, grad_year, state, phone, created_at)
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  sport text not null,
  grad_year text not null default '',
  state text,
  phone text,
  created_at timestamptz not null default now(),
  unique(email)
);

-- RLS: allow anonymous inserts from the site (publishable key uses anon role)
alter table public.waitlist enable row level security;

drop policy if exists "Allow anonymous insert" on public.waitlist;
create policy "Allow anonymous insert"
  on public.waitlist for insert
  to anon
  with check (true);

-- Only service role (or you in dashboard) can read
drop policy if exists "Service role can read" on public.waitlist;
create policy "Service role can read"
  on public.waitlist for select
  to service_role
  using (true);
