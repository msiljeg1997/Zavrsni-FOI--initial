import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-o-zavrsenom-poslu',
  templateUrl: './o-zavrsenom-poslu.component.html',
  styleUrls: ['./o-zavrsenom-poslu.component.scss']
})
export class OZavrsenomPosluComponent implements OnInit {

  constructor(private router:Router, private el:ElementRef, private renderer:Renderer2,) { }


  ngOnInit() {

    
  }

}
