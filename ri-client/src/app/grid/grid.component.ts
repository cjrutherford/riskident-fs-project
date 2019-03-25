import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Transaction } from '../interfaces/transaction';

import { ConnectionInfoComponent } from '../connection-info/connection-info.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.sass'],
})
export class GridComponent implements OnInit, OnChanges {
  columnDefs = [
    { headerName: 'Transaction ID', field: 'id' },
    {
      headerName: 'ConnectionInfo',
      field: 'connectionInfo',
      cellRendererFramework: ConnectionInfoComponent,
    },
    { headerName: 'ConfidenceLevel', field: 'confidence' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Phone', field: 'phone' },
    { headerName: 'Age', field: 'age' },
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
  };

  querySubscription: Subscription;

  @Input() rowData: Array<Transaction> = new Array<Transaction>();

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.rowData = changes.rowData.currentValue;
  }
  constructor() {}

  ngOnInit() {}
}
