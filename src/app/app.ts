import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chatbot } from './chatbot/chatbot';
import { CommonModule } from '@angular/common';
import { PropertyDetails } from './property-details/property-details';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Chatbot, PropertyDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App  {


}
