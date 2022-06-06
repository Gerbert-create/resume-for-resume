let courses = [
	{ name: "Courses in England", prices: [0, 100] },
	{ name: "Courses in Germany", prices: [500, null] },
	{ name: "Courses in Italy", prices: [100, 200] },
	{ name: "Courses in Russia", prices: [null, 400] },
	{ name: "Courses in China", prices: [50, 250] },
	{ name: "Courses in USA", prices: [200, null] },
	{ name: "Courses in Kazakhstan", prices: [56, 324] },
	{ name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let result_1 = []
let result_2 = []
let result_3 = []

function nullDefinitionCourse() {
	courses.forEach((item) => {
		if (item.prices[1] == null) {
			item.prices[1] = Number.POSITIVE_INFINITY
		}

		if (item.prices[0] == null) {
			item.prices[0] = 0
		}
	})
}
nullDefinitionCourse()


function priceFilter() {
	courses.forEach((item) => {
		if (item.prices[0] >= requiredRange1[0] && item.prices[1] <= requiredRange1[1]) {
			result_1.push(item)
		}

		if (item.prices[0] >= requiredRange2[0] && item.prices[1] <= requiredRange2[1]) {
			result_2.push(item)
		}

		if (item.prices[0] >= requiredRange3[0]) {
			result_3.push(item)
		}
	})
}
priceFilter()
console.log(result_1)
console.log(result_2)
console.log(result_3)
