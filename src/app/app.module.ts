import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
