// function LongetstCoomenPrifix(strs: string[]): string {

//     let firstString: string = strs[0];
//     let i: number = 1;
//     let curr: number = 0;
//     let prev: number = 0;
//     let result: string = "";
//     while (i <= strs.length - 1) {
//         if (firstString[prev] == strs[i][curr]) {
//             result += strs[i][curr];
//             curr++;
//             prev++;
//         }
//         else {
//             prev++;
//         }
//         if (prev > strs[i].length - 1) {
//             i++;
//             curr = 0;
//             prev = 0;
//             firstString = result;
//             result = "";
//         }
//     }

//     return firstString;
// }

// console.log(LongetstCoomenPrifix(["flower", "flow", "flight"]));



function longestCommonPrefix(strs: string[]): string {

    let prefix: string = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));