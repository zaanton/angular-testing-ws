import { InjectionToken } from '@angular/core';
import { Environment } from './types';

export const FOR_ROOT_ENVIRONMENT_TOKEN = new InjectionToken<Environment>(
  '[forRoot] Environment Config'
);
