import Stack from "./stack";

function isValid(s: string): boolean {
    var stack: String[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
            stack.push(s[i])
        } else {
            if (!stack.length) {
                return false;
            }
            if (stack[stack.length - 1] == "(" && s[i] == ")" || stack[stack.length - 1] == "{" && s[i] == "}" || stack[stack.length - 1] == "[" && s[i] == "]") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length == 0
}

console.log(isValid("({[]})"));