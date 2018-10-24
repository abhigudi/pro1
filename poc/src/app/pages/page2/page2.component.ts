import { Component, OnInit } from '@angular/core';
import { TableHeader, TableRows } from 'src/app/common/interfaces/table';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  headerFC = new FormControl();
  rowFG = new FormGroup({});
  enableActions = false;
  allSelected = false;

  header: TableHeader = [
    {id:'0', label:'', input:{type:'checkbox', formControl:this.headerFC}, mappingKey: '_input', widthpx:50 },
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

  constructor() {
    this.data.map(item=>{
      this.rowFG.addControl(item.vin,new FormControl())
      item['_input'] = this.rowFG.controls[item.vin];
    })
    console.log(this.data);
   }

  ngOnInit() {
    this.rowFG.valueChanges.subscribe(obj=>{
      for(let key in obj){
        if(!obj[key]){this.allSelected=false; break;}
        else{ this.allSelected = true; }
      }
      if(this.allSelected){ this.headerFC.setValue(true) }
      else{ this.headerFC.setValue(false);}
      this.enableActions = false;
      for(let key in obj){
        if( obj[key] ){ this.enableActions = true; break; }
      }
    })

    this.headerFC.valueChanges.subscribe(val=>{
     if(val==true && this.allSelected==false ){
       let obj = this.setallValueObj(this.rowFG.value,true);
       this.rowFG.setValue(obj);
     }
     if(val==false && this.allSelected==true){
      let obj = this.setallValueObj(this.rowFG.value,false);
      this.rowFG.setValue(obj);
     }
    })
  }

  setallValueObj(obj,val){
    for(let key in obj){ obj[key]=val; }
    return obj;
  }

  print(){
    this.data.forEach(item=>{
      let obj = this.rowFG.value;
      for(let key in obj){
        if( key==item.vin && obj[key] ){
          console.log('-------Printing selected items-------',item);
        }
      }
    })
  }

}
