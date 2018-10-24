import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-subpage-common',
  templateUrl: './subpage-common.component.html',
  styleUrls: ['./subpage-common.component.css']
})
export class SubpageCommonComponent implements OnInit {

  inp = new FormControl();
  check = new FormControl();
  
  constructor() { }

  ngOnInit() {
  }

}
