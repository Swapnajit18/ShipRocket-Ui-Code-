import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgGridService } from 'service/ag-grid.service';
import baseUrl from 'service/helper';



@Component({
  selector: 'app-griddata',
  templateUrl: './griddata.component.html',
  styleUrls: ['./griddata.component.scss']
})

/*
export class GriddataComponent implements OnInit {
  private gridApi: any;
  private gridColumnApi: any;  
  constructor(private api: AgGridService) { }
  columnDefs = [
    { field: 'bookingId', sortable: true ,filter: true , flex: 1, minWidth: 100}, //filter: true },
    { field: 'packageId', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { field: 'senderName', sortable: true},// filter: true },
    { field: 'trackingID', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { field: 'status', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { field: 'comments', sortable: true,filter: true , flex: 1, minWidth: 100} //filter: true },
    
  ];
  rowData = [];
  rowModelType = 'infinite';
  defaultPageSize = 10;
  ngOnInit(): void {
  }
  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setDatasource(this.dataSource);
  }
  dataSource: IDatasource = {
    getRows: (params: IGetRowsParams) => {      
      this.api.getAllBooks(this.gridApi.paginationGetCurrentPage()).subscribe((response: { bookingList: any[]; }) => {
        params.successCallback(
          response.bookingList
        );
      })
    }
  
  }
  onPageSizeChanged(event: any) {
    this.gridApi.paginationSetPageSize(Number(event.target.value));
  }
}


*/
export class GriddataComponent implements OnInit {

  
  ngOnInit(): void {
  
  }
  
  columnDefs: ColDef[] = [
    { headerName:'Booking Id',field: 'bookingId', sortable: true,filter: true , flex: 1, minWidth: 100}, //filter: true },
    { headerName:'Package Id',field: 'packageId', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Sender Name',field: 'senderName', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Tracking Id',field: 'trackingID', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Status',field: 'status', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Comments',field: 'comments', sortable: true,filter: true , flex: 1, minWidth: 100} //filter: true },
];

  rowData:any;
  constructor(private http:HttpClient,private aggrid:AgGridService) 

  {
  

    this.http.get(`${baseUrl}/list/p`).subscribe(data => {
    //data storing for use in html component
    this.rowData = data;
    console.log(data)
        }, error => console.error(error));
}
}