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

// Example 4:
// Input: version1 = "1.0", version2 = "1.0.0.0.0.1"
// Output: 0

function compareVersions(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const maxLength = Math.max(v1.length, v2.length);

  for (let i = 0; i < maxLength; i++) {
    if (!v1[i]) {
      v1.push(0);
    }

    if (!v2[i]) {
      v2.push(0);
    }

    if (Number(v1[i]) > Number(v2[i])) {
      return 1;
    }

    if (Number(v1[i]) < Number(v2[i])) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersions('1.2', '1.10'));
