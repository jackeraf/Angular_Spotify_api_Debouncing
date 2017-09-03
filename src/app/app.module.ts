import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router"
import {HttpModule} from "@angular/http"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SpotifyService } from "./services/spotify.service"

const appRoutes:Routes = [

  { path: "", component: SearchComponent },
  { path: "about", component: AboutComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
