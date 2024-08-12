/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @class BusinessResponseObject
 * @date 05/02/2024
 */
export class BusinessResponseObject<T> {
  constructor(
    public message?: string,
    public data?: T,
    public success?: boolean,
  ) {
  }
}
