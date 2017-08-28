import { Injectable } from '@angular/core';
import { Serializer, Registry } from '@kaiu/serializer';

@Injectable()
export class NgSerializerService extends Serializer {
    constructor(registry: Registry) {
        super(registry);
    }
}
