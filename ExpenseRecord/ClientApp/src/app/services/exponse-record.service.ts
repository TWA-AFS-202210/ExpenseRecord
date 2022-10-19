import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseItem } from '../models/ExpenseItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private httpUrl = "http://localhost:5081/api/items";
  public displayList: Array<ExpenseItem> = new Array<ExpenseItem>;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ExpenseItem[]> {
    // const todos: ToDoItem[] = this.read();
    // return of(todos);
    return this.httpClient.get<ExpenseItem[]>(this.httpUrl);
  }

  createOne(body: ExpenseItem): Observable<ExpenseItem> {
    const todos: ExpenseItem[] = this.read();
    const todo: ExpenseItem = {
      ...body,
      id: uuidv4(),
      data: new Date().toISOString()
    };
    this.post(todo).subscribe();
    todos.push(todo);
    // this.write(todo);
    return of(todo);
  }

  deleteOne(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.httpUrl + '/' + id);
    // const todos: ToDoItem[] = this.read();
    // const index: number = todos.findIndex(t => t.id === id);
    // todos.splice(index, 1);
    // // this.write(todo);
    // return of(id);
  }

  private read(): ExpenseItem[] {
    const todosString: string | null = localStorage.getItem('todos');
    try {
      const todos: ExpenseItem[] = todosString ? JSON.parse(todosString) : [];
      return (Array.isArray(todos) && todos) || [];
    } catch (e) {
      return [];
    }
  }

  private post(item: ExpenseItem):  Observable<ExpenseItem> {
    return this.httpClient.post<ExpenseItem>(this.httpUrl, item);
    // localStorage.setItem('todos', JSON.stringify(items));
  }
}