import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

import { AgGridAngular } from 'ag-grid-angular';

import { ColDef, GridOptions } from 'ag-grid-community';

import { HttpClientModule } from '@angular/common/http';

 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

 
  export class TableComponent implements OnInit {
    defaultColDef = {
      sortable: true,
      filter: true
    };
  
    columnDefs: ColDef[] = [
      { field: 'name' },
      { field: 'leave_type' },
      { field: 'start_date', editable: true, type: 'date'  },
      { field: 'end_date', editable: true, type: 'date' },
      { field: 'teams' }
    ];
  
    rowData = [];
    gridOptions: GridOptions;
  
    constructor(private http: HttpClient) {
      this.gridOptions = <GridOptions>{
        rowStyle: { 'border-bottom': '1px solid #ccc' },
        headerHeight: 40, // Adjust header height
        rowHeight: 40, // Adjust row height
        headerClass: 'custom-header', // Apply a custom class to the header cells
        domLayout: 'autoHeight' // Automatically adjust grid height based on content
      };
    }
  
    ngOnInit() {
      fetch('http://10.0.0.147:8080/getData')
        .then(result => result.json())
        .then(rowData => (this.rowData = rowData));
    }
  }
