import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/common/services/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  expandLeftMenu: boolean = false;

  constructor(private appStateService:AppStateService) { }

  ngOnInit() {
    this.appStateService.expandLeftMenu.subscribe(state=>{
      this.expandLeftMenu = state?true:false;
    })
  }

  barsClicked(){
    this.expandLeftMenu = !this.expandLeftMenu;
    this.appStateService.expandLeftMenu.next(this.expandLeftMenu);
  }
}
