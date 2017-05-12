// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
/**
 * ...
 */
const ALL = [
    { name: 'Batman', type: 'hero' },
    { name: 'Robin', type: 'hero' },
    { name: 'Thanos', type: 'villain' },
    { name: 'The Joker', type: 'villain' },
    { name: 'Clayface', type: 'villain' },
];

/**
 * ...
 */
const HEROES = ALL.filter( item => ( item && item.type === 'hero' ) );

/**
 * ...
 */
const VILLAINS = ALL.filter( item => ( item && item.type === 'villain' ) );

// --------------------------------------------------
// PUBLIC API
// --------------------------------------------------
module.exports = {
    ALL,
    HEROES,
    VILLAINS
};