export class User {
  id?: number = null;
  name?: string = "";
  username?: string = "";
  email?: string = "";
  token?: string = "";
  gender?: string = "";
  password?: string = "";
  phone?: string = "";
  parentId?: number = null;
  isNewSon?: boolean = false;
  parent?: User;
  
  constructor(user?: User) {
    this.id = user && user.id ? user.id : null;
    this.token = user && user.token ? user.token : '';
    this.email = user && user.email ? user.email : '';
  }
}
