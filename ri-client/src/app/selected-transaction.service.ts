import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedTransactionService {

  private IdSource = new BehaviorSubject<string>('');
  private ConfSource = new BehaviorSubject<number>(1);
  currentID = this.IdSource.asObservable();
  currentConf = this.ConfSource.asObservable();

  constructor() { }

  changeId(id: String){
    console.log(`Changing ID to: ${id}`);
    this.IdSource.next(id as string);
  }
  changeConf(conf: Number){
    console.log(`Changing Confidence to ${conf}`);
    this.ConfSource.next(conf as number);
  }
}
