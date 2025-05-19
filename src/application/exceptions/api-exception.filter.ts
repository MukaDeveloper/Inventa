// filters/api-exception.filter.ts
import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { ValidationException } from './validation.exception';
  import { NotFoundException } from './not-found.exception';
  import { UnauthorizedException } from './unauthorized.exception';
  
  @Catch()
  export class ApiExceptionFilter implements ExceptionFilter {
    private readonly exceptionHandlers: Record<string, (exception: any, response: Response) => void>;
  
    constructor() {
      this.exceptionHandlers = {
        ValidationException: this.handleValidationException,
        NotFoundException: this.handleNotFoundException,
        UnauthorizedException: this.handleUnauthorizedException,
      };
    }
  
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      const exceptionName = exception.constructor.name;
      if (this.exceptionHandlers[exceptionName]) {
        return this.exceptionHandlers[exceptionName](exception, response);
      }
  
      if (exception instanceof HttpException) {
        return response.status(exception.getStatus()).json({
          statusCode: exception.getStatus(),
          message: exception.message,
          error: exception.getResponse()
        });
      }
  
      console.error('Unhandled Exception:', exception);
  
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
        error: exception.getResponse()
      });
    }
  
    private handleValidationException(exception: ValidationException, response: Response) {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Validation Error',
        errors: exception.errors
      });
    }
  
    private handleNotFoundException(exception: NotFoundException, response: Response) {
      response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Not Found',
        errors: exception.message,
      });
    }
  
    private handleUnauthorizedException(exception: UnauthorizedException, response: Response) {
      response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Unauthorized',
        errors: exception.message,
      });
    }
  }
  