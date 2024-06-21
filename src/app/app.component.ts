import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MedicDefense';
  options = [
    { path: '/Lawyers', title: 'Lawyers'},
    { path: '/summary', title: 'Summary'},
    { path: '/Subscription', title: 'Subscription'},
    { path: '/profile', title: 'Profile'},
    { path: '/educational resource', title: 'Educational Resource'},
    { path: '/landingPage', title: 'LandingPage'},
  ]
}

