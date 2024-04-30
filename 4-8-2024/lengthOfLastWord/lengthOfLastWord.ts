// function lengthOfLastWord(s: string): number {

//     let newStr: string = s.trim();
//     let newStrArr: string[] = newStr.split(" ");

//     return newStrArr[newStrArr.length - 1].length;
// }

// console.log(lengthOfLastWord(" a"));


function lengthOfLastWord(s: string): number {
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i].charCodeAt(0) == 32) {
            if (count > 0) {
                return count;
            }
            continue;
        } else {
            count++;
        }
    }

}
console.log(lengthOfLastWord("luffy is still joyboy"));
