/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class LeadModel
 * @date 31/01/2024
 */
export class LeadModel {
  public id!: number;
  public name!: string;
  public email!: string;
  public cpf!: string;
  public syndicate!: string;
  public status!: string;
  public phone!: string;
  public description!: string;

  constructor(fields?: {
    id?: number | unknown;
    name?: string | unknown;
    email?: string | unknown;
    cpf?: string | unknown;
    syndicate?: string | unknown;
    status?: string | unknown;
    phone?: string | unknown;
    description?: string | unknown;
  }) {
    Object.assign(this, fields);
  }
}
