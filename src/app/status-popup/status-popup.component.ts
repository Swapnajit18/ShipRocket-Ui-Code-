import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { AddStatusComponent } from '../add-status/add-status.component';


@Component({
  selector: 'app-status-popup',
  templateUrl: './status-popup.component.html',
  styleUrls: ['./status-popup.component.scss']
})
export class StatusPopupComponent implements OnInit {
  public value: any;
  data:any;
  params:any;

  agInit(params:any) {
    this.params=params;
    this.data = params.value;
  }
  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  constructor(private dialog:MatDialog,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  execute(){
    console.log(this.params)
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%";
    dialogConfig.height="30%";

    this.dialog.open(AddStatusComponent,dialogConfig);

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
  }

  addComment(){
    console.log(this.params)
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%";
    dialogConfig.height="50%";

    this.dialog.open(AddCommentComponent,dialogConfig);

    this.router.navigate(['../griddata'],
     {
      queryParams: {
        //isEdit: true,
        bookingId: this.params.data.bookingId,
        status:this.params.data.status,
        comments:this.params.data.comments
      },
      relativeTo: this.route,
    });
  }

}
