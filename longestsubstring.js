function lengthOfLongestSubstring(s) {
    const arr=s.split("")
    const arrr= new Set(arr)
    const aray= Array.from(arrr)
    console.log(aray.length)

}
  
  // Example usage:
  const inputStr = "abcabcbb";
  const longestLength = lengthOfLongestSubstring(inputStr);
  console.log("Length of the longest substring without repeating characters:", longestLength); // Output: 3
  