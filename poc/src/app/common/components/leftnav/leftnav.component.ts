import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/common/config/leftnav.menu';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/common/services/app-state.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  menuItem = menuItem;
  level1menu = null ;level2menu = null;
  menuExpandClass:boolean = false;

  constructor(private router:Router,private appStateService:AppStateService) { }

  ngOnInit() {
    this.appStateService.expandLeftMenu.subscribe(state=>{
      console.log('---men state----',state);
      this.menuExpandClass = state?true:false;
    })
  }

  menuExpand(){
    this.appStateService.expandLeftMenu.next(true);
  }

  menuCollapse(){
    this.appStateService.expandLeftMenu.next(false);
  }

  setlevel1menu(item){
    if(item.link){this.router.navigate([item.link]);this.resetAllMenuLevel();}
    else{this.appStateService.expandLeftMenu.next(true);}
    this.level1menu = item.children;
    this.level2menu = null;
  }

  setlevel2menu(item){
    if(item.link){this.router.navigate([item.link]);this.resetAllMenuLevel();}
    this.level2menu = item.children
  }

  setlevel3menu(item){
    if(item.link){this.router.navigate([item.link]);this.resetAllMenuLevel();}
  }

  resetAllMenuLevel(){
    this.level1menu = null;
    this.level2menu = null;
    this.menuCollapse();
  }
  

}
