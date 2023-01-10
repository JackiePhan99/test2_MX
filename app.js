let hailStone = function (n) {
	let num = [n]

	while (n != 1) {
		if (n % 2 == 0) {
			n = n / 2
			num.push(n)			
		}
		else {
			n = ((n * 3) + 1)
			num.push(n)					
		}
	}
	console.log(num)	
	return num;
}

hailStone(7);
hailStone(10);
hailStone(1);

