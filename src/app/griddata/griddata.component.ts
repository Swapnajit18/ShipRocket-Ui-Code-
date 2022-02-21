import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, IDatasource, IGetRowsParams } from 'ag-grid-community';
import { AgGridService } from 'service/ag-grid.service';
import baseUrl from 'service/helper';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusPopupComponent } from '../status-popup/status-popup.component';
import Swal from 'sweetalert2';



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
  role: any;
  userid:any;
  username:any;
  codeArray: any;


  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.role = params['role'];
      this.username=params['username'];
      //this.codeArray = params['code'];
     
    });
  
  }


  
  columnDefs: ColDef[] = [
    { headerName:'Booking Id',field: 'bookingId', sortable: true,filter: true , flex: 1, minWidth: 100}, //filter: true },
    { headerName:'Package Id',field: 'packageId', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Sender Name',field: 'senderName', sortable: true,filter: true , flex: 1, minWidth: 100},// filter: true },
    { headerName:'Tracking Id',field: 'trackingID', sortable: true,filter: true , flex: 1, minWidth: 100,editable:true},// filter: true },
    { headerName:'Status',field: 'status', sortable: true,filter: true , flex: 1, minWidth: 100, 
      /*cellRenderer:  StatusPopupComponent,
      cellEditor: 'agRichSelectCellEditor',
      cellEditorPopup: true,
      cellEditorParams: {
        cellRenderer:  StatusPopupComponent,
        cellEditorPopup: true,
      },*/},
    { headerName:'Comments',field: 'comments', sortable: true,filter: true , flex: 1, minWidth: 100,editable:true},
    { headerName:'For-Update',field: '', sortable: true,"cellRendererFramework": StatusPopupComponent}
     
    
];

  rowData:any;
  constructor(private http:HttpClient,private aggrid:AgGridService,private route:ActivatedRoute) {
  

    this.http.get(`${baseUrl}/list/showList`).subscribe(data => {
    //data storing for use in html component
    
    //console.log(this.role)
    if(this.role=="ADMIN"){
      this.rowData = data;
    
    }else{
      this.http.get(`${baseUrl}/list/name/${this.username}`).subscribe(data => {
      //console.log(data)
     // console.log(this.role)
     // console.log(this.username)
      this.rowData = data;
    }, error => console.error(error));


    }
    console.log(data)
        },  (error)=>{
          console.log('error')
           Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          
        })
          //error
        }
    )
      
}









}