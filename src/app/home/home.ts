import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  properties: any[] = [];

  constructor(private supabaseService: SupabaseService) {}

  async ngOnInit() {
    const { data, error } = await this.supabaseService.supabase
      .from('properties')
      .select('*');

    if (data) {
      this.properties = data;
      console.log(this.properties);
    }

    if (error) {
      console.error(error);
    }
  }
}
