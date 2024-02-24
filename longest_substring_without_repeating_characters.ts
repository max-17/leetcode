function lengthOfLongestSubstring(str: string): number {
  let result = 0;

  for (let i = 0; i < str.length - result; i++) {
    let current = str[i];
    for (let k = i + 1; k < str.length; k++) {
      if (current.includes(str[k])) {
        i += current.indexOf(str[k]);
        break;
      }
      current += str[k];
    }
    if (current.length > result) {
      result = current.length;
    }
  }

  return result;
}

console.log(
  " final ",
  lengthOfLongestSubstring(
    "bjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeidebbjl;fgks;gjpgmsdfgjdf;gdfgffkfkffkfkfieeideb"
  )
);
