import { Injectable } from '@angular/core';
import { Serializer, Registration } from '@kaiu/serializer';

@Injectable()
export class NgSerializerService extends Serializer {

    public register(registrations: Registration[]): void {
        return super.register(registrations);
    }
}
