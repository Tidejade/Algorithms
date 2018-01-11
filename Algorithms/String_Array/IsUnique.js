/**
 * Implement an algorithm to determine if a String has all unique characters.
 ASCII;
 */
/**
 * For Java

 public class Main {
   public static boolean IsUnique(String str){
       if(str.length()>128) return false;
       boolean[] char_set= new boolean[128];
      for(int i=0;i<str.length();i++){
          int ch=str.charAt(i);
          if(char_set[ch]){return false;}
          char_set[ch]=true;
      }
       return true;
   }
   public static void main(String[] args){
       String str="This a word";
       System.out.println("This String has unique char: "+ IsUnique(str));
   }
}

 */
var IsUnique=function(str){
  if(str.length>128){
    return false;
  }
  var char_set=[128];
  for(var i=0;i<str.length;i++){
    if(char_set[str.charCodeAt(i)]){return false;}
    char_set[str.charCodeAt(i)]=true;
  }
  return true;
}
