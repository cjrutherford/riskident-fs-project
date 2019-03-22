import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import gql from 'graphql-tag';

class TransactionStub {
  id: String;
  constructor(_id: String) {
    this.id = _id;
  }
}

class RawList{
  transactionList: Array<TransactionStub>;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  loading: Boolean;
  selectedId:String;
  subscriber: Subscription;
  transactions: TransactionStub[];
  rawList: RawList;
  confidence: Number = 1;

  @Output() searcher = new EventEmitter();

  search() {
    console.log(`Initializing Search with ID ${this.selectedId} and Confidence ${this.confidence}`);
    this.searcher.emit({selectedId: this.selectedId, confidence: this.confidence});
  }

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.subscriber = this.apollo.watchQuery({
     query: gql`
      query transactionList{
        transactionList{
          id
        }
      }
     ` 
    }).valueChanges.subscribe(res => {
      let {data} = res;
      this.rawList = data as RawList;
      console.log(data);
      console.log(this.rawList);
      this.transactions = this.rawList.transactionList.map(t => t as TransactionStub);
    });
  }
}