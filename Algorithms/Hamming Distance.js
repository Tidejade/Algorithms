/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var resultX=x.toString(2).split("");
    var resultY=y.toString(2).split("");
    var length, count=0;
    if(resultY.length>resultX.length){
        length=resultY.length-resultX.length;
        for(var i=0;i<length;i++){
            resultX.unshift(0);

        }

    }else if(resultY.length<resultX.length){
           length=resultX.length-resultY.length;
          for(var j=0;j<length;j++){
            resultY.unshift(0);

        }

    }else{

    }

          for(i=0;i<resultX.length;i++){
            if(resultX[i]!=resultY[i]){
               count++ ;
            }
        }
        return count;
};
