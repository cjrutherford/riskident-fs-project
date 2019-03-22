import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Apollo, Query } from 'apollo-angular';
import gql from 'graphql-tag'
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectedTransactionService } from '../selected-transaction.service';
import{ Transaction} from '../interfaces/transaction';




@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass']
})
export class GridComponent implements OnInit, OnChanges {

  columnDefs = [
    { headerName: 'Transaction ID', field: 'id' },
    { headerName: 'ConnectionInfo', field: 'connectionInfo' },
    { headerName: 'ConfidenceLevel', field: 'confidence' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Age', field: 'age' }
  ];

  querySubscription: Subscription;

  @Input() rowData: Array<Transaction> =new Array<Transaction>();



  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.rowData = changes.rowData.currentValue;
  }
  constructor() { }



  ngOnInit() {
    
  }

}
