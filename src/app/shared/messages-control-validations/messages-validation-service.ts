/**
 * (Messages Control Validations)
 *
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @class MessagesValidationService
 * @description Validações e centralização das mensagens de alerta padrões do sistema
 * @date 02/02/2023
 */
export class MessagesValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'Campo obrigatório',
      invalidEmailAddress: 'Endereço de email inválido',
      cnpjInvalido: 'CNPJ inválido',
      cpfInvalido: 'CPF / CNPJ inválido',
      email: 'E-mail inválido. Exemplo: email@seudominio.com.br',
      pattern: 'Informação inválida',
      invalidCreditCard: 'É o número do cartão de crédito inválido',
      phoneCelValidate: 'Celular inválido. Exemplo: (99) 9 9999-9999',
      ddd: '(DDD) inválido:  Exemplo: (99) 9999-9999',
      validarSite: 'Endereço do site inválido',
      minDate: 'Data mínima inválida',
      maxDate: 'Data máxima inválida',
      minHour: 'Hora mínima inválida',
      minMinute: 'Minuto inválido',
      isDateValid: 'Data inválida',
      ofAge: 'Idade mínima é de 18 anos',
      intercalate: 'Não é permitido intercalar dias da semana',
      invalidDateBefore: 'A data não pode ser menor ou igual a data atual',
      invalidPassword: 'Senha inválida. A senha deve ter pelo menos 6 caracteres e conter um número.',
      isEmailEquals: 'Os emails não são iguais.',
      matDatepickerParse: 'Preencha este campo novamente.',
      minlength: `Obrigatório mínimo ${validatorValue.requiredLength}`,
      min: `Valor inferior ao mínimo`,
      max: `Valor superior ao máximo`,
    };
    // @ts-ignore
    return config[validatorName];
  }
}
