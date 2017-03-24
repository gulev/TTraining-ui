import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Program } from './program';

import 'rxjs/add/operator/map';

@Injectable()
export class ProgramService {

  constructor(
    private http: Http
  ) { }

  getProgram() {
      return this.http.get(`http://localhost:2000/api/v1/Program`)
      .map((res:Response) => res.json());
    }

}
