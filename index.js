// Implement an algorithm to determine if a string has all unique characters. You cannot use additional data structures.

//  O(n^2) - time | O(1) - space 
function isUnique(str){
  for(let i = 0; i < str.length; i++){
    for(let j = i + 1; j < str.length; j++){
      if(str[i] === str[j]){
        return false;
      }
    }
  }
  return true
}
isUnique('xhabqa')
