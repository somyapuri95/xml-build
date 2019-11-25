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
  xml: Xml = new Xml();
  xmls: Page<Xml>;
   xmlOne: Model<Xml>;
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

   add() {
   
    if (!this.xml.username) {
      alert('Please Select username');
    }
    if (!this.xml.url) {
      alert('Please Select URL');
    }
    this.xmls.isLoading = false;
    this.feedbackService.xmls.create(this.xml).then(() => {
      this.xmls.isLoading = true;
      this.xmls.fetch();
      this.xml.reset();

    });
  }


  update() {
      return this.xmlOne.update().then(() => {
        alert('updated');
      });
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
