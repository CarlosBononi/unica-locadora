import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fmmelazwlxburhplaikt.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtbWVsYXp3bHhidXJocGxhaWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5Mjk2NjgsImV4cCI6MTc2NTQ2NTY2OH0.i0OxSZ3t2mQ3e4v5w6x7y8z9a0b1c2d3e4f5g6h7i8'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Auth Functions
export const auth = {
  signUp: async (email, password) => {
    return await supabase.auth.signUp({ email, password })
  },
  signIn: async (email, password) => {
    return await supabase.auth.signInWithPassword({ email, password })
  },
  signOut: async () => {
    return await supabase.auth.signOut()
  },
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }
}

// Clients Table Functions
export const clients = {
  list: async () => {
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },
  create: async (cliente) => {
    const { data, error } = await supabase
      .from('clientes')
      .insert([cliente])
      .select()
    return { data, error }
  },
  update: async (id, updates) => {
    const { data, error } = await supabase
      .from('clientes')
      .update(updates)
      .eq('id', id)
      .select()
    return { data, error }
  },
  delete: async (id) => {
    const { error } = await supabase
      .from('clientes')
      .delete()
      .eq('id', id)
    return { error }
  }
}

// Vehicles Table Functions
export const vehicles = {
  list: async () => {
    const { data, error } = await supabase
      .from('veiculos')
      .select('*')
      .order('created_at', { ascending: false })
    return { data, error }
  },
  create: async (vehicle) => {
    const { data, error } = await supabase
      .from('veiculos')
      .insert([vehicle])
      .select()
    return { data, error }
  }
}
