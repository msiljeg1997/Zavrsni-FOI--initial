import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(public router: Router) { }

  ngOnInit(): void {
    



}

naPocetnu(){
  this.router.navigate(['/index'])
}
naAutora(){
  this.router.navigate(['/oautoru'])
}
naKorisnika(){
  this.router.navigate(['/okorisniku'])
}
}