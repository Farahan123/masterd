import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'projects/angular-google-charts/src/public_api';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ AppComponent, TestComponent, MainComponent],
  imports: [BrowserModule, BrowserAnimationsModule,MatCardModule,MatToolbarModule, AppRoutingModule,HttpClientModule,DefaultModule, GoogleChartsModule.forRoot('AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY')],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
