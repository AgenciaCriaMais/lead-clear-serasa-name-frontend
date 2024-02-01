import {Component} from '@angular/core';

@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.sass']
})
export class ListLeadComponent {
  public today = `${new Date().getFullYear()}`;
}
