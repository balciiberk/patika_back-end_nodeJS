const radius = process.argv[2];

function calculateArea(r) {
	console.log(`Area of a circle with radius ${r} is: ${Math.PI * r**2}`);
	return Math.PI * r**2;
}

calculateArea(radius * 1);