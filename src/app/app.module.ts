import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListsComponent } from './pages/lists/lists.component';
import { DetailComponent } from './pages/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketNamePipe } from './pipes/market-name.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListsComponent,
    DetailComponent,
    MarketNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
