import { Component } from '@angular/core';

@Component(
    {
        selector:'navbar-comp',
        templateUrl:'navbar.component.html',
        styleUrls:['navbar.component.css']
    }
)
export class NavbarComponent{
    title:string;
    constructor(){
        this.title="NAVBAR";
    }
}