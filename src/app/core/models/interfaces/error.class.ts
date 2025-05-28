export interface IError {
  code: string;
  message: string;
  overrides?: {
    [key: string]: string;
  };
}

export interface IErrorMap {
  [key: string]: IError;
}
