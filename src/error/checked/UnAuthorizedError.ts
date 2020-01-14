export default class UnAuthorizedError extends Error {

  constructor(message: string) {
    super(message);
  }

}
