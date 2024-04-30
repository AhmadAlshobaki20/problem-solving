// function isPalindrome(x: number): boolean {

//     // invers (x) = (x) true 
//     var xToString = x.toString();
//     xToString.split("");
//     var xInvers = "";
//     for (let i = xToString.length - 1; i >= 0; i--) {
//         xInvers += xToString[i];
//     }
//     return +xInvers == x;
// };

// console.log(isPalindrome(121));


function isPalindrome(x) {
    var xToString = x.toString().split("");
    var leftPointer = 0;
    var rightPointer = xToString.length - 1;
    var mid = Math.ceil(xToString.length / 2);

    while (rightPointer > mid && leftPointer < mid) {
        console.log(xToString.length, "xToString.length");
        if (xToString[leftPointer] != xToString[rightPointer]) {
            return false;
        }
        else {
            leftPointer++;
            rightPointer--;
        }
    }
    if (xToString.length <= 2) {
        return false
    }
    return true;
}

console.log(isPalindrome(121));