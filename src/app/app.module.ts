import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { HeaderComponent } from './header/header.component';
import { JewelryListComponent } from './jewelry/jewelry-list/jewelry-list.component';
import { JewelryDetailComponent } from './jewelry/jewelry-detail/jewelry-detail.component';
import { JewelryItemComponent } from './jewelry/jewelry-list/jewelry-item/jewelry-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { JewelryEditComponent } from './jewelry/jewelry-edit/jewelry-edit.component';
import { JewelryStartComponent } from './jewelry/jewelry-start/jewelry-start.component';

import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { JewelryService } from "./jewelry/jewelry.service";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    JewelryComponent,
    HeaderComponent,
    JewelryListComponent,
    JewelryDetailComponent,
    JewelryItemComponent,
    ShoppingListComponent,
    DropdownDirective,
    JewelryEditComponent,
    JewelryStartComponent,
  ],
  imports: [ BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [ShoppingListService, JewelryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
