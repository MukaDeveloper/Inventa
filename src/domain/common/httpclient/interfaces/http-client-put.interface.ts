import { HttpContextDto } from "../models/http-client-context.dto";
import { ResponseMessageDto } from "../../models/response-message.dto";

export interface IHttpClientPutService {
    sendRequest(context: HttpContextDto): Promise<ResponseMessageDto<any>>
}
