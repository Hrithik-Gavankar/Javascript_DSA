/**
 * Dutch National Flag Algorithm (3 pointers)
 *
 * Sort an array containing only 0, 1, and 2 in-place.
 * 0 → Red
 * 1 → White
 * 2 → Blue
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * Approach:
 * [0 .... low-1]   -> 0s
 * [low ... mid-1]  -> 1s
 * [mid ... high]   -> unsorted
 * [high+1 ... n-1] -> 2s
 *
 * @param {number[]} nums
 * @returns {number[]} sorted array (in-place)
 */
function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // swap low & mid
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            // nums[mid] === 2
            // swap mid & high
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}


// ----------------------
// Test
// ----------------------

const arr = [2, 0, 2, 1, 1, 0];

const sorted = sortColors(arr);

console.log("Sorted Array:", sorted);