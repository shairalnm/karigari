import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JewelryComponent } from './jewelry/jewelry.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JewelryDetailComponent} from './jewelry/jewelry-detail/jewelry-detail.component';
import {JewelryEditComponent} from './jewelry/jewelry-edit/jewelry-edit.component';
import { JewelryResolverService} from './jewelry/jewelry-resolver.service';
import { JewelryStartComponent } from "./jewelry/jewelry-start/jewelry-start.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/jewelry', pathMatch: 'full' },
  {
    path: 'jewelry',
    component: JewelryComponent,
    children: [
      { path: '', component: JewelryStartComponent },
      { path: 'new', component: JewelryEditComponent },
      {
        path: ':id',
        component: JewelryDetailComponent,
        resolve: [JewelryResolverService]
      },
      {
        path: ':id/edit',
        component: JewelryEditComponent,
        resolve: [JewelryResolverService]
      }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
