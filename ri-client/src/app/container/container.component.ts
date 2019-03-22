import { Component, OnInit } from '@angular/core';

import { Transaction } from '../interfaces/transaction';
import { Apollo, Query } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { GridOptions } from 'ag-grid-community';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.sass']
})

export class ContainerComponent implements OnInit {
  rowData: Array<Transaction>;
  trxQuery: Subscription;
  trx: string;
  conf: number;
  constructor(private apollo: Apollo) {

  }

  trxSelected: Boolean;

  confValid: Boolean;

  updateSearch({ selectedId, confidence }) {
    this.trx = selectedId;
    this.conf = confidence;
    this.updateValidity();
    const valid: Boolean = this.getValidity();
    console.log(valid);
    if (valid) {
      this.initializeQuery(selectedId, confidence);
    }
  }


  updateValidity() {
    this.trxSelected = (this.trx !== '') && (this.trx !== 'undefined') ? true : false;
    this.confValid = this.conf <= 1 ? true : false;
  }

  getValidity(): Boolean {
    return (this.trxSelected && this.confValid);
  }

  initializeQuery(trx: string, conf: any) {
    console.log(`TransactionID: ${trx} of type: ${typeof trx}`);
    console.log(`Confidence: ${conf} of type: ${typeof conf}`);
    this.trxQuery = this.apollo.watchQuery<Query>({
      query: gql`
      query getTransactions($transID: String!, $confidence: Float) {
        transactions(parentID: $transID, confidence: $confidence) {
          id
          childrens {
            id
            name
            email
            phone
            age
            connectionInfo {
              type
              confidence
            }
          }
          name
          email
          phone
          age
        }
      }
      `,
      variables: {
        transID: trx,
        confidence: (typeof conf === 'string') ? parseFloat(conf): conf,
      }
    }).valueChanges.subscribe((query: any) => {
      console.log(query);
      let {transactions} = query.data;
      this.rowData = transactions.childrens.map(c => ({
        id: c.id,
        connectionInfo: c.connectionInfo.type,
        confidence: c.connectionInfo.confidence,
        name: c.name,
        email: c.email,
        phone: c.phone,
        age: c.age,
      }));
    });
  }

  ngOnInit() {
    this.updateValidity();
    if (this.getValidity()) {
      this.initializeQuery(this.trx, this.conf);
    }

  }

}
