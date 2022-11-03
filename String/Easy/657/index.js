// 657. Robot Return to Origin
// https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let moveX = 0;
    let moveY = 0;
    
    
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'R':
                moveX++;
                break;
            case 'L':
                moveX--;
                break;
            case 'U':
                moveY++;
                break;
            case 'D':
                moveY--;
                break;
                
        }
    }
    
    return moveX === 0 && moveY === 0;
}

const moves = "UD";
const result = judgeCircle(moves);
console.log(result);

// time complexity: O(n)