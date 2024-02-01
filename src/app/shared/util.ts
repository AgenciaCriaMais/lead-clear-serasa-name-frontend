import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export declare const $: any;
export declare const window: any;

@Injectable({
  providedIn: 'root'
})
export class Util {

  constructor(private http: HttpClient) {
  }

  static scrollTop() {
    window.scrollTo({top: 0, left: 100, behavior: "smooth"});
    // $('html, body').animate({ scrollTop: 0 }, 1000);
  }
}
