// 1672. Richest Customer Wealth
// https://leetcode.com/problems/richest-customer-wealth/

const findRichestCustomer = (accounts) => {
  // check if the accounts are empty
  if (accounts.length === 0) return null;
  let wealth = accounts[0][0];
  for (let person = 0; person < accounts.length; person++) {
    // when we switch the account then take the accout value
    let currentAccountWealth = 0;
    for (let account = 0; account < accounts[person].length; account++) {
      currentAccountWealth += accounts[person][account];
    }
    if (wealth < currentAccountWealth) wealth = currentAccountWealth;
  }
  return wealth;
};

let accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

const wealth = findRichestCustomer(accounts);
console.log(wealth);
