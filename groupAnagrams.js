const groupAnagrams = (strs) => {
  let map = {};
  for (let str of strs) {
    // sort each string alphabetically
    let sortedStr = str.split("").sort().join("");
    if (!map[sortedStr]) {
      // if the sorted string is not in the map, add it as a key
      // and set its value to an array containing the original string
      map[sortedStr] = [str];
    } else {
      // if the sorted string is already in the map, push the original string
      // into the array of strings associated with that sorted string
      map[sortedStr].push(str);
    }
  }
  // convert the map to an array of arrays and return it
  return Object.values(map);
};

const test = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("TEST", groupAnagrams(test));
console.log("EXPECTED :", '[["bat"],["nat","tan"],["ate","eat","tea"]]');

// Space complexity: O(n) as map stores all string in array

// Time complexity O(n * m log m), n is the number of strings in the array
// and m is the maximum length of any string in the input array. Because we .sort(), which is O(m log m), this is the result
