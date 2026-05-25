import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  properties: any[] = [];

  constructor(private supabaseService: SupabaseService, 
    private cdr: ChangeDetectorRef) {}

 async ngOnInit() {

  try {

    const { data, error } = await this.supabaseService.supabase
      .from('properties')
      .select('*');

    console.log('DATA:', data);
    console.log('ERROR:', error);

    if (data) {
      this.properties = data || [];
    }
  } catch(err) {

    console.log(err);

  }

}}
