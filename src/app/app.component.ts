import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  document: any;
  ngOnInit(): void {
    setTimeout(() => {
      this.animateSVG();
    }, 1000); // Delay of 1 second

  }

  animateSVG() {
    const svgContainer = document.getElementById('bay');
    svgContainer?.classList.add('active');
    
  }


  @HostListener('document:mousemove', ['$event'])
  update(e: MouseEvent) {
    e.stopPropagation(); // Prevent event propagation
    const x = e.clientX;
    const y = e.clientY;
    const parentRect = document.body.getBoundingClientRect(); // Use document.body instead of child elements
    let offsetX = x - parentRect.left; // Calculate offsetX relative to the main body
    let offsetY = y - parentRect.top; // Calculate offsetY relative to the main body

    // Get the position of whole container 
    const containerRect = document.querySelector('.whole-container')?.getBoundingClientRect();
    const containerX = containerRect?.left || 0;
    const containerY = containerRect?.top || 0;
    offsetX = offsetX - containerX;
    offsetY = offsetY - containerY;

    document.documentElement.style.setProperty('--cX', offsetX + 'px');
    document.documentElement.style.setProperty('--cY', offsetY + 'px');
  
  }
  
 
  
  title = 'Nags_Folio';

  
}
