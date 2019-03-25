import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { SelectedTransactionService } from './selected-transaction.service';
import { ConnectionInfoComponent } from './connection-info/connection-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormComponent,
    GridComponent,
    ConnectionInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    AgGridModule.withComponents([ConnectionInfoComponent]),
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [SelectedTransactionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
