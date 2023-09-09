import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list/publisher-list.component';
import { PublisherAddComponent } from './components/publisher/publisher-add/publisher-add/publisher-add.component';
import { adminGuard } from './components/auth/admin.guard';
export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
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
  // {
  //   path: "admin/publishers/edit/:id",
  //   component: PublisherEditComponent
  // },
];

