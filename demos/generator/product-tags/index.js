'use strict';

function* productTags(products) {
	for(const product of products) {
		for(const tag of product.tags)
			yield tag;
	}
}

const products = [
	{
		name: 'Some drink',
		tags: ['drink', 'bottled']
	},
	{
		name: 'Spaguetti',
		tags: ['food', 'pasta', 'italian']
	},
	{
		name: 'Pizza',
		tags: ['food', 'italian']
	}
];

// You can use it to loop and do something for each tag
for(const tag of productTags(products))
	console.log(`Tag: ${tag}`);

/* Output:
 Tag: drink
 Tag: bottled
 Tag: food
 Tag: pasta
 Tag: italian
 Tag: food
 Tag: italian
 */

// Or you can extract all the values to an array
console.log('All tags', Array.from(productTags(products)));

/* Output
 All tags ['drink', 'bottled', 'food', 'pasta', 'italian', 'food', 'italian']
 */

// You can even use a Set to get unique values
console.log('Unique tags', new Set(productTags(products)));

/* Output
 Unique tags Set { 'drink', 'bottled', 'food', 'pasta', 'italian' }
 */
