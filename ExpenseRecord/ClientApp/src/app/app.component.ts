import { Component } from '@angular/core';
import { RecordListComponent } from "./record-list/record-list.component";

@Component({
  selector: 'app-root',
  template:
    `<h1>Record</h1>
    <app-record-list> </app-record-list>`
})
export class AppComponent {
  title = 'app';
}
