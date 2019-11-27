import { Component, OnInit } from '@angular/core';
import { Xml } from 'src/app/models/xml';
import { Page } from 'src/app/shared/common/contracts/page';
import { XMLService } from 'src/app/services/xml.service';
import { Model } from 'src/app/shared/common/contracts/model';
import { Value } from 'src/app/models/value';
import { DynamicGrid } from 'src/app/models/grid.model';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { ChangePassComponent } from 'src/app/modals/change-pass/change-pass.component';
 declare var i
@Component({
  selector: 'nmdx-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.css']
})

export class XmlComponent implements OnInit {
  state: string = '';
  id: number = null
  show: boolean = false
  name: string = '';
  user: User;
  link: string = '';
  roll: string = '';
  xml: Xml = new Xml();
  xmls: Page<Xml>;
  updateXmls: Model<Value>;
  data: any;
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  kyeroFields = [
    { name: 'Id'},
    { name: 'date'},
    { name: 'ref'},
    { name: 'price'},
    { name: 'currency'},
    { name: 'location'},
    { name: 'price_freq'},
    { name: 'part_ownership'},
    { name: 'leasehold'}
  ];
  filters = [
    { name: 'Id',       id: 0 },
    { name: 'prijs',  id: 1 },
    { name: 'title', id: 2 },
    { name: 'land',   id: 4 },
    { name: 'land_en', id: 5 },
    { name: 'provincie', id: 6 },
    { name: 'plaats', id: 7 },
    { name: 'lat', id: 8 },
    { name: 'perceeloppervlak', id: 9 },
    { name: 'long', id: 10 },
    { name: 'aantalSlaapkamers', id: 11 },
    { name: 'aantalBadkamers', id: 12 },
    { name: 'woonlagen', id: 13 },
    { name: 'soortbouw', id: 14 },
    { name: 'soortaanbod', id: 15 },
    { name: 'beschrijving', id: 16 },
    { name: 'deeplinkURL', id: 17 },
  ]

  values = [
    { name: 'Id',       id: 0 },
    { name: 'prijs',  id: 1 },
    { name: 'title', id: 2 },
    { name: 'land',   id: 4 },
    { name: 'land_en', id: 5 },
    { name: 'provincie', id: 6 },
    { name: 'plaats', id: 7 },
    { name: 'lat', id: 8 },
    { name: 'perceeloppervlak', id: 9 },
    { name: 'long', id: 10 },
    { name: 'aantalSlaapkamers', id: 11 },
    { name: 'aantalBadkamers', id: 12 },
    { name: 'woonlagen', id: 13 },
    { name: 'soortbouw', id: 14 },
    { name: 'soortaanbod', id: 15 },
    { name: 'beschrijving', id: 16 },
    { name: 'deeplinkURL', id: 17 },
  ]
  //selectedCity = this.filters[1];
  
  constructor(private feedbackService: XMLService,
    private router: Router,
    private bottomSheet: MatBottomSheet) {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    this.xmls = new Page({
      api: feedbackService.xmls
    });
    this.fetch();
  }

 

  replaceAt(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }

  onButtonClicked(state,id) {
    this.state = 'title';
    //Find Index
    const index = this.filters.findIndex(data => (data.id == id));
    console.log(index,'index');
    // Data Filter
    let newData = this.filters.filter(data => (data.id == id))[0];
    newData.name = state;
    console.log(newData,'newData');
    // Replace Value
    this.replaceAt(this.filters, index, newData);
    console.log(this.filters,'change value');
    this.show = true;
  }


  onClicked(state,id) {
    this.state = 'title';
    //Find Index
    const index = this.values.findIndex(data => (data.id == id));
    console.log(index,'index');
    // Data Filter
    let newData = this.values.filter(data => (data.id == id))[0];
    newData.name = state;
    console.log(newData,'newData');
    // Replace Value
    this.replaceAt(this.values, index, newData);
    console.log(this.values,'change value');
    this.show = true;
  }
  
  add() {
    if (!this.xml.username) {
      alert('Please Select username');
    }
    if (!this.xml.url) {
      alert('Please Select URL');
    }
    this.xmls.isLoading = true;
    this.feedbackService.xmls.create(this.xml).then(() => {
      this.xmls.isLoading = false;
      this.xmls.fetch();
      alert('successfully Added!');
      this.show = true;
      //this.xml.reset();
    });
  }

  addRow() {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  ngOnInit(): void {
    this.newDynamic = { title1: "", title2: "", title3: "" };
    this.dynamicArray.push(this.newDynamic);
  }

  fetch() {
    this.xmls.fetch();
  }

  logOut() {
    window.localStorage.clear();
    this.router.navigate(['/signin']);
  }


  openBottomSheet(): void {
    this.bottomSheet.open(ChangePassComponent, { disableClose: true });
  }

  run(evt: MouseEvent) {
    this.link = '/pages/xml/test.xml';
  }


}
