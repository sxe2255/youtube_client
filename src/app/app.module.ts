import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { SearchComponent } from './header/search/search/search.component';
import { SearchFilterComponent } from './header/search/search-filter/search-filter.component';
import { SorterComponent } from './header/sorter/sorter.component';
import { ProfileComponent } from './header/profile/profile.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './main/card/card.component';
import { ToolbarComponent } from './main/card/toolbar/toolbar.component';
import { CardMainComponent } from './main/card-main/card-main.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthorizeComponent } from './auth/authorize/authorize.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchFilterComponent,
    SorterComponent,
    ProfileComponent,
    MainComponent,
    CardComponent,
    ToolbarComponent,
    CardMainComponent,
    AuthComponent,
    RegisterComponent,
    AuthorizeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
