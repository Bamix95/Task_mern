import { HTTPSTATUS } from "../config/http.config.js";

export class AppError extends Error {
  constructor(
    message = "Something went wrong",
    statusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR
  ) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestException extends AppError {
  constructor(message = "Bad Request") {
    super(message, HTTPSTATUS.BAD_REQUEST);
  }
}

export class UnauthorizedException extends AppError {
  constructor(message = "Unauthorized") {
    super(message, HTTPSTATUS.UNAUTHORIZED);
  }
}

export class ForbiddenException extends AppError {
  constructor(message = "Forbidden") {
    super(message, HTTPSTATUS.FORBIDDEN);
  }
}

export class NotFoundException extends AppError {
  constructor(message = "Not Found") {
    super(message, HTTPSTATUS.NOT_FOUND);
  }
}

export class ConflictException extends AppError {
  constructor(message = "Conflict") {
    super(message, HTTPSTATUS.CONFLICT);
  }
}

export class UnprocessableEntityException extends AppError {
  constructor(message = "Unprocessable Entity") {
    super(message, HTTPSTATUS.UNPROCESSABLE_ENTITY);
  }
}

export class InternalServerException extends AppError {
  constructor(message = "Internal Server Error") {
    super(message, HTTPSTATUS.INTERNAL_SERVER_ERROR);
  }
}

export class HttpException extends AppError {
  constructor(
    message = "Http Exception Error",
    statusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR
  ) {
    super(message, statusCode);
  }
}
