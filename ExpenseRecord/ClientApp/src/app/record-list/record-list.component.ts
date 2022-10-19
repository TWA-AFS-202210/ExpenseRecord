import { Component, OnInit } from '@angular/core';
import { RecordService } from '../services/RecordService';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordItem } from '../models/RecordItemModel';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  private fullList: RecordItem[] = [];

  constructor(public service: RecordService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  async navToCreateNew(): Promise<boolean> {
    return this.router.navigate(['item', 'new'], {
      relativeTo: this.route.parent
    });
  }

  public loadData(): void {
    this.service.getAll().subscribe(dataList => {
      console.log("data is :", dataList);
      this.service.displayList = dataList;
    });
    this.fullList = [...this.service.displayList];
  }
}

