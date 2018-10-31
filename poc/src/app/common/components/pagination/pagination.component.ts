import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  

  // @Input() total = 0;
  // arr = [];
  // currentPage = 1;
  // constructor() { }

  // ngOnInit() {
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for(let i=1; i<=this.total; i++){
  //     this.arr.push(i);
  //   }
  // }


      //--------------new code-------------------

      @Input() length = 0;
      // @Input() perPage = 0;
      perPage = 5;
      @Output() selectedPageNo = new EventEmitter();
      lastPageNumber = 0;
      currentPage = 1;
      range = [];
      pp = new FormControl(5);
      constructor() { }
    
      ngOnInit() {
        this.pp.valueChanges.subscribe(d=>{
          this.perPage=d;
          this.ngOnChanges();
        });
      }
    
      ngOnChanges(){
        this.range = [];
        this.currentPage = 1;
        var divided = this.length / this.perPage;
        var roundedNumber = Math.ceil(divided);
        this.lastPageNumber = roundedNumber;

        for(var i=2; i<this.lastPageNumber; i++){
          this.range.push(i)
          if(i>6){
            break;
          }
        } 
    
      }
    
      prevPage(){
        if(this.currentPage!=1){
          this.pageNumberClicked(this.currentPage-1);
        }
      }
    
      nextPage(){
        if(this.currentPage!=this.lastPageNumber){
          this.pageNumberClicked(this.currentPage+1);
        }
      }
    
      leftEllips(){

      }
    
      rightEllips(){

      }
    

      pageNumberClicked(n){
        this.currentPage = n;
        this.range = [];
        let r = 2;
        let start = n-r;
        let end = n+2;
        if(n<5){
          start = 2;
          end = this.lastPageNumber>=7? 7 : this.lastPageNumber-1;
        }
        if( (this.lastPageNumber-n)<4 ){
          start = this.lastPageNumber-6>0? this.lastPageNumber-6 : 2;
          end = this.lastPageNumber-1;
        }
        
        for(let i=start; i<=end; i++){
          this.range.push(i)
        }
        console.log('currentpage---',this.currentPage,'start--'+start,'end----'+end);
      }

}
