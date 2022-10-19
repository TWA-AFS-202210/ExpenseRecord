import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { RecordItem } from '../models/RecordItemModel';

const apiEndPoint: string = "http://localhost:5225/api/v2/items"

@Injectable({
  providedIn: "root"
})

export class RecordService {
  public todoList$: Observable<RecordItem[]>;
  public displayList: RecordItem[] = [];

  constructor(private http: HttpClient) {
    this.todoList$ = this.http.get<RecordItem[]>(apiEndPoint);
  }

  getAll(): Observable<RecordItem[]> {
    return this.http.get<RecordItem[]>(apiEndPoint)
  }

  getOne(id: string): Observable<RecordItem> {
    const api: string = `${apiEndPoint}/${id}`;
    return this.http.get<RecordItem>(api)
  }

  createOne(toDoItem: RecordItem): Observable<RecordItem> {
    return this.http.post<RecordItem>(apiEndPoint, toDoItem);
  }

  deleteOne(id: string): Observable<any> {
    const api: string = `${apiEndPoint}/${id}`;
    return this.http.delete<any>(api);
  }

  updateOne(toDoItem: RecordItem): Observable<RecordItem> {
    const api: string = `${apiEndPoint}/${toDoItem.id}`;
    console.log("update id is :", toDoItem.id)
    return this.http.put<RecordItem>(api, toDoItem);
  }
}
