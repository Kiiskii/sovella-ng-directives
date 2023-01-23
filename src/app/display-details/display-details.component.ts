import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css'],
})
export class DisplayDetailsComponent {
  isVisible: boolean = true;

  onShowText() {
    this.isVisible = this.isVisible ? false : true;
  }
}
