function freeShipping(order) {
	let isFreeShip = false;
		if (sumOrder(order) >= 50.00) {
			isFreeShip = true
		}
	console.log(isFreeShip);
	return isFreeShip;
}

function sumOrder(order) {
	return Object.values(order).reduce((a, b) => a + b, 0);
}

freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 });
freeShipping({ "Flatscreen TV": 399.99 });
freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 });
freeShipping({ "1": 2.3, "2": 35.4, "3": 42.2 });