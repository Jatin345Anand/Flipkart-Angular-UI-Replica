import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item2-laptop',
  templateUrl: './item2-laptop.component.html',
  styleUrls: ['./item2-laptop.component.css']
})
export class Item2LaptopComponent implements OnInit {
  private laptopname:string;
  private laptopname2:string;
  private laptopname3:string;
  constructor() {
  this.laptopname=" Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Lapto...";
  this.laptopname2="Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop &nbsp;&nbsp;(15.6 inch, Onyx Black, 2.2 kg)"  
  this.laptopname3="Apple MacBook Air Core i5 5th Gen - (8 GB/128 GB SSD/Mac OS Sierra) MQD32HN/A A1466"; 
} 
  ngOnInit() {
  }

}
