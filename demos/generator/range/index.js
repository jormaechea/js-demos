'use strict';

function* range(to, from = 0) {
	let i = 0;
	while(from + i <= to) {
		yield from + i;
		i++;
	}
}

// You can generate a range from zero (default) to ten
console.log('Default initial value range');
for(const index of range(10))
	console.log(`Index: ${index}`);

/* Output:
 Index: 0
 Index: 1
 Index: 2
 Index: 3
 Index: 4
 Index: 5
 Index: 6
 Index: 7
 Index: 8
 Index: 9
 Index: 10
 */

// Or even a range starting in a different number
console.log('Custom initial value range');
for(const index of range(10, 5))
	console.log(`Index: ${index}`);

/* Output:
 Index: 5
 Index: 6
 Index: 7
 Index: 8
 Index: 9
 Index: 10
 */