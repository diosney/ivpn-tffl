import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '@core/models/interfaces/api';

export interface AwsErrorFromNetwork {
  __type: string;
  message: string;
}

export interface AwsErrorFromAmplify {
  code: string;
  message: string;
}

export type ErrorGlob = string
  | AwsErrorFromNetwork
  | AwsErrorFromAmplify
  | HttpErrorResponse
  | ApiStandardError
  | ApiError;

export interface ApiStandardError {
  id: string;
  message: string;
}
