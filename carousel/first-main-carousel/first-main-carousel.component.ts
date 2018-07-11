import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-main-carousel',
  templateUrl: './first-main-carousel.component.html',
  styleUrls: ['./first-main-carousel.component.css']
})
export class FirstMainCarouselComponent implements OnInit {
  slides:string[] = [];
  constructor(){
    this.slides = ["https://rukminim1.flixcart.com/flap/3376/560/image/3f9f0a.jpg?q=50", "https://rukminim1.flixcart.com/flap/3376/560/image/5dbb22.jpg?q=50", "https://rukminim1.flixcart.com/flap/3376/560/image/67237d.jpg?q=50"];
  }
   
  ngOnInit() {
  }

}
