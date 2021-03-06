import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PrettyJsonModule} from 'angular2-prettyjson';
import { EscapeHtmlPipe } from './keephtml.pipe';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    EscapeHtmlPipe
  ],
  imports: [
    PrettyJsonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
