function numberMultiply() {
	for (var i = 0; i < 101; i++) {
		console.log(i + " * 9 = " + i * 9);
	};
};

function studentList() {
	var students = ["Lucille", "Michael", "George Michael"];
	for (var i = 0; i < students.length; i++) {
		console.log(students[i] + " is in the class.");
	};
};

function fizzBuzz() {
	for (var i = 1; i < 101; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("FizzBuzz");
		} else if (i % 3 === 0) {
			console.log("Fizz");
		} else if (i % 5 === 0) {
			console.log("Buzz");
		} else {
			console.log(i);
		}
	};
};