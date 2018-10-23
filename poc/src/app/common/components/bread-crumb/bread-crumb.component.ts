import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { menuItem } from 'src/app/common/config/leftnav.menu';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  routeArr = [];
  currentUrl= [];
  menuItem = menuItem;
  generatedBreadCrumbLink;

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
    
    // this.findLinkStart = true;
    // this.enableLinkbyComparingLeftNav(this.menuItem,path);
    // return this.generatedBreadCrumbLink;

  }

  // findLinkStart = true;
  // enableLinkbyComparingLeftNav(menuItem,path){
  //   for(let item of menuItem){
  //     if(item.children && item.children.length>0){
  //       this.enableLinkbyComparingLeftNav(item.children,path);
  //     }else {
  //       if( (('/'+item.link) == path) && this.findLinkStart ){ 
  //         console.log('-----item.link----',item.link,'-----path-----',path);
  //         this.generatedBreadCrumbLink = path;
  //         this.findLinkStart = false;
  //       }
  //       else{
  //         this.generatedBreadCrumbLink = null;
  //       }
  //     }
  //   }
  // }
}
