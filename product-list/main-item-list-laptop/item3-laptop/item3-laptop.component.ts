import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item3-laptop',
  templateUrl: './item3-laptop.component.html',
  styleUrls: ['./item3-laptop.component.css']
})
export class Item3LaptopComponent implements OnInit {
  private laptopname:string;
  private laptopname2:string;
  
  constructor() {
  this.laptopname=" Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Lapto...";
  this.laptopname2="Dell Inspiron 15 5000 Core i3 6th Gen - (4 GB/1 TB HDD/Windows 10 Home) 5567 Laptop"   
}  ngOnInit() {
  }

}
