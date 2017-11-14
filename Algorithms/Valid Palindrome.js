/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var lEnd;

    if(s.length===0){return true;}
    else{
      var arr1=s.toLowerCase().match(/\w+/g);
      if(arr1==" "){return false;}else{
        var arr=arr1.join("");
        var len= Math.floor(arr.length/2);
        var lFornt=arr.slice(0,len);
      if(arr.length%2!==0){
          lEnd=arr.slice(len+1,arr.length).split("").reverse().join("");
      }else{
          lEnd=arr.slice(len,arr.length).split("").reverse().join("");
      }
      if(lEnd==lFornt){return true}
          else{return false;}
      }


      }

};
