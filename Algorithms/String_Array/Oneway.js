/*
There are three types pf edits that can be performed on strings:insert a character
removea character, or replace a character. Given two strings, write a function to check
if they are one edit away.
*/
/*Java
 Soulation 1:
public static boolean checkOneWay(String str1,String str2){
    if(str1.length()!= str2.length()&&str1.length()- str2.length()!=1&&str1.length()- str2.length()!=-1){
        return false;
    }
    if(str1.length()== str2.length()) {
        int count = 0;
        char[] content = str1.toCharArray();
        char[] contentr=str2.toCharArray();
        for (int i = 0; i < content.length; i++) {
            if (str2.indexOf(String.valueOf(content[i])) == -1|| str1.indexOf(String.valueOf(contentr[i]))==-1) {
                count++;
            }
        }
        if (count == 1) {
            return true;
        } else {
            return false;
        }
    }else {
        int count1=0;
        String len = CompareLen(str1, str2);
         char[] content2=len.toCharArray();
         if(len.length()==str1.length()){
             for(int j=0;j<content2.length;j++){
                 if(str2.indexOf(String.valueOf(content2[j]))==-1){
                     count1++;
                 }
             }
             if(count1==1){return true;}else {return false;}
         }else {
             for(int k=0; k<content2.length;k++){
                 if(str1.indexOf(String.valueOf(content2[k]))==-1){
                     count1++;
                 }
             }
             if(count1==1){return true;}else return false;
         }
    }
}


Soulation2:



public static boolean oneEditAWay(String first,String second){
    if(first.length()==second.length()){
        return oneEditReplace(first,second);
    }else if(first.length()+1==second.length()){
        return oneEditInsert(first,second);

    }else if(first.length()-1==second.length()){
        return oneEditInsert(second,first);
    }
    return false;
}


public static boolean oneEditReplace(String s1, String s2){
    boolean foundDifference=false;
    for(int i=0;i<s1.length();i++){
        if(s1.charAt(i)!=s2.charAt(i)){
            if(foundDifference){
                return false;
            }
            foundDifference=true;
        }
    }
    return true;
}

public static boolean oneEditInsert(String s1, String s2){
    int index1=0;
    int index2=0;
    while(index2<s2.length()&&index1<s1.length()){
        if(s1.charAt(index1)!=s2.charAt(index2)){
            if(index1!=index2){
                return false;
            }
            index2++;
        }else{
         index1++;
         index2++;
        }
    }
    return true;
}

*/
