// function alertSpend(amount){
// 	return `Warning! You just spent £${amount}!`
// }

// console.log(alertSpend(100))
// const amount = 200

const alertSpend = (name, amount) => {
	if (amount > 50) {
		return `Warning ${name}! You just spent £${amount}!`;
	}
	
};

console.log(alertSpend("Ismail", 100));