/*
Write a method to replace all spaces in a string with '%20';
JAVA:

public static String URLify(String str, int len){

      char[] content=str.toCharArray();
    ArrayList<Character>result=new ArrayList<Character>();
      for(int i=0;i<len;i++){
          if(content[i]==' '){
              result.add('%');
              result.add('2');
              result.add('0');
          }else{
          result.add(content[i]);}
      }
      StringBuilder str1= new StringBuilder();
      for(Object obj: result){
          str1.append(obj.toString());
          //str1.append("\t");
      }
      String finalString= str1.toString();
     return finalString;
}

// The Second Method;
public static void repalceSpaces(char[] str, int length){
    int spaceCount=0, newLength, i;
    for(i=0;i<length;i++){
        if(str[i]==' '){
            spaceCount++;
        }
    }
    newLength=length+spaceCount*2;
    for(i=length-1;i>=0;i--){
      if(str[i]==' '){
        str[newLength-1]='0';
        str[newLength-2]='2';
        str[newLength-3]='%';
        newLength=newLength-3;
    }else{
          str[newLength-1]=str[i];
          newLength=newLength-1;
      }

    }
}
*/
var URLify=function(str,len){
  var strArr=str.split('');
  var pointer=0;
  while (pointer<str.length) {
    if(strArr===' '){

      for(var i=str.length-1){
           strArr[i] = str[i - 2];
      }
    strArr[pointer] = '%';
    strArr[pointer+1] = '2';
    strArr[pointer+2] = '0';
    console.log(strArr, strArr.length);
    }
     pointer++;
  }
 return strArr.join('');
}
