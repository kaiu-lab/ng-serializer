import { NgSerializerService } from './ng-serializer.service';
import { Registration, Registry } from '@kaiu/serializer';

export function NgSerializerServiceFactory(registrations?: Registration[][]): NgSerializerService {
    const registry: Registry = new Registry();
    // Because we could get undefined registrations in the registrations
    registrations = registrations.filter(registration => registration !== undefined);
    //The concat called here is used to flatten the array, allowing multi:true in provider.
    registry.add([].concat(...registrations));
    return new NgSerializerService(registry);
}
