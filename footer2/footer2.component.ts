import { Component } from '@angular/core';

@Component(
    {
        selector:'footer2-comp',
        templateUrl:'footer2.component.html',
        styleUrls:['footer2.component.css']
    }
)
export class Footer2Component{
    title:string;
    constructor(){
        this.title="FOOTER2";
    }
}