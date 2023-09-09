import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublisherListComponent } from './components/publisher/publisher-list/publisher-list/publisher-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "admin/publishers",
    component: PublisherListComponent
  },
  // {
  //   path: "admin/publishers/edit/:id",
  //   component: PublisherEditComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
