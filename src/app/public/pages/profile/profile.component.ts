// Angular core and other necessary imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Provides access to information about a route associated with a component loaded in an outlet
import { User } from "../../../user/model/user.entity"; // Importing the User model

// Component decorator providing metadata including the selector, HTML template, and CSS
@Component({
  selector: 'app-profile', // The CSS selector that identifies this component in a template
  templateUrl: './profile.component.html', // Location of the template file for this component
  styleUrl: './profile.component.css' // Location of the CSS file for this component
})
export class ProfileComponent implements OnInit {
  user: User = new User(); // Instantiating a new User object to hold user profile data
  selectedLink: string | undefined; // Property to track which link is currently selected

  // Constructor to inject dependencies
  constructor(
    private route: ActivatedRoute, // Injects the ActivatedRoute service which can be used to access route parameters
  ) {}

  // ngOnInit lifecycle hook: Executes after Angular initializes the component's views and child views
  ngOnInit() {
  }

  // Method to handle the selection of links, updating the `selectedLink` property based on user interaction
  selectLink(s: string) {
    this.selectedLink = s; // Sets the selected link state to the string passed to the method
  }

}
