
import 'rxjs/Rx';
import { IApi, ServerDataModel, ServerPageInput, ServerPageModel } from './contracts/api';
import * as _ from 'lodash';
import { IGetParams } from './contracts/api/get-params.interface';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
declare let Reflect: any;


export class GenericApi<TModel> implements IApi<TModel> {

  private rootUrl: string;
  /**
       * find by id value api
       *
       * @method find one api
     * @param  {Number} id
       * @param  {String} header token
       * @returns {Object} response.data
       *
       */
  get(id: number): Promise<TModel> {
    return this.http.get<ServerDataModel<TModel>>(`${this.rootUrl}/${this.key}/${id}`, { headers: this.getHeaders() })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      }).catch(this.handleError);
  }

  /**
       * all values read api
       *
       * @method find all read item
     * @param  {Number} url
       * @param  {String} header token
       * @returns {Object} response.pagination
       *
       */
  simpleGet(input?: IGetParams): Promise<TModel> {

    let url: string = `${this.rootUrl}/${this.key}`;
    let parms: HttpParams = null;

    if (input) {
      parms = input.serverPageInput ? this.getQueryParams(input.serverPageInput) : null;
      url = input.id ? `${url}/${input.id}` : url;
      url = input.path ? `${url}/${input.path}` : url;
      if (input.api)
        url = input.api;
    }
    return this.http.get<ServerDataModel<TModel>>(url, { headers: this.getHeaders(), params: parms })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      })
      .catch(this.handleError);
  }
  search(input: ServerPageInput): Promise<ServerPageModel<TModel>> {
    let parms: HttpParams = this.getQueryParams(input);
    return this.http.get<ServerPageModel<TModel>>(`${this.rootUrl}/${this.key}`, { headers: this.getHeaders(), params: parms })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response;
      })
      .catch(this.handleError);
  }

  /**
       * create api
       *
       * @method find add item
     * @param  string 
       * @param  {String} header token
       * @returns {Object} response.data
       *
       */

  create(model: TModel, path?: string): Promise<TModel> {

    let url: string = `${this.rootUrl}/${this.key}`;
    url = path ? `${url}/${path}` : url;

    return this.http.post<ServerDataModel<TModel>>(url, model, { headers: this.getHeaders() })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      })
      .catch(this.handleError);
  }
  /**
         * download report api
         *
         * @method find add item
       * @param  string = "downloaded_file"
         * @param  {String} header token
         * @returns {Object} response.data
         *
         */
  exportReport(input: ServerPageInput, path: string = null, reportName: string = "downloaded_file"): Promise<any> {
    let parms: HttpParams = this.getQueryParams(input);
    let apiPath: string = path ? `${this.rootUrl}/${path}` : `${this.rootUrl}/${this.key}`;

    return this.http.get<Blob>(apiPath, { headers: this.getHeaders(), params: parms, responseType: 'blob' as 'json' }).toPromise()
      .then((resposne) => {
        let blob = resposne;
        if (navigator.msSaveBlob) {
          navigator.msSaveBlob(blob, reportName);
        } else {
          let objectUrl = window.URL.createObjectURL(blob);
          // window.open(objectUrl);
          let a = document.createElement("a");
          a.href = objectUrl;
          a.download = reportName;
          a.click();
          URL.revokeObjectURL(objectUrl);
          document.body.appendChild(a);
          document.body.removeChild(a);
        }

        return true;


      })
      .catch(this.handleError);
  }
  /**
         * add api
         *
         * @method find add item
       * @param  string 
         * @param  {String} header token
         * @returns {Object} response.data
         *
         */
  simpePost(model: any): Promise<any> {
    return this.http.post<ServerDataModel<any>>(`${this.rootUrl}/${this.key}`, model, { headers: this.getHeaders() })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      })
      .catch(this.handleError);
  }
  /**
         * replace/update item api
         *
         * @method find replace/update item api
       * @param  string 
         * @param  {String} header token
         * @returns {Object} response.data
         *
         */
  update(id: number, model: TModel, input?: ServerPageInput, path?: string): Promise<TModel> {
    let parms: HttpParams;
    if (input) {
      parms = this.getQueryParams(input);
    }
    let url = path ? `${this.rootUrl}/${this.key}/${path}` : `${this.rootUrl}/${this.key}/${id}`;
    return this.http.put<ServerDataModel<TModel>>(url, model, { headers: this.getHeaders(), params: parms })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      })
      .catch(this.handleError);
  }

  /**
       * remove item api
       *
       * @method find remove item api
     * @param  string 
       * @param  {String} header token
       * @returns {Object} response.data
       *
       */

  remove(id: number): Promise<TModel> {
    return this.http.delete<ServerDataModel<TModel>>(`${this.rootUrl}/${this.key}/${id}`, { headers: this.getHeaders() })
      .toPromise()
      .then((response) => {
        if (!response.isSuccess) {
          return this.handleError(response.message || response.code || 'failed');
        }
        return response.data;
      })
      .catch(this.handleError);
  }



  private getHeaders(): HttpHeaders {

    const obj: any = {
      'Content-Type': 'application/json'
    };
    const token = window.localStorage.getItem('token');
    if (token) {
      obj['x-access-token'] = token;
    }
    const headers = new HttpHeaders(obj);
    return headers;
  }

  private handleError(error: any): Promise<any> {
    // console.log('error', error)
    if (error.status === 0) {
      return Promise.reject('There is no internet connection')
    };
    if (error.status) {
      if (error.status === 401) {
        window.onbeforeunload = function () {
          console.log("blank function do nothing")
        }
        return;
        // return Promise.reject('Your are logged Out');
      }
      return Promise.reject(error.statusText);
    }
    if ((error.message && error.message == "no user found") || error == "no user found") {
      localStorage.clear();
      window.location.href = '/';
    }
    return Promise.reject(error.message || error);
  }

  private getQueryParams(input: ServerPageInput): HttpParams {
    let params: HttpParams = new HttpParams();
    _.each(input, (value, key, obj) => {
      if (key === 'query') {
        _.each(value, (keyVal, keyKey) => {
          if (keyVal) {
            params = params.set(keyKey, keyVal);
          }
        });
      } else {
        params = params.set(key, value);
      }
    });
    return params;
  }

  constructor(
    private key: string,
    private http: HttpClient,
    private token?: string) {
    this.rootUrl = `${environment.apiUrls.api}/api`;
  }
}
