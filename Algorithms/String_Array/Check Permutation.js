/**
Given two Strings, write a mothod to decide if one is a permutation of the other.
**/

/**
JAVA SOLUATION 1:

public static boolean CheckPermutation(String str1,String str2){

    if(str1.length()!=str2.length()) return false;
    for(int i=0;i<str1.length();i++){
        int index=str1.length()-1-i;
        if(str1.charAt(i)!=str2.charAt(index))return false;
    }
    return true;
}

JAVA SOLUATION 2:
public static String sort(String s){
     char[] content=s.toCharArray();
     java.util.Arrays.sort(content);
     return new String(content);
}
public static boolean permutation(String s, String t){
     if(s.length()!= t.length()) return false;
     return sort(s).equals(sort(t));
}

**/
var CheckPermutation=function (str1,str2) {
  if(str1.length!=str2.length) return false;
  var char1=str1.split("").sort().toString();
  var char2=str2.split("").sort().toString();
  return (char1===char2);
}
