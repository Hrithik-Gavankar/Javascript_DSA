/**
 * Pascal's Triangle
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * Each number is the sum of the two numbers directly above it.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 *
 * Approach:
 * - Start with [[1]]
 * - For each new row, first and last elements are always 1
 * - Inner elements = sum of two elements directly above (prev[j-1] + prev[j])
 *
 * @param {number} numRows
 * @returns {number[][]} first numRows of Pascal's triangle
 */
function generate(numRows) {
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prev = triangle[i - 1];
        const row = [1];

        for (let j = 1; j < i; j++) {
            row.push(prev[j - 1] + prev[j]);
        }

        row.push(1);
        triangle.push(row);
    }

    return triangle;
}


// ----------------------
// Test
// ----------------------

const result = generate(5);

console.log("Pascal's Triangle:", result);
