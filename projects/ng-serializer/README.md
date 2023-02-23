# ng serializer
[![Build Status](https://travis-ci.org/kaiu-lab/ng-serializer.svg?branch=master)](https://travis-ci.org/kaiu-lab/ng-serializer)
[![codecov](https://codecov.io/gh/kaiu-lab/ng-serializer/branch/master/graph/badge.svg)](https://codecov.io/gh/kaiu-lab/ng-serializer)
[![npm version](https://badge.fury.io/js/%40kaiu%2Fng-serializer.svg)](https://www.npmjs.com/package/@kaiu/ng-serializer)
[![devDependency Status](https://david-dm.org/kaiu-lab/ng-serializer/dev-status.svg)](https://david-dm.org/kaiu-lab/ng-serializer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/kaiu-lab/ng-serializer.svg)](https://github.com/kaiu-lab/ng-serializer/issues)
[![GitHub stars](https://img.shields.io/github/stars/kaiu-lab/ng-serializer.svg)](https://github.com/kaiu-lab/ng-serializer/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/kaiu-lab/ng-serializer/master/LICENSE)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular wrapper for [@kaiu/serializer](https://www.npmjs.com/package/@kaiu/serializer) library

## Installation

Install through npm:
```
npm install --save @kaiu/ng-serializer @kaiu/serializer
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { NgSerializerModule } from 'ng-serializer';

@NgModule({
  imports: [
    NgSerializerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Foo } from './models/foo';
import { NgSerializerService } from '@kaiu/ng-serializer';

@Component({
  template: 'foo'
})
export class MyComponent implements OnInit {
    constructor(private http:Http, private serializerService:NgSerializerService){}
    
    ngOnInit():void{
        let data = this.http.get('https://foo.org/bar').map(response => {
           return this.serializerService.deserialize<Foo>(response.json(), Foo);
        });
        data.subscribe(fooModel => {
           fooModel.baz();//This will work ! 
        });
    }    
}
```

The full documentation of the serializer can be found on [@kaiu/serializer's website](https://kaiu-lab.github.io/serializer/).

### Usage without a module bundler
```
<script src="node_modules/ng-serializer/bundles/ng-serializer.umd.js"></script>
<script>
    // everything is exported ngSerializer namespace
</script>
```

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `yarn install` while current directory is this repo

### Testing
Run `yarn test` to run tests once or `yarn test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn release
```

## License

MIT
