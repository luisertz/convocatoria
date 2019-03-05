import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { FormsModule } from '@angular/forms';


@NgModule ({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemplateComponent,
    DataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
    ],
  providers: [  ],
  bootstrap: [AppComponent]
})



export class AppModule { }







