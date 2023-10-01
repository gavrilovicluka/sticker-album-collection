import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list.component';
import { adminGuard } from './components/auth/admin.guard';
import { PublisherEditComponent } from './components/publisher/publisher-edit/publisher-edit.component';
import { AlbumsListComponent } from './components/album/albums-list/albums-list.component';
import { AlbumListHomeComponent } from './components/album/album-list-home/album-list-home.component';
import { UserAlbumsComponent } from './components/user/user-albums/user-albums.component';
import { authGuard } from './components/auth/auth.guard';
import { UserStickersComponent } from './components/user/user-stickers/user-stickers.component';
import { UserSwappingListComponent } from './components/user/user-swapping-list/user-swapping-list.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuctionListComponent } from './components/auction/auction-list/auction-list.component';
import { ViewProductComponent } from './components/auction/view-product/view-product.component';
import { AddProductComponent } from './components/auction/add-product/add-product.component';
import { UserAuctionsComponent } from './components/auction/user-auctions/user-auctions.component';
import { UserBidsComponent } from './components/auction/user-bids/user-bids.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":publisherId/albums-list",
    component: AlbumListHomeComponent
  },
  {
    path: ":userId/my-albums",
    component: UserAlbumsComponent,
    canActivate: [authGuard()]
  },
  {
    path: ":userId/my-albums/:albumId",
    component: UserStickersComponent,
    canActivate: [authGuard()]
  },
  {
    path: ":userId/my-albums/:albumId/swapping",
    component: UserSwappingListComponent,
    canActivate: [authGuard()]
  },
  {
    path: "auctions",
    component: AuctionListComponent
  },
  {
    path: "auctions/product/:auctionId",
    component: ViewProductComponent,
  },
  {
    path: "auctions/add-product",
    component: AddProductComponent,
    canActivate: [authGuard()]
  },
  {
    path: ":userId/my-auctions",
    component: UserAuctionsComponent,
    canActivate: [authGuard()]
  },
  {
    path: ":userId/my-bids",
    component: UserBidsComponent,
    canActivate: [authGuard()]
  },
  {
    path: ":userId/my-profile",
    component: UserProfileComponent,
    canActivate: [authGuard()]
  },
  {
    path: "admin/publishers",
    component: PublisherListComponent,
    canActivate: [adminGuard()],
  },
  {
    path: "admin/publishers/edit/:publisherId",
    component: PublisherEditComponent,
    canActivate: [adminGuard()],
  },
  {
    path: "admin/publishers/:publisherId/albums-list",
    component: AlbumsListComponent,
    canActivate: [adminGuard()],
  },
];

