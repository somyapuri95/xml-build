//@Injectable() decorator marks it as a service that can be injected
import { Injectable } from '@angular/core';
//set api response file import
import { IApi } from '../shared/common/contracts/api';
//user maodel
import { User } from '../models/user';
//api methos explain
import { GenericApi } from '../shared/common/generic-api';
// /Most front-end applications communicate with backend services over the HTTP protocol.
// Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  api: IApi<User>

  constructor(http: HttpClient) {
    this.api = new GenericApi<User>('users', http);
  }

  singIn(user: User): Promise<User> {
    return this.api.create(user, 'signin');

  }
  signUp(user: User): Promise<User> {
    return this.api.create(user, 'signup');
  }

  updateRole(id, role) {
    let data = { id, role } as any;
    return this.api.create(data, 'update/role');
  }
}
