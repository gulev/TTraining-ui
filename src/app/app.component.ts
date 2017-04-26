import { Component } from '@angular/core';
import { Http ,HttpModule }                                   from '@angular/http';
import { HttpInterceptorModule, HttpInterceptorService } from 'ng-http-interceptor';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

declare var $: any;

@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <div class="loadingIndicator" style=" position:absolute;top:0;left:0; width:100%;height:100%;background-color:#ccc; opacity:0.5;">
        <div class="ld ld-hourglass ld-spin"
        style="font-size:64px;color:#000; margin-left:auto; margin-right:auto;margin-top:20%;"
        ></div>
    </div>
  `
})

export class AppComponent {
  requests:Array<any> = [];
  res:any = null;
  error:any = null;

  constructor(
    private http: Http,
    private httpInterceptor: HttpInterceptorService
  ) {
      $(".loadingIndicator").css('display',"block")
    this.httpInterceptor.request().addInterceptor((data, method) => {
      $(".loadingIndicator").css('display',"none")
      return data;
    });

    this.httpInterceptor.response().addInterceptor(
      res => res.do(null, e => this.error = e));
  }
}
