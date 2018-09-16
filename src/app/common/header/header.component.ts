import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  openmenu:Boolean = false;
  fixednav:Boolean = false;
  constructor() { }

  ngOnInit() {
    let _this = this;
    window.onscroll = function(){
      if(window.pageYOffset > jQuery('.top_bar').height()){
        _this.fixednav = true;
        jQuery('.top_bar').css('margin-bottom',jQuery('.navbar.navbar-default').height());
      }
      else{
        _this.fixednav = false;
        jQuery('.top_bar').css('margin-bottom','');
      }
    }
  }
  toggleNavbar(){
    this.openmenu == false ? this.openmenu = true:this.openmenu = false;
  }
}
