import { TestBed } from '@angular/core/testing';
import { NgSerializerModule } from '../src';

describe('app-hello-world component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                NgSerializerModule.forRoot()
            ]
        });
    });

});
