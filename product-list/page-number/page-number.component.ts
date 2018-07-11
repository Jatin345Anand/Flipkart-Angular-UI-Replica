import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-number',
  templateUrl: './page-number.component.html',
  styleUrls: ['./page-number.component.css']
})
export class PageNumberComponent implements OnInit {
  private Isclassforborder1:string;
  private Isclassforborder2:string;
  private Isclassforborder3:string;
  private Isclassforborder4:string;
  private Isclassforborder5:string;
  private isbottomatone:number[];
 //  private isbottomborder:boolean;
 //  private isbottomborder2:boolean;
 //  private isbottomborder3:boolean;
 //  private isbottomborder4:boolean;
 //  private isbottomborder5:boolean;
 //  private isbottomborder1:boolean;
   constructor() {
    
     this.Isclassforborder1="withoutbottom";
     this.Isclassforborder2="withoutbottom";
     this.Isclassforborder3="withoutbottom";
     this.Isclassforborder4="withoutbottom";
     this.Isclassforborder5="withoutbottom";
     this.isbottomatone=[1,0,0,0,0];
     // this.isbottomborder=false;
     // this.isbottomborder=false;
     // this.isbottomborder2=false;
     // this.isbottomborder3=false;
     // this.isbottomborder4=false;
     // this.isbottomborder5=false;
     
    }
 
   ngOnInit() {
   }
   dochangeborder1(event :Event):void{
     this.isbottomatone=[1,0,0,0,0];
      console.log(this.isbottomatone);
     
      if(this.isbottomatone[0]==1){
        console.log("YES1");
        this.Isclassforborder1="withbottom";
 
      }
      else if(this.isbottomatone[0]==0){
       this.Isclassforborder1="withoutbottom";
        
      }
      this.Isclassforborder2="withoutbottom";
        this.Isclassforborder3="withoutbottom";
        this.Isclassforborder4="withoutbottom";
        this.Isclassforborder5="withoutbottom";
   }
   dochangeborder2(event :Event):void{
      this.isbottomatone=[0,1,0,0,0]; 
     if(this.isbottomatone[1]==1){
       console.log("YES2");
       this.Isclassforborder2="withbottom";
     }
     else if(this.isbottomatone[1]==0){
       this.Isclassforborder2="withoutbottom";
        }
 
       this.Isclassforborder3="withoutbottom";
       this.Isclassforborder4="withoutbottom";
       this.Isclassforborder5="withoutbottom";
       this.Isclassforborder1="withoutbottom";
    
   }
   dochangeborder3(event :Event):void{ 
     this.isbottomatone=[0,0,1,0,0];
     if(this.isbottomatone[2]==1){
       console.log("YES3");
       this.Isclassforborder3="withbottom";
     }
     else if(this.isbottomatone[2]==0){
     this.Isclassforborder3="withoutbottom";
     }
 
     this.Isclassforborder4="withoutbottom";
     this.Isclassforborder5="withoutbottom";
       this.Isclassforborder1="withoutbottom";
      this.Isclassforborder2="withoutbottom";
      
     
   }
   dochangeborder4(event :Event):void{
     this.isbottomatone=[0,0,0,1,0];
     console.log(this.isbottomatone); 
      if(this.isbottomatone[3]==1){
        console.log("YES4");
        this.Isclassforborder4="withbottom";
      }
      else if(this.isbottomatone[3]==0){
        this.Isclassforborder4="withoutbottom";
      }
      this.Isclassforborder2="withoutbottom";
      this.Isclassforborder3="withoutbottom";
      this.Isclassforborder1="withoutbottom";
      this.Isclassforborder5="withoutbottom";
 
      
   }
   dochangeborder5(event :Event):void{
     // if(this.isbottomborder5){
     //   this.Isclassforborder5="withoutbottom";
     // }
     // else if(!this.isbottomborder5){
     //   this.Isclassforborder5="withbootom";
     //   this.isbottomborder5=!this.isbottomborder5;
     // }
     this.isbottomatone=[0,0,0,0,1];
     console.log(this.isbottomatone); 
    if(this.isbottomatone[4]==1){
        console.log("YES5");
        this.Isclassforborder5="withbottom";
      }
      else if(this.isbottomatone[4]==0){
       this.Isclassforborder5="withoutbottom";
      }
      this.Isclassforborder2="withoutbottom";
      this.Isclassforborder3="withoutbottom";
      this.Isclassforborder1="withoutbottom";
      this.Isclassforborder4="withoutbottom";
   }  
}
