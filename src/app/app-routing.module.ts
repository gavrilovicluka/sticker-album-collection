import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list.component';
import { PublisherAddComponent } from './components/publisher/publisher-add/publisher-add/publisher-add.component';
import { adminGuard } from './components/auth/admin.guard';
import { PublisherEditComponent } from './components/publisher/publisher-edit/publisher-edit.component';
import { AlbumsListComponent } from './components/album/albums-list/albums-list.component';
import { AlbumListHomeComponent } from './components/album/album-list-home/album-list-home.component';
export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: ":id/albums-list",
    component: AlbumListHomeComponent
  },
  {
    path: "admin/publishers",
    component: PublisherListComponent,
    canActivate: [adminGuard()],
  },
  {
    path: "admin/publishers/add",
    component: PublisherAddComponent,
    canActivate: [adminGuard()],
  },
  {
    path: "admin/publishers/edit/:id",
    component: PublisherEditComponent,
    canActivate: [adminGuard()],
  },
  {
    path: "admin/publishers/:id/albums-list",
    component: AlbumsListComponent,
    canActivate: [adminGuard()],
  },
];

