import { Component, OnInit, ElementRef } from '@angular/core';
import { AdddataService } from '../../services/adddata.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private addDataService:AdddataService, private elem:ElementRef, private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  addCSV(){
    let files = this.elem.nativeElement.querySelector('#file').files;
          
    let formData = new FormData();
    formData.append('bodydummy',"dummy")
    
    if(files[0].name.split('.').pop() != 'xlsx' )
    {
      this.snackbar.open('Unsupported format', 'OK', {
        duration: 3000
      });
    }else{
      formData.append('file',files[0],files[0].name);
         
      var json_arr = JSON.stringify(formData);
      //console.log(formData);
      this.addDataService.sendCSV(formData).subscribe(res => {    this.snackbar.open('File Uploaded', 'OK', {
        duration: 3000
      });
    });
    }
  

  }
}
