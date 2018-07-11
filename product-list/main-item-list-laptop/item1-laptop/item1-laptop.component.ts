import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item1-laptop',
  templateUrl: './item1-laptop.component.html',
  styleUrls: ['./item1-laptop.component.css']
})
export class Item1LaptopComponent implements OnInit {
  private laptopname:string;
  private laptopname2:string;
  
  constructor() {
  this.laptopname=" Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Lapto...";
  this.laptopname2="Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop &nbsp;&nbsp;(15.6 inch, Onyx Black, 2.2 kg)"   
}
   ngOnInit() {
  }

}
