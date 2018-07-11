import { Component } from '@angular/core';

@Component(
    {
        selector:'header-comp',
        templateUrl:'header.component.html',
        styleUrls:['header.component.css']
    }
)
export class HeaderComponent{
    title:string;
    constructor(){
        this.title="HEADER";
    }
}