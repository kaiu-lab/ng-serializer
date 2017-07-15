import { NgSerializerService } from './ng-serializer.service';
import { Registration } from '@kaiu/serializer';

export function NgSerializerServiceFactory(registrations?: Registration[]): NgSerializerService {
    const service: NgSerializerService = new NgSerializerService();
    service.register(registrations);
    return service;
}
