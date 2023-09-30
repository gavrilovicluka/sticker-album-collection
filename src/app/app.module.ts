import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
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
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list.component';
import { PublisherEffect } from './store/effects/publisher.effects';
import { publisherReducer } from './store/reducers/publisher.reducer';
import { PublisherService } from './services/publisher/publisher.service';
import { PublisherAddComponent } from './components/publisher/publisher-add/publisher-add.component';
import { RouteEffects } from './store/effects/route.effects';
import { ModalEffects } from './store/effects/modal.effects';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { PublisherEditComponent } from './components/publisher/publisher-edit/publisher-edit.component';
import { AlbumsListComponent } from './components/album/albums-list/albums-list.component';
import { AlbumAddComponent } from './components/album/album-add/album-add.component';
import { PublisherThumbComponent } from './components/publisher/publisher-thumb/publisher-thumb.component';
import { AlbumService } from './services/album/album.service';
import { albumReducer } from './store/reducers/album.reducer';
import { AlbumEffect } from './store/effects/album.effects';
import { AlbumThumbComponent } from './components/album/album-thumb/album-thumb.component';
import { PublisherListHomeComponent } from './components/publisher/publisher-list-home/publisher-list-home.component';
import { PublisherThumbHomeComponent } from './components/publisher/publisher-thumb-home/publisher-thumb-home.component';
import { AlbumListHomeComponent } from './components/album/album-list-home/album-list-home.component';
import { AlbumInfoComponent } from './components/album/album-info/album-info.component';
import { UserAlbumService } from './services/user-album/user-album.service';
import { UserAlbumEffect } from './store/effects/user-album.effects';
import { userAlbumReducer } from './store/reducers/user-album.reducer';
import { UserAlbumsComponent } from './components/user/user-albums/user-albums.component';
import { userReducer } from './store/reducers/user.reducer';
import { UserAlbumInfoComponent } from './components/user/user-album-info/user-album-info.component';
import { UserStickersComponent } from './components/user/user-stickers/user-stickers.component';
import { UserSwappingListComponent } from './components/user/user-swapping-list/user-swapping-list.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { SwapContactComponent } from './components/user/swap-contact/swap-contact.component';
import { UserEffect } from './store/effects/user.effects';
import { UserService } from './services/user/user.service';
import { SwapInfoComponent } from './components/user/swap-info/swap-info.component';
import { AlertModule } from '@full-fledged/alerts';
import { AlertEffects } from './store/effects/alert.effects';
import { AuctionListComponent } from './components/auction/auction-list/auction-list.component';
import { AuctionEffects } from './store/effects/auction.effects';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { ViewProductComponent } from './components/auction/view-product/view-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './components/auction/add-product/add-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AuctionService } from './services/auction/auction.service';
import { auctionReducer } from './store/reducers/auction.reducer';
import { AuctionThumbComponent } from './components/auction/auction-thumb/auction-thumb.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { BidDialogComponent } from './components/auction/bid-dialog/bid-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AlbumsGridComponent,
    LoginModalComponent,
    AuthLinksComponent,
    RegistrationModalComponent,
    PublisherListComponent,
    PublisherAddComponent,
    PublisherEditComponent,
    AlbumsListComponent,
    AlbumAddComponent,
    PublisherThumbComponent,
    AlbumThumbComponent,
    PublisherListHomeComponent,
    PublisherThumbHomeComponent,
    AlbumListHomeComponent,
    AlbumInfoComponent,
    UserAlbumsComponent,
    UserAlbumInfoComponent,
    UserStickersComponent,
    UserSwappingListComponent,
    UserProfileComponent,
    SwapContactComponent,
    SwapInfoComponent,
    AuctionListComponent,
    ViewProductComponent,
    AddProductComponent,
    AuctionThumbComponent,
    BidDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    ModalModule.forRoot(),
    StoreModule.forRoot({           //*  mesto za reducere, property mora da se poklapa sa imenom u reducer.ts */
      auth: authReducer,
      publishers: publisherReducer,
      albums: albumReducer,
      userAlbums: userAlbumReducer,
      user: userReducer,
      auctions: auctionReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      AuthEffect,
      PublisherEffect,
      RouteEffects,                      // ovde se dodaju efekti
      ModalEffects,
      AlbumEffect,
      UserAlbumEffect,
      UserEffect,
      AlertEffects,
      AuctionEffects,

    ]),
    HttpClientModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 4000, positionX: 'right' }),
    NgxSimpleCountdownModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDialogModule,

  ],
  providers: [              // ovde se dodaju servisi
    AuthService,
    PublisherService,
    AlbumService,
    UserAlbumService,
    UserService,
    AuctionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
