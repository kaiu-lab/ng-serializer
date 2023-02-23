import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSerializerService } from './ng-serializer.service';
import { Registration } from '@kaiu/serializer';
import { NgSerializerServiceFactory } from './ng-serializer.factory';

export const SERIALIZER_CONFIG: InjectionToken<Registration[]> = new InjectionToken('serializer.config');


@NgModule({
  imports: [
    CommonModule
  ]
})
export class NgSerializerModule {

  static forRoot(registrations: Registration[] = []): ModuleWithProviders<NgSerializerModule> {
    return {
      ngModule: NgSerializerModule,
      providers: [
        {
          provide: SERIALIZER_CONFIG,
          multi: true,
          useValue: registrations
        },
        {
          provide: NgSerializerService,
          useFactory: NgSerializerServiceFactory,
          deps: [SERIALIZER_CONFIG]
        }
      ]
    };
  }

  static forChild(registrations?: Registration[]): ModuleWithProviders<NgSerializerModule> {
    return {
      ngModule: NgSerializerModule,
      providers: [{
        provide: SERIALIZER_CONFIG,
        multi: true,
        useValue: registrations
      }]
    };
  }
}
