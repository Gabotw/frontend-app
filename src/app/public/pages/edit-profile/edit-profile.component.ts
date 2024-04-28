// Import necessary Angular core modules
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Import the User model from user entity file
import {User} from "../../../user/model/user.entity";

// Component decorator with metadata defining the selector, HTML, and CSS files
@Component({
  selector: 'app-edit-profile', // Component's CSS selector
  templateUrl: './edit-profile.component.html', // Path to the component's HTML template
  styleUrl: './edit-profile.component.css' // Path to the component's CSS styles
})
export class EditProfileComponent implements OnInit{
  user: User = new User(); // Initializes 'user' with a new User object
  selectedLink: string | undefined; // Variable to track the currently selected link
  fileName: string | undefined; // Variable to store the name of the uploaded file

  // Constructor to inject dependencies
  constructor(
    private route: ActivatedRoute, // ActivatedRoute injection to access route parameters
  ) {}

  // ngOnInit lifecycle hook for initialization logic
  ngOnInit() {
  }

  // Method to set the selected link based on user interaction
  selectLink(s: string) {
    this.selectedLink = s; // Sets the selectedLink variable to the passed string
  }

  // Method to handle file input selection
  onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement; // Cast the event target to an HTMLInputElement
    let fileList: FileList | null = element.files; // Access the file list from the input element
    if (fileList && fileList.length > 0) {
      this.fileName = fileList[0].name;  // Update fileName with the first file's name if a file is selected
    } else {
      this.fileName = 'Ningún archivo seleccionado';  // Reset fileName if no file is selected
    }
  }
}
