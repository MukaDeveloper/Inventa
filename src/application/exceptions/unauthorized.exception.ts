// exceptions/unauthorized.exception.ts
export class UnauthorizedException extends Error {
    constructor(message = 'Unauthorized') {
      super(message);
    }
  }
  