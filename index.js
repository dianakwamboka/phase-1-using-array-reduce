const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// arrow function involved
let totalBatteries = batteryBatches.reduce((acc, battery) => battery + acc, 0)
console.log(totalBatteries)
