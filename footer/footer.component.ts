import { Component } from '@angular/core';

@Component(
    {
        selector:'footer-comp',
        templateUrl:'footer.component.html',
        styleUrls:['footer.component.css']
    }
)
export class FooterComponent{
    title:string;
    constructor(){
        this.title="FOOTER";
    }
}