/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @exports Utils - utilities for DeStagnate
 */

/**
 * Checks if val1 and val2 are equal
 * @param val1 - value to check for equality
 * @param val2 - value to compare against val1
 * @param maxDepth - max recursion depth to crawl an object. After max depth is
 * reached, the two values are simply compared with `===`
 * @param maxLength - max length of array to crawl. If max lenth is reached, two
 * arrays will simply be compared with `===`
 * @returns `val1 === val2`
 */
export const isEqual = (val1: unknown, val2: unknown, maxDepth = 3, maxLength = 10): boolean => {
    if (maxDepth === 0) {
        // If maxDepth reached, just run ===
        return val1 === val2
    } else if (typeof val1 !== typeof val2) {
        // If they aren't the same type, return false
        return false
    }

    if (val1 instanceof Array && val2 instanceof Array) {
        if (val1.length !== val2.length) {
            // If arrays have different lengths
            return false
        } else if (val1.length > maxLength || val2.length > maxLength) {
            // If array is too big
            return val1 === val2
        }

        for (let index = 0; index < val1.length; index++) {
            // Go through each item
            if (!isEqual(val1[index], val2[index], maxDepth - 1, maxLength)) {
                // Test if two array items are equal
                return false
            }
        }

        return true
    } else if (val1 instanceof Object && val2 instanceof Object) {
        // If object
        if (!isEqual(Object.keys(val1), Object.keys(val2), maxDepth - 1, maxLength)) {
            // If they don't have he same keys
            return false
        }

        for (const key of Object.keys(val1)) {
            // Go through and test each value
            type Obj = {[key: string]: unknown}

            if (!isEqual((val1 as Obj)[key], (val2 as Obj)[key], maxDepth - 1, maxLength)) {
                return false
            }
        }

        return true
    }

    return val1 === val2
}

export default {
    isEqual,
}
