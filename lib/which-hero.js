// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Vendor
const { ArrayUtils } = require( 'sfco-js-utils' );

// Project
const DATA = require( '../data/data' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const { sample } = ArrayUtils;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
/**
 * Function returns 'hero data'.
 *
 * Return value of function can be modified by providing an `options` object.
 *
 * @param {Object} `options`
 * @return {Object}
 */
function whichHero( options ) {
	options = ( options && typeof options === 'object' ) ? options : {};

	var output = null;

	// Update `output`, apply 'restrict' option if applicable.
	if ( options.restrict && options.restrict in DATA ) {
		output = sample( DATA[ options.restrict ] );
	} else {
		output = sample( DATA.ALL );
	}

	// Parse 'only' option (if applicable).
	if ( options.only ) {
		let only = ( Array.isArray( options.only ) && options.only.length ) ? options.only : [ options.only ];
		let out = {};

		only.forEach( ( prop ) => {
			if ( output[ prop ] !== undefined ) {
				out[ prop ] = output[ prop ];
			}
		} );

		output = out;
	}

	return output;
}

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = whichHero
