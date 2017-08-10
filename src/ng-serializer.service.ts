import { Injectable } from '@angular/core';
import { Serializer, Registry } from '@kaiu/serializer';

@Injectable()
export class NgSerializerService extends Serializer {
    constructor(public readonly registry: Registry) {
        super(registry);
    }
}
