import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-my-datatable',
  templateUrl: './my-datatable.component.html',
  styleUrls: ['./my-datatable.component.css']
})
export class MyDatatableComponent implements OnInit {
  @Input() total_records:number;
  @Input() isLoading:Boolean;
  @Input() isLoaded:Boolean;
  @Input() pagingMode;
  @Input() Columns:string[];
  @Input() rows;
  @Input() page=1

  pages =[]
  totalPage;
  ngOnInit(){
    this.Columns = this.displayedColumns
    this.dataSource = ELEMENT_DATA
    this.total_records = 1000
    if(this.total_records % 100 == 0){
      this.totalPage = this.total_records/100
    }else{
      this.totalPage = this.total_records/100+1
    }
    for(let i = 1;i<=this.total_records;i++){
      this.pages[i] = i;
    }
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  

 

  constructor() {
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  changepage(event){
    
    const content = event.target.innerHTML
    if(content=='Previous'){
      this.page = this.page -1
      if(this.page < 1){
        this.page = 1
      }
    }else if(content =='Next'){
      if(this.page<this.totalPage){
        this.page = this.page + 1; 
        if(this.page > this.totalPage){
          this.page = this.totalPage
        }
      }
    }else{
      this.page = Number(content)
    }

  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];