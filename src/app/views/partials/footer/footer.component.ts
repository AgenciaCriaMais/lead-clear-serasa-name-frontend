import {Component} from '@angular/core';
import {IFooter} from "./ifooter";

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class FooterComponent
 * @description Footer
 * @date 31/01/2024
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  public by: IFooter = {
    uri: 'http://www.agenciacriamais.com.br',
    name: 'Agência Cria Mais',
    copy: `VBS Assessoria. ${new Date().getFullYear()} Todos os direitos reservados`
  }
}
