import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-o-majstoru',
  templateUrl: './o-majstoru.component.html',
  styleUrls: ['./o-majstoru.component.scss']
})
export class OMajstoruComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
zatraziPosao(){
  this.router.navigate(['/zatraziposao']);
}
}
