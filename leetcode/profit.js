/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let less = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
       if (prices[i] < less) {
           less = prices[i];
       }
       if ((prices[i] - less) > profit) {
           profit = prices[i] - less;
       }
    }

    return profit
 };