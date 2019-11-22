import { Component, OnInit } from '@angular/core';
import { Xml } from 'src/app/models/xml';
import { Page } from 'src/app/shared/common/contracts/page';
import { XMLService } from 'src/app/services/xml.service';

@Component({
  selector: 'nmdx-view-xml',
  templateUrl: './view-xml.component.html',
  styleUrls: ['./view-xml.component.css']
})
export class ViewXmlComponent implements OnInit {

  values: Page<Xml>;

  constructor(private feedbackService: XMLService) {
    this.values = new Page({
      api: feedbackService.values
    });
    this.fetch();
   }

  ngOnInit() {
  }

  fetch() {
    this.values.fetch();
  }
}
