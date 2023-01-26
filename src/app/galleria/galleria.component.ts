import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  constructor(private router:Router, private el:ElementRef, private renderer:Renderer2) { }

  ngOnInit(): void {

    const imgSrc = "src/assets/1-1.jpeg";

    let divs = this.el.nativeElement.querySelectorAll("#photoArray > div");
    for (let i = 0; i < divs.length; i++) {
      let imgSrc = divs[i].querySelector("img").getAttribute("src");
      this.renderer.setStyle(divs[i], 'background-size', 'cover');
      this.renderer.setStyle(divs[i], 'background-image', `url(${imgSrc})`);
    }
  }

  oAutoruRuta(){
    this.router.navigate(['/oposlu']);
  }
}
