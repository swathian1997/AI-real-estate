import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  supabase = createClient(
    'https://ntezhxyrsveyaelyxmgf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50ZXpoeHlyc3ZleWFlbHl4bWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MzY3MDEsImV4cCI6MjA5NTExMjcwMX0.kuhipgQ7WCVyt55lM1OgJ7VckOzzmdv8zUoPb6GpA7c'
  );

  constructor() {}

}