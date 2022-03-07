import { ModuleWithProviders, NgModule } from '@angular/core';
import { EnvironmentService } from './environment-service';
import { FOR_ROOT_ENVIRONMENT_TOKEN } from './types';
import { Environment } from './types';

@NgModule({})
export class EnvironmentModule {
  private static env: Environment;
  static forRoot(
    environment: Environment
  ): ModuleWithProviders<EnvironmentModule> {
    EnvironmentModule.env = environment;
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: FOR_ROOT_ENVIRONMENT_TOKEN,
          useValue: environment,
        },
        EnvironmentService,
      ],
    };
  }
  static forChild(): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: FOR_ROOT_ENVIRONMENT_TOKEN,
          useValue: EnvironmentModule.env,
        },
        EnvironmentService,
      ],
    };
  }
}
