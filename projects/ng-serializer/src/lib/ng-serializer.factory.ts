import { NgSerializerService } from './ng-serializer.service';
import { Registration, Registry } from '@kaiu/serializer';

export function NgSerializerServiceFactory(registrations: Registration[][]): NgSerializerService {
    const registry: Registry = new Registry();
    //The concat called here is used to flatten the array, allowing multi:true in provider.
    registry.add(([] as Registration[]).concat(...registrations));
    return new NgSerializerService(registry);
}
