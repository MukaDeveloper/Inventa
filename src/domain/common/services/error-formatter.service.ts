import { Injectable } from '@nestjs/common';

@Injectable()
export class ErrorFormatterService {
  format(error: any, contextUrl?: string): string {
    const messages: string[] = [];

    const status = error.response?.status || error.statusCode;
    const statusText = error.response?.statusText;
    if (status) messages.push(`Status: ${status}`);
    if (statusText) messages.push(`StatusText: ${statusText}`);

    if (contextUrl) messages.push(`URL: ${contextUrl}`);
    const method = error.config?.method || error.request?.method;
    if (method) messages.push(`Method: ${method}`);

    if (error.message) messages.push(`Message: ${error.message}`);
    //if (error.code) messages.push(`Code: ${error.code}`);
    //if (error.name) messages.push(`Name: ${error.name}`);

    const responseData = error.response?.data || error.data;
    if (typeof responseData === 'object') {
      const deepMessages = this.extractMessagesFromObject(responseData);
      messages.push(...deepMessages);
    }

    return messages.join('\n');
  }

  private extractMessagesFromObject(obj: any, prefix: string = ''): string[] {
    const messages: string[] = [];

    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        messages.push(...this.extractMessagesFromObject(item, `${prefix}[${index}]`));
      });
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key of Object.keys(obj)) {
        const value = obj[key];

        if (typeof value === 'string' && key.toLowerCase().includes('message')) {
          messages.push(`${prefix}${key}: ${value}`);
        } else if (Array.isArray(value) && typeof value[0] === 'string') {
          messages.push(`${prefix}${key}: ${value.join('; ')}`);
        } else if (typeof value === 'object') {
          messages.push(...this.extractMessagesFromObject(value, `${prefix}${key}.`));
        }
      }
    }

    return messages;
  }
}
