import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  date1=new Date();
  currentYear=this.date1.getUTCFullYear(); 
  currentMonth=this.date1.getUTCMonth()+1; 
  currentDay=this.date1.getUTCDay(); 
  TodayDate="2022-03-14";
FinalMonth:any;
FinalDay:any;
  ngOnInit(): void {
if(this.currentMonth<10){
  this.FinalMonth="0" +this.currentMonth;
}else{
  this.FinalMonth=this.currentMonth;
}




if(this.currentDay<10){
  this.FinalDay="0" +this.currentDay;
}else{
  this.FinalDay=this.currentDay;
}

this.TodayDate=this.currentYear+"-"+this.FinalMonth+"-"+this.FinalDay;
  }
  OfferRideform(){
    document.getElementById("line1")?.scrollIntoView({behavior:'smooth'})
  }
 
}

