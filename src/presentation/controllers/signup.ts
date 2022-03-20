import { MissingParamError } from '../errors/missing-param-error';
import { badReqeust } from '../helpers/http-helper';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignUpController {
  // eslint-disable-next-line no-restricted-syntax
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badReqeust(new MissingParamError(field));
      }
    }
  }
}
