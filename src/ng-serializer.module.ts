import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSerializerService } from './ng-serializer.service';
import { Registration } from '@kaiu/serializer';

@NgModule({
    imports: [
        CommonModule
    ]
})
export class NgSerializerModule {

    static forRoot(registrations?: Registration[]): ModuleWithProviders {
        return {
            ngModule: NgSerializerModule,
            providers: [
                {
                    provide: NgSerializerService,
                    useFactory: () => {
                        const service: NgSerializerService = new NgSerializerService();
                        service.register(registrations);
                        return service;
                    }
                }
            ]
        };
    }
}
