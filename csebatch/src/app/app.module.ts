import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsestudentsComponent } from './csestudents/csestudents.component';
import {HttpClientModule} from '@angular/common/http';
import { TopperComponent } from './topper/topper.component';
import { MyclassComponent } from './myclass/myclass.component';
import { Cse1failComponent } from './cse1fail/cse1fail.component';
import {FormsModule} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material/core'
@NgModule({
  declarations: [
    AppComponent,
    CsestudentsComponent,
    TopperComponent,
    MyclassComponent,
    Cse1failComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSelectModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[CsestudentsComponent]
})
export class AppModule { }
