//@Injectable() decorator marks it as a service that can be injected
import { Injectable } from '@angular/core';
//set api response file import
import { IApi } from '../shared/common/contracts/api';
//api methos explain
import { GenericApi } from '../shared/common/generic-api';
// /Most front-end applications communicate with backend services over the HTTP protocol.
// Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API
import { HttpClient } from '@angular/common/http';
//xml model
import { Xml } from '../models/xml';
import { Value } from '../models/value';


@Injectable()
export class XMLService {
  xmls: IApi<Xml>;
  values: IApi<Xml>;
  onlyXmls: IApi<Xml>;
  updateXmls: IApi<Value>;
  constructor(http: HttpClient) {
    this.xmls = new GenericApi<Xml>('xmls', http);
    this.values = new GenericApi<Xml>('xmls/values', http);
    this.onlyXmls = new GenericApi<Xml>('xmls/only/view', http);
    this.updateXmls = new GenericApi<Value>('xmls/values/values/mn', http);
  }

}
