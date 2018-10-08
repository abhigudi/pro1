import { Component, OnInit } from '@angular/core';
import { menuItem } from 'src/app/common/components/leftnav/leftnav.menu';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {

  menuItem = menuItem;
  level1menu = null ;level2menu = null;

  constructor() { }

  ngOnInit() {
  }

}
