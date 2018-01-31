/* Implememnt a method to perform basic string compression using the counts of repeated
For example, the string aabcccccaaa would become a2b1c5a3. if"compressed" string
would not become smaller than the original string, your method should return the
original string .*/
var StringCompression=function (str) {

  var arr=str.split("");
  var res=[];
  var count=1;
  for(var i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
      count++;
    }else{
      res.push(arr[i]);
      res.push(count);
      count=1;
    }
  }
  var ComStr=res.join("");

  if(ComStr.length>=str.length){return str;}
  else {return ComStr;}
}
/*Java Solution*/
/*
public static String compress(String str){

    StringBuffer compressed=new StringBuffer();
    int countConsecutive=0;
    for(int i=0;i<str.length();i++){
        countConsecutive++;
    }
    if(i+1>=str.length()||str.charAt(i)!=str.charAt(i+1)){

        compressed.append(str.charAt(I));
        compressed.append(countConsecutive);
        countConsecutive=0;
    }
    return compressed.length()<str.length()? compressed.toString();str;

    return str;
}
*/
