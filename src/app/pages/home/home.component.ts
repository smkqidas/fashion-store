import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private slideIndex:any;
  private intClear:any;
  constructor() { }

  ngOnInit() {
    this.slideIndex = 1;
    this.showDivs(this.slideIndex);
    this.intClear = setInterval(()=>{
      this.showDivs(this.slideIndex += 1);
    },5000)
  }
    
  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
    clearInterval(this.intClear);
    this.intClear = setInterval(()=>{
      this.showDivs(this.slideIndex += 1);
    },5000)
  }
  showDivs(n) {
    var i;
    let x:any = document.getElementsByClassName("mySlides");
    if (n > x.length) {this.slideIndex = 1}    
    if (n < 1) {this.slideIndex = x.length}
    for (i = 0; i < x.length; i++) { 
       x[i].classList.remove('active_slide');  
    }
    x[this.slideIndex-1].classList.add('active_slide');  
  }
}
