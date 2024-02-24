const start2 = performance.now();
// function longestPalindrome(str: string): string {
//   let result = "";
//   const strReversed = [...str].reverse().join("");
//   let counter = 0;

//   outer: for (let pLen = str.length; pLen > 0; pLen--) {
//     for (let i = 0; i <= str.length - pLen; i++) {
//       const palindrome = str.slice(i, i + pLen);

//       counter++;

//       if (RegExp(palindrome).test(strReversed)) {
//         result = palindrome;
//         break outer;
//       }
//     }
//   }
//   console.log(counter);

//   return result;
// }

function isPalindrome(str: string, start: number, end: number): string {
  if (start >= 0 && end < str.length && str[start] === str[end]) {
    return isPalindrome(str, start - 1, end + 1);
  }
  return str.slice(start + 1, end);
}

function longestPalindrome(str: string): string {
  var result = str[0];
  for (let i = 0; i < str.length; i++) {
    //for evry character try grow and set result if grow returns longer string
    const odd = isPalindrome(str, i, i);
    const even = isPalindrome(str, i, i + 1);
    const current = odd.length > even.length ? odd : even;
    if (current.length > result.length) result = current;
  }

  return result;
}

// console.log("final", longestPalindrome("aaaasa"));

console.log(
  " final ",
  longestPalindrome(
    "bjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeideb"
  )
);

console.log(performance.now() - start2);
