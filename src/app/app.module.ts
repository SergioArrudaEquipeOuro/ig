import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Corpo01Component } from './components/corpo01/corpo01.component';
import { Corpo02Component } from './components/corpo02/corpo02.component';
import { TimelineComponent } from './components/timeline-component/timeline-component.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { Corpo03Component } from './components/corpo03/corpo03.component';
import { Corpo04Component } from './components/corpo04/corpo04.component';
import { Corpo05Component } from './components/corpo05/corpo05.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },

  { path: 'c1', component: Corpo01Component },
  { path: 'c2', component: Corpo02Component },
  { path: 'c3', component: Corpo03Component },
  { path: 'c4', component: Corpo04Component },
  { path: 'c5', component: TimelineComponent },
  { path: 'footer', component: FooterComponent },


  

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Corpo01Component,
    Corpo02Component,
    TimelineComponent,
    FooterComponent,
    Corpo03Component,
    Corpo04Component,
    Corpo05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
