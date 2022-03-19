import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Venkatkadiveti248libService {

  test: BehaviorSubject<any>;

  constructor() {
    this.test = new BehaviorSubject(null);
   }

  emit(data) {
    this.test.next(data);
  }

}
