import { Component, OnInit } from '@angular/core';
import { TableHeader, TableRows } from 'src/app/common/interfaces/table';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  header: TableHeader = [
    {id:'1', label:'Vin', mappingKey: 'vin'},
    {id:'2', label:'Year', mappingKey: 'year', sortable: true},
    {id:'3', label:'Brand', mappingKey: 'brand', sortable: true},
    {id:'4', label:'Color', mappingKey: 'color'}
  ];

  data: TableRows = [
    { vin:'abcd', year:'2000', brand:'VW', color:'Orange' },
    { vin:'efgh', year:'2001', brand:'Audi', color:'Black' },
    { vin:'ijkl', year:'2002', brand:'Renault', color:'Gray' },
    { vin:'mnko', year:'2003', brand:'BMW', color:'Blue' },
    { vin:'pqrs', year:'2004', brand:'Mercedes', color:'Yellow' },
    { vin:'tuvw', year:'2005', brand:'Volvo', color:'Red' },
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
