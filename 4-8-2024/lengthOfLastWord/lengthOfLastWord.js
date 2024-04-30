function lengthOfLastWord(s) {
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
