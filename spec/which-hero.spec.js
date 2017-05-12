describe( '`whichHero()`', () => {
	it ( 'Should be importable', () => {
		const whichHero = require( '../index' );

		// Sanity check. If test does not throw error, then module is 'importable'.
		expect( true ).toBe( true );
	} );

	it( 'Should return an object when invoked with 0 args.', () => {
		const whichHero = require( '../index' );

		expect( typeof whichHero() ).toBe( 'object' );
	} );

	it( 'Should return an object with a `name` property when invoked with 0 args.', () => {
		const whichHero = require( '../index' );

		expect( whichHero().name === undefined ).toBe( false );
	} );
} );
