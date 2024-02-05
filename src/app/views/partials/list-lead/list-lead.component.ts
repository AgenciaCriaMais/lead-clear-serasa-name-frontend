import {Component} from '@angular/core';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class ListLeadComponent
 * @date 04/02/2024
 */
@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.sass']
})
export class ListLeadComponent {
  public today = `${new Date().getFullYear()}`;
}
