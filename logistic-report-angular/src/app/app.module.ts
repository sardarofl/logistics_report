import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBackComponent } from './components/main-back/main-back.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DataShowComponent } from './components/data-show/data-show.component';

//materialize components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//services
import { AdddataService } from './services/adddata.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GetdataService } from './services/getdata.service';
import { BeLogisticAddDataComponent } from './components/be-logistic-add-data/be-logistic-add-data.component';
import { SetdataService } from './services/setdata.service';
import { DeletedataService } from './services/deletedata.service';


@NgModule({
  declarations: [
    AppComponent,
    MainBackComponent,
    UploadFileComponent,
    DataShowComponent,
    BeLogisticAddDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [AdddataService,GetdataService,SetdataService,DeletedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
