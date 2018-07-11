import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {
  private mobilename:string;

  constructor() {
  this.mobilename="Asus Zenfone 4 (Blue, 8 GB)";
  }
   ngOnInit() {
  }

}
