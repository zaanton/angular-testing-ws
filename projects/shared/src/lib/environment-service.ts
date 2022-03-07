import { Inject, Injectable } from '@angular/core';
import { FOR_ROOT_ENVIRONMENT_TOKEN } from './types';

import { Environment } from './types';

@Injectable({ providedIn: 'root' })
export class EnvironmentService implements Environment {
  get production() {
    return this.environment.production;
  }

  get apiUrl() {
    return this.environment.apiUrl;
  }

  constructor(
    @Inject(FOR_ROOT_ENVIRONMENT_TOKEN) private environment: Environment
  ) {}
}
