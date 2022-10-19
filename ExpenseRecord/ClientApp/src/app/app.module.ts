import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { RecordListComponent } from "./record-list/record-list.component";
import { RecordItemComponent } from "./record-item/record-item.component";

@NgModule({
    declarations: [
        AppComponent,
    CounterComponent,
    RecordListComponent,
    RecordItemComponent, 
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'items', component: RecordListComponent },
      { path: 'items/:itemId', component: RecordItemComponent },
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: '**', redirectTo: 'items', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
