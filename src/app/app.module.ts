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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environments';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthEffect } from './store/effects/auth.effects';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list/publisher-list.component';
import { PublisherEffect } from './store/effects/publisher.effects';
import { publisherReducer } from './store/reducers/publisher.reducer';
import { PublisherService } from './services/publisher/publisher.service';

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
    PublisherListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,  
    ModalModule.forRoot(),
    StoreModule.forRoot({auth: authReducer, publishers: publisherReducer}),    //*  mesto za reducere. PROPERTY MORA DA SE POKLAPA SA IMENOM U REDUCER.TS  */
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffect, PublisherEffect]),       // ovde se dodaju efekti
    HttpClientModule,
  ],
  providers: [AuthService, PublisherService],   // ovde se dodaju servisi
  bootstrap: [AppComponent]
})
export class AppModule { }
