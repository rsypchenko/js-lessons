/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (hash.has(diff)) {
            return [hash.get(diff), i];
        }
        hash.set(nums[i], i);
    }

    return null;
};