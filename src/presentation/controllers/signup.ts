import { MissingParamError } from '../errors/missing-param-error';
import { HttpResponse, HttpRequest} from '../protocols/http'
import { badReqeust } from '../helpers/http-helper'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name){
      return badReqeust(new MissingParamError('name'))
    }
    if (!httpRequest.body.email){      
        return badReqeust(new MissingParamError('email'))
    }
  }
}
