import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  routeArr = [];
  currentUrl= [];

  constructor(private router: Router ) {
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.currentUrl = event.url.split('/')
        this.routeArr = this.currentUrl.slice(1,this.currentUrl.length);
        console.log(event.url,'----',this.routeArr)
      }
    });
    this.routeArr.push()
  }

  ngOnInit() {
  }

  generateLink(len){
    let path="";
    for(let i=1; i<=len+1; i++){
      path += '/' + this.currentUrl[i];
    }
    return [path];
  }

}
