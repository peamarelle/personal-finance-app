import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsService } from './services/transactions.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TransactionsFormComponent,
    TransactionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TransactionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
