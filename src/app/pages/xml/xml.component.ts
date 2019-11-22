import { Component, OnInit } from '@angular/core';
import { Xml } from 'src/app/models/xml';
import { Page } from 'src/app/shared/common/contracts/page';
import { XMLService } from 'src/app/services/xml.service';
import { Model } from 'src/app/shared/common/contracts/model';

@Component({
  selector: 'nmdx-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})
export class XmlComponent implements OnInit {
  // panelOpenState: boolean = false;
  // isEdit: boolean = false;
  xmls: Page<Xml>;
  // xml: Model<Xml>;
  values: Page<Xml>;
  constructor(private feedbackService: XMLService) {
    this.xmls = new Page({
      api: feedbackService.xmls
    });
    this.fetch();


    this.values = new Page({
      api: feedbackService.values
    });
    this.fetch1();

   

   }

  ngOnInit() {
  }

  fetch() {
    this.xmls.fetch();
  }
  fetch1() {
    this.values.fetch();
  }
 


}
