import { NgModule } from '@angular/core';
// tslint:disable-next-line: ordered-imports
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule,MatCardModule,MatToolbarModule, AppRoutingModule,HttpClientModule,DefaultModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
