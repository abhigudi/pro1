import { Component, OnInit, Input } from '@angular/core';
import { TableHeader, TableRows } from '../../interfaces/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() header:TableHeader;
  @Input() rows:TableRows;

  constructor() { }

  ngOnInit() {
  }

}
