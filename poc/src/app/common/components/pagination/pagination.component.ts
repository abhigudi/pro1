import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

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
      @Input() perPage = 0;
      @Output() selectedPageNo = new EventEmitter();
      lastPageNumber = 0;
      currentPage = 1;
      range = [];
      constructor() { }
    
      ngOnInit() {
      }
    
      ngOnChanges(){
        this.range = [];
        this.currentPage = 1;
        var divided = this.length / this.perPage;
        var roundedNumber = Math.ceil(divided);
        this.lastPageNumber = roundedNumber;

        for(var i=2; i<this.lastPageNumber; i++){
          this.range.push(i)
          if(i>3){
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
        let start = 0;
        let end = 0;
        if(n-r <= 1){
          start = 2;
          end = ((r*2)+1);
        }
        if(n+r >= this.lastPageNumber){
          end = this.lastPageNumber-1;
          start = end - ((r*2)+1);
        }
        if(n-r > 1 && n+r < this.lastPageNumber){
          start = n-r;
          end = n+r;
        }
        for(let i=start; i<=end; i++){
          this.range.push(i)
        }
        console.log('currentpage---',this.currentPage,'start--'+start,'end----'+end);
      }

}
