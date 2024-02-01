import {AfterViewInit, Component} from '@angular/core';
import {Util} from "../../shared/util";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class PagesComponent
 * @date 31/01/2024
 */
@Component({
  selector: "app-pages",
  template: "<router-outlet></router-outlet>",
  styles: []
})
export class PagesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    Util.scrollTop();
  }
}
