"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isValid(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "{" || s[i] == "[" || s[i] == "(") {
            stack.push(s[i]);
        }
        else {
            if (stack.length == 0) {
                return false;
            }
            if (stack[stack.length - 1] == "(" && s[i] == ")" || stack[stack.length - 1] == "{" && s[i] == "}" || stack[stack.length - 1] == "[" && s[i] == "]") {
                stack.pop();
            } else {
                return false
            }
        }
    }


    return true;
}
;


console.log(isValid("()[]{}"));
