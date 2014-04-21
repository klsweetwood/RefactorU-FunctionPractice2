// 1. Write a function called 'getName' which takes a single object argument
// and returns the value of the 'name' property of the given object.
var getName = function(obj) {
	if('name' in obj) {
		return obj.name;
	}
	else {
		return "Name does not exist";
	}
};

// 2. Write a function called 'totalLetters' which takes an array of
// strings and returns the total number of letters in all strings.
var totalLetters = function(arr) {
	var allItems = arr.join('').toLowerCase();
	var newString = '';
	for (var i=0; i<allItems.length; i++) {
		if (allItems.charCodeAt(i) > 96 && allItems.charCodeAt(i) < 123) {
			newString = newString + allItems.charAt(i);
		}
	}
	return newString.length;
};

// 3. Write a function called 'keyValue' which takes two arguments and
// returns an object with a key of the first argument and the value of the second argument.
var keyValue = function(key, value) {
	var Obj = function() {
		this[key] = value;
	};
	return new Obj;
};


// 4. Write a function called 'negativeIndex' which takes an array and
// a negative number, and returns the value from the array at the given
// negative index, as if the array was circular, i.e. arr.length+num.
var negativeIndex = function(arr, num) {
	if (num >= 0 && num < arr.length) {
		return arr[num];
	}
	else if (num < 0 && -num <= arr.length) {
		return arr[arr.length + num];
	}
	else if (num === undefined) {
		return arr;
	}
	else {
		throw new Error("Not in range");
	}
};