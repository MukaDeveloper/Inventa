// exceptions/not-found.exception.ts
export class NotFoundException extends Error {
    constructor(message = 'Resource not found') {
      super(message);
    }
  }
  