import { Component, OnInit } from '@angular/core';
import { Xml } from 'src/app/models/xml';
import { XMLService } from 'src/app/services/xml.service';
import { Page } from 'src/app/shared/common/contracts/page';

@Component({
  selector: 'nmdx-change-kyero-format',
  templateUrl: './change-kyero-format.component.html',
  styleUrls: ['./change-kyero-format.component.css']
})
export class ChangeKyeroFormatComponent implements OnInit {
  onlyXmls: Page<Xml>;
  constructor(private feedbackService: XMLService) { 
    this.onlyXmls = new Page({
      api: feedbackService.onlyXmls
    });
    this.fetch();
   }

  ngOnInit() {
  }
  fetch() {
    this.onlyXmls.fetch();
  }
}
