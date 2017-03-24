import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './user';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  getUser() {
      return this.http.get(`http://localhost:2000/api/v1/User`)
      .map((res:Response) => res.json());
    }

}
