// const { clientWidth } = document.documentElement;
// console.log(clientWidth);

// export function returnReasonableSize(
// 	clientWidth = clientWidth,
// 	multiplier = 0.04,
// 	floor = 36,
// 	ceil = 80,
// ) {
// 	let factorial = multiplier * clientWidth;
// 	console.log(factorial);
// 	let floorResult =
// 		factorial < floor ? (factorial = floor) : (factorial = factorial);
// 	console.log(floorResult);
// 	let reasonableSize =
// 		floorResult > ceil ? (floorResult = ceil) : (floorResult = floorResult);
// 	console.log(reasonableSize);
// 	return reasonableSize;
// }
// class ReturnReasonableSize(clientSize, multiplier = 0.04) {
//   this.clientSize = clientSize || document.documentElement.clientSize;
//   this.multiplier = multiplier ||  0.04;

//   clientWidthCalculator() {
//   this.calcSize = multiplier * clientSize;
//   console.log(calcSize);
//   return calcSize;
// }
//   processLowerLimit(source, floor = 36) {
//     let result = source < floor ? (source = floor) : (source = source);
//     console.log(result);
//     return result;
// }
//    processUpperLimit(source, ceil = 80) {
//     let result = source > ceil ? (source = ceil) : (source = source);
//     console.log(result);
//     return result;
// }
// }
