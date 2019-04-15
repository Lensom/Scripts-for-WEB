var events = [['24.05.2019', 5], ['12.08.2020', 25], ['04.11.2019', 45], ['29.06.2020', 15]]
// 2 number in array - is the number of events on that day, option
// console.log(events)

var sortArray = events.sort(function compare(a, b) {
	var k = a[0].split('.');
	k = k[2] + k[1] + k[0];
	var l = b[0].split('.');
	l = l[2] + l[1] + l[0];
	if (k < l) {
		return -1;
	}
	if (k > l) {
		return 1;
	}
	// a должно быть равным b
	return 0;
})

var lastItem = sortArray[sortArray.length - 1];

console.log(lastItem[0])
console.log(sortArray)