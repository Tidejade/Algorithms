var palinPerm = function(string) {
  // create object literal to store charcount
  var chars = {};
  var currChar;
  var mulligan = false;
  var isPerm = true;
  // pump characters in, spaces not counted, all lowercase
  string.split('').forEach((char) => {
    if (char !== ' ') {
      currChar = char.toLowerCase();
      if (chars[currChar] === undefined) {
        chars[currChar] = 0;
      }
      chars[currChar]++;
    }
  });
  // check that all chars are even count, except for one exception
  Object.keys(chars).forEach((char) => {
    if (chars[char] % 2 > 0) {
    // if more than one exception, return false
      if (mulligan) {
        isPerm = false; // return in a forEach statment doesn't flow out of function scope
      } else {
        mulligan = true;
      }
    }
  });
  // if not return true
  return isPerm;
};

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');

/* Java

public static boolean isPermutationOfPalindrome(String phrase){
    int[] table=buildCharFrequencyTable(phrase);
    return checkMaxOneOdd(table);
}

public static int[] buildCharFrequencyTable(String phrase){

    int[] table =new int[Character.getNumericValue('z')-Character.getNumericValue('a')];
    for(char c: phrase.toCharArray()){
        int x=getCharNumber(c);
        if(x!=-1){
            table[x]++;
        }
    }
    return table;
}

public static int getCharNumber(Character c){
    int a =Character.getNumericValue('a');
    int z =Character.getNumericValue('z');
    int A =Character.getNumericValue('A');
    int Z =Character.getNumericValue('Z');

    int val=Character.getNumericValue(c);
    if(a<=val&& val<=z){
        return val-a;
    }else if(A<=val&&val<=Z){
        return val-A;
    }
    return -1;
}

public static boolean checkMaxOneOdd(int[] table){
    boolean foundOdd=false;
    for(int count:table){
        if(count%2==1){
            if(foundOdd){
                return false;
            }
            foundOdd=true;
        }
    }
    return true;
}

*/
