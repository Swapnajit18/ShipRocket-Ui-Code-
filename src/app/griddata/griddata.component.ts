import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent, IDatasource, IGetRowsParams } from 'ag-grid-community';
import baseUrl from 'service/helper';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusPopupComponent } from '../status-popup/status-popup.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-griddata',
  templateUrl: './griddata.component.html',
  styleUrls: ['./griddata.component.scss']
})


export class GriddataComponent implements OnInit {
  role: any;
  userid:any;
  username:any;
  codeArray: any;
  gridApi: any;


  
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
    { headerName:'Status',field: 'status', sortable: true,filter: true , flex: 1, minWidth: 100, },
    { headerName:'Comments',field: 'comments', sortable: true,filter: true , flex: 1, minWidth: 100,editable:true},
    { headerName:'For-Update',field: '', sortable: true,"cellRendererFramework": StatusPopupComponent}
     
    
];

  rowData:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) {
  this.CallGrid();
      
}

CallGrid(){
  this.http.get(`${baseUrl}/list/showList`).subscribe(data => {
    
    if(this.role=="ADMIN"){
      this.rowData = data;
    
    }else{
      this.http.get(`${baseUrl}/list/name/${this.username}`).subscribe(data => {
      
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