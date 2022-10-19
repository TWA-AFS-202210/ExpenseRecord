import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordItem } from '../models/RecordItemModel';
import { RecordService } from '../services/RecordService';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})

export class RecordItemComponent implements OnInit {

  item: RecordItem;
  formItem: FormGroup;

  constructor(private httpService: RecordService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.item = {
      id: 'new',
      type: '',
      description: '',
      amount:0,
    };
    this.formItem = this.fb.group({
      description: this.fb.control('', [Validators.required]),
      done: this.fb.control(''),
      favorite: this.fb.control('')
    });
    this.formItem.valueChanges.subscribe(() => {
      this.item.description = this.formItem.get('description')?.value ?? '';
    });
  }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('itemId');
    if (id && id !== 'new') {
      console.log("id is :", id);
      this.loadData(id);
    } else {
      this.patchFormWithItem(this.item);
    }
  }

  async navToList(): Promise<boolean> {
    return this.router.navigate(['items'], {
      relativeTo: this.route.parent
    });
  }

  async canDeactivate(): Promise<boolean> {
    if (this.formItem.dirty) {
      const ok = confirm(`Discard changes and leave?`);
      if (ok) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  save(): void {
    if (!this.isNewItem()) {
      this.httpService.updateOne(this.item).subscribe(() => {
        this.formItem.markAsPristine();
        this.navToList();
      }, () => {
        console.error('Failed to update item');
      });
    } else {
      this.httpService.createOne(this.item).subscribe(item => {
        this.item.id = item.id;
        this.formItem.markAsPristine();
        this.navToList();
      }, () => {
        console.error('Failed to create item');
      });
    }
  }

  delete(): void {
    const ok = confirm(`Delete this item?`);
    if (ok) {
      if (!this.isNewItem()) {
        this.httpService.deleteOne(this.item.id).subscribe(() => {
          this.navToList();
        });
      } else {
        this.navToList();
      }
    }
  }

  isNewItem(): boolean {
    return this.item.id === 'new';
  }

  private loadData(id: string): void {
    this.httpService.getOne(id).subscribe({
      next: item => {
        console.log("getone id is :", id);
        console.log("getone item is :", item);
        this.item = item;
        this.patchFormWithItem(this.item);
      },
      error: () => {
        this.navToList();
        console.error('Failed to load item');
      }
    });
  }

  private patchFormWithItem(item: RecordItem): void {
    this.formItem.patchValue({
      description: item.description,
    });
  }
}
