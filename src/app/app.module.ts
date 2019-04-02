import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CargaDemosService } from './services/carga-demos.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CargaComponent } from './components/carga/carga.component';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

@NgModule ({

  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TemplateComponent,
    DataComponent,
    CargaComponent,
    NgDropFilesDirective,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    ],
  providers: [ CargaDemosService ],
  bootstrap: [AppComponent]
})



export class AppModule { }







