import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
export interface csestudents
{
     id:number ,
     idnum:string,
     name:string,
     photo:string,
     subject:string
}
var ELEMENT_DATA: csestudents[] = [];
@Component({
  selector: 'app-cse1fail',
  templateUrl: './cse1fail.component.html',
  styleUrls: ['./cse1fail.component.css']
})

export class  Cse1failComponent implements OnInit , AfterViewInit {

 
  displayedColumns = ['id', 'idnum', 'name', 'photo','gpa'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;   
  @ViewChild('selectedApp') selectedApp: any;
  original_Data: any;
 

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private httpClient:HttpClient
  ) { 
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.getCsestudent();    
  }
  getCsestudent()
  {
      this.httpClient.get<any>('http://localhost:5000/cseremedial').subscribe(
        response =>{
          this.dataSource.data = response;
          this.original_Data=response;
        }
      );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter= filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }
  onBookChange(ob:any) {

    let selectedBook = ob.value;
    console.log(selectedBook);
    var data=this.original_Data;
    console.log(data);
    var k:any;
    var originl_Data:csestudents[]=[];
    var flag:any;
    flag=0;
    for(k in data)
    {
      if(selectedBook==data[k].subject)
      {
        originl_Data.push(data[k]);
      }
      if(selectedBook==undefined)
      {
         flag=1;
      }
    }
    if(flag==0)
    {
      ELEMENT_DATA=originl_Data;
    }
    if(flag==1)
    {
      this.ngOnInit();
    }
    this.ngAfterViewInit();
}

}