# Which Hero

## About
*Which Hero* is vanity package for randomly selecting a fictional hero or villain.

## Installation
- Navigate to the root of your project and run: `npm install --save which-hero`.

## Setup
### CommonJS
- Within any project script(s), `require` the `which-hero` library as follows:
```
var whichHero = require( 'which-hero' );
```

## Usage
- The `which-hero` module exposes the `whichHero` function.
- `whichHero` can be invoked with or without arguments. In either case, the return value will be of type `object`.

### Without Arguments
```
var hero = whichHero(); // { name: 'Batman', type: 'hero' }
```

### With arguments
```
var hero = whichHero( { only: [ 'name' ] } ); // { name: 'Robin' }
```
```
var villain = whichHero( { restrict: 'VILLAINS' } ); // { name: 'The Joker', type: 'villain' }
```

## Documentation
Documentation for the `which-hero` module lives directly within `lib/which-hero.js`.
