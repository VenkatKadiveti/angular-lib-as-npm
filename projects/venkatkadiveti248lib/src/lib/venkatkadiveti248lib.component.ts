import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-venkatkadiveti248lib',
  templateUrl: './venkatkadiveti248lib.component.html',
  styleUrls: ['./venkatkadiveti248lib.component.scss']
})
export class Venkatkadiveti248libComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    console.log('venkat-lib')
  }

  navigate(url) {
    this.router.navigate([url])
  }

}
