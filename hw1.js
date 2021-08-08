const radius = process.argv[2];

function calculateArea(r) {
	console.log(Math.PI * r**2);
	return Math.PI * r**2;
}

calculateArea(radius * 1);