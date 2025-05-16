// Given two version strings, version1 and version2,
// compare them. A version string consists of revisions separated by dots '.'.
// The value of the revision is its integer conversion ignoring leading zeros.

// To compare version strings, compare their revision values in left-to-right order.
// If one of the version strings has fewer revisions, treat the missing revision values as 0.
// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

// Example 1:
// Input: version1 = "1.2", version2 = "1.10"
// Output: -1

// Example 2:
// Input: version1 = "1.01", version2 = "1.001"
// Output: 0

// Example 3:
// Input: version1 = "1.0", version2 = "1.0.0.0"
// Output: 0
