// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let arr = address.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '.') {
            arr[i] = '[.]';
        }
    }
    return arr.join('');
};

const address = "1.1.1.1";

const defangedString = defangIPaddr(address);
console.log(defangedString);
