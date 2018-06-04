import { Component, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/Rx' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('start') private start;
    @ViewChild('container') private container;
    @ViewChild('exportLink ') private exportLink;

    exportUrl: any;
    exportFileName: any;
    file:any;
    jsonObject: any;
    activeNgbModal: any;
    succesfullyParsed : boolean = false;
    download : boolean = false;
    print : boolean = false;
    constructor(private modalService: NgbModal){

    }

    ngOnInit(){
       this.activeNgbModal = this.modalService.open(this.start);
    }

    fileChanged(e) {
        this.file = e.target.files[0];
        this.exportFileName = e.target.files[0].name.split('.')[0] + "_PostmanToDoc.html"
    }


    generate() {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {


          let localObj = JSON.parse(fileReader.result);

          let i = 0;
          let r = 0;
          for(let item of localObj .item){
            r = 0;
            for(let response of item.response){
              try{
                let jsonstring =  response.body.replace(/\\\"/g , '');
                let jsonstring2 = jsonstring.replace(/\\/g, '');  
                let obj = JSON.parse(jsonstring2);
                jsonstring2 = JSON.stringify(obj, null, 4);
                localObj.item[i].response[r].body = jsonstring2;
                jsonstring =  response.originalRequest.body.raw.replace(/\\\"/g , '');
                jsonstring2 = jsonstring.replace(/\\/g, '');  
                obj = JSON.parse(jsonstring2);
                jsonstring2 = JSON.stringify(obj, null, 4);
                localObj.item[i].response[r].originalRequest.body.raw = jsonstring2;
                
              }catch(e){

              }
               
                r++;
            }
            
            i++;
          }
          this.jsonObject = localObj;
         
          this.activeNgbModal.close();
          this.succesfullyParsed = true;

          if(this.print){
            setTimeout(()=>{
              window.print();
              
            
            }, 1000);
          }
          if(this.download){
            setTimeout(()=>{
              let importanthtml = this.container.nativeElement.innerHTML;
              console.log(this.container.nativeElement.innerHTML);
              
              var fullHtml = `
              
              <!doctype html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title>PostmanToDoc</title>
                  <base href="/">
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
                  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
                  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
           
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <link rel="icon" type="image/x-icon" href="favicon.ico">
                  <style>
                  @media print  
                  {
                      .card_printable {
                          page-break-inside: avoid;
                      }
                  }
                  </style>
                </head>
                <body>
                  `+ importanthtml +`
                </body>
                </html>
  
              `;

            
;
              var url= btoa(fullHtml);
              this.exportUrl = "data:text/html;charset=UTF-8,"+encodeURIComponent(fullHtml);
              const a = document.createElement('a');
              a.setAttribute('style', 'display:none;');
              document.body.appendChild(a);

              // create file, attach to hidden element and open hidden element
              a.href = this.exportUrl;
              a.download = this.exportFileName;
              a.click();
            }, 1000);
          }
         
        }
        fileReader.readAsText(this.file);
    }

    togglePrint(){
      if(!this.print){
        this.print = true;
      } else{
        this.print = false;
      }
    }

    toggleDownload(){
      if(!this.download){
        this.download = true;
      } else{
        this.download = false;
      }
    }


}
