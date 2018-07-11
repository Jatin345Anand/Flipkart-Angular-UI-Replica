import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css']
})
export class Item1Component implements OnInit {
  private mobilename:string;

  constructor() {
  this.mobilename="Asus Zenfone 4 (Blue, 8 GB)";
  }

  ngOnInit() {
  }

}
