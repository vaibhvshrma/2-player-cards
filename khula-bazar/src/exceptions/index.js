export class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "BaseError";
  }
}

export class InitializationError extends BaseError {
  constructor(message) {
    super(message);
    this.name = "InitializationError";
  }
}

export class GameError extends BaseError {
  constructor(message) {
    super(message);
    this.name = "GameError";
  }
}
