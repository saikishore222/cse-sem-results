import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class topper
{
  constructor(
    public idnum:string,
    public name:string,
    public photo:string,
    public gpa:string
  )
  {}
}
@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.css']
})
export class TopperComponent implements OnInit {

  csetopper:topper[] | undefined;
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit(): void {
    this.getCsestudent();
  }
  getCsestudent()
  {
      this.httpClient.get<any>('https://saikishore222.github.io/thirdapi/topper.json').subscribe(
        response =>{
          console.log(response);
          this.csetopper=response;
        }
      );
  }
}
