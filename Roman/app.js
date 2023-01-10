let arabicNumber = document.querySelector("#number")
let romanNumber = document.querySelector("#result")
let font_ar = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 4000, 5000, 9000, 10000];
let font_rom = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

function to_roman(num) {
	if (!num) return "";
	let result = "";
	let n = font_ar.length - 1;
	while (num > 0) {
		if (num >= font_ar[n]) {
			result += font_rom[n];
			num -= font_ar[n];
		}
		else n--;
	}
	return result;
}

function translater() {

	if(arabicNumber.value < 4000) {
		arabicNumber.classList.remove("error")
		res = to_roman(arabicNumber.value);
		romanNumber.innerHTML = res;
	} else  {
		arabicNumber.classList.add("error")
		romanNumber.innerHTML = "Your number must be integer and lower than 4000.";
	}
}

