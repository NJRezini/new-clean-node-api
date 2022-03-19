import { HttpResponse } from '../protocols/http'
export const badReqeust = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error
})