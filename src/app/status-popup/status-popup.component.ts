import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GridApi, ICellRendererParams } from 'ag-grid-community';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { AddStatusComponent } from '../add-status/add-status.component';
import { GriddataComponent } from '../griddata/griddata.component';


@Component({
  selector: 'app-status-popup',
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.scss']
})
export class StatusPopupComponent implements OnInit {
  public value: any;
  data:any;
  params:any;
  private gridApi!: GridApi;

 


  agInit(params:any) {
    this.params=params;
    this.data = params.value;
    

  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  constructor(private dialog:MatDialog,private router:Router,private route:ActivatedRoute,private griddata:GriddataComponent) { }

  ngOnInit(): void {
  }

  execute(){
    const dialogRef=this.dialog.open(AddStatusComponent,{
      disableClose:true,
       autoFocus:true,
      width:"20%",
      height:"30%",
      data:{
              bookingId: this.params.data.bookingId,
              comments:this.params.data.comments,
              status:this.params.data.status
      
          }
      });

      dialogRef.afterClosed().subscribe((res) => {
        this.griddata.CallGrid();
       

      //this.gridApi.refreshServerSideStore({ purge: true });
        
      });
      //dialogRef.afterClosed().subscribe();

    //console.log(this.params)
    //  const dialogConfig=new MatDialogConfig();
    //  dialogConfig.disableClose=true;
    //  dialogConfig.autoFocus=true;
    // dialogConfig.width="20%";
    // dialogConfig.height="30%";
    // dialogConfig.data={
    //    bookingId: this.params.data.bookingId,
    //     comments:this.params.data.comments,
    //     status:this.params.data.status

    //  }
    //  this.dialog.open(AddStatusComponent,dialogConfig)
    /*

    this.router.navigate(['../griddata'],
     {
      queryParams: {
        //isEdit: true,
        bookingId: this.params.data.bookingId,
        comments:this.params.data.comments,
        status:this.params.data.status
      },
      relativeTo: this.route,
    });
    */
  }

  addComment(){
    const dialogRef=this.dialog.open(AddCommentComponent,{
      disableClose:true,
       autoFocus:true,
      width:"20%",
      height:"30%",
      data:{
              bookingId: this.params.data.bookingId,
              comments:this.params.data.comments,
              status:this.params.data.status
      
          }
      });

      dialogRef.afterClosed().subscribe((res) => {
        this.griddata.CallGrid();
       

      //this.gridApi.refreshServerSideStore({ purge: true });
        
      });
    // console.log(this.params)
    // const dialogConfig=new MatDialogConfig();
    // dialogConfig.disableClose=true;
    // dialogConfig.autoFocus=true;
    // dialogConfig.width="20%";
    // dialogConfig.height="50%";
    // dialogConfig.data={
    //   bookingId: this.params.data.bookingId,
    //    comments:this.params.data.comments,
    //    status:this.params.data.status

    // }

    // this.dialog.open(AddCommentComponent,dialogConfig);

  

   
  }

}
