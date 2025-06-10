import { HttpContextDto } from "../models/http-client-context.dto";
import { ResponseMessageDto } from "../../models/response-message.dto";

export interface IHttpClientGetService {
    sendRequest(context: HttpContextDto): Promise<ResponseMessageDto<any>>
}
