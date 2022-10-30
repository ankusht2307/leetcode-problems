// 1678. Goal Parser Interpretation
// https://leetcode.com/problems/goal-parser-interpretation/

/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let str = '';
    
    for (let i = 0; i < command.length; i++) {
        if(command[i] === 'G') {
            str += 'G';
        } else if(command[i] === '(') {
            if (command[i+1] === ')') {
                str += 'o'
            } else {
                str += 'al'
            }
        }
    }
    
    return str;

    // one liner
    // return command.split('()').join('o').split('(al)').join('al');
};


const command = "G()(al)";
const result = interpret(command);
console.log(result);
// This has time complexity of o(n) because we have 
// constant string length.