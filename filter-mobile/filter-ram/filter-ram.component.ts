import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-ram',
  templateUrl: './filter-ram.component.html',
  styleUrls: ['./filter-ram.component.css']
})
export class FilterRamComponent implements OnInit {
  private isShow:boolean;
  private flagforvaluesoffilterRAM:boolean;
  private angleclass:string;
  private myclassforitag:string;
  private flagforvaluesoffilterRAMclearall:boolean;
  constructor() { 
    this.isShow=true;
    this.flagforvaluesoffilterRAM=true;
    this.angleclass="";
    this.myclassforitag='fas fa-angle-down';
    this.flagforvaluesoffilterRAMclearall=true;
  }

  ngOnInit() {
  }
  doshowhideonfilterRAM(event: Event):void{
    //  console.log("hi.."+event.target.value);
     if(!this.isShow){
      console.log("false");
      this.flagforvaluesoffilterRAM=false;

    this.myclassforitag='fas fa-angle-up';
      // flagforvaluesoffiltername    
    //  document.getElementById("ramlist").style.display='block';   
    // document.querySelector('#rambutton').style.transform = 'rotate(180deg)';
    // this.angleclass.style.transform = 'rotate(180deg)';
     this.isShow=!this.isShow; 
    }
    else if(this.isShow){
      console.log("true");
      this.flagforvaluesoffilterRAM=true;

    this.myclassforitag='fas fa-angle-down';
      // this.angleclass.style.transform = 'rotate(0deg)';
    //  document.getElementById("ramlist").style.display='none'; 
    //  document.querySelector('#rambutton').style.transform = 'rotate(0deg)';
        
     this.isShow=!this.isShow; 
    
    }
       
    }
}
