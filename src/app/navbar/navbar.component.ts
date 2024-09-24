import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() header: string | undefined;
  @Input() content!: string;
  @Input() footer!: string;
  @Input() buttonLabel!: string; // Label for the button
  @Input() imageURL!: string; // Label for the image

  @Output() buttonClick = new EventEmitter<void>(); // Event emitter for button click
  isFlipped:boolean=false;


  onButtonClick() {}

  flipCard(){
    this.isFlipped=!this.isFlipped;
  }


}
