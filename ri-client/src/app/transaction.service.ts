import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag';


export interface Transactions {
  id: string;
  connectionInfo:string;
  confidence:number;
  name: string;
  email: string;
  phone: string;
  age: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions: Subject<Transactions[]>;
  constructor(private apollo: Apollo) { }

  getTransactions() {
    return this.transactions;
  }

  updateTransactions(id: string, confidence: number) {
    this.apollo.watchQuery<Query>({
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
        transID: id,
        confidence: confidence
      }
    }).valueChanges.pipe(map((query: any) => {
      const { transactions } = query.data;
      const childrens = transactions.childrens.map(c => ({
        id: c.id,
        connectionInfo: c.connectionInfo.type,
        confidence: c.connectionInfo.confidence,
        name: c.name,
        email: c.email,
        phone: c.phone,
        age: c.age
      }));
      return childrens as Transactions[];
    }));
  }
}
