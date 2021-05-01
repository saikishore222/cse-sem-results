import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import {ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
export interface myclass
{
     id:number ,
  idnum:string,
     name:string,
     photo:string,
     gpa:string
}

const ELEMENT_DATA: myclass[] = [];
@Component({
  selector: 'app-myclass',
  templateUrl: './myclass.component.html',
  styleUrls: ['./myclass.component.css']
})
export class MyclassComponent implements OnInit {

  
  displayedColumns = ['id', 'idnum', 'name', 'photo','gpa'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;    


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.getCsestudent();
    
  }
  getCsestudent()
  {
      this.httpClient.get<any>('http://localhost:5000/cse1').subscribe(
        response =>{
          console.log(response);
          this.dataSource.data = response;         
        }
      );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter= filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }
}
