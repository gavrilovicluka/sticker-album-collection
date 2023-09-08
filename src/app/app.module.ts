import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AlbumThumbComponent } from './components/album-thumb/album-thumb.component';
import { AlbumsGridComponent } from './components/albums-grid/albums-grid.component';
import { LoginModalComponent } from './components/auth/login-modal/login-modal.component';
import { FormsModule } from '@angular/forms';
import { AuthLinksComponent } from './components/auth/auth-links/auth-links.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { RegistrationModalComponent } from './components/auth/registration-modal/registration-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AlbumThumbComponent,
    AlbumsGridComponent,
    LoginModalComponent,
    AuthLinksComponent,
    RegistrationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,  
    ModalModule.forRoot(),
    StoreModule.forRoot(),    //*  mesto za reducere  */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
