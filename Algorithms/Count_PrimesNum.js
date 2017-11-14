/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count=0;
  switch(n)
      {
            case 0:
              count=0;
              break;
            case 1:
              count=0;
              break;
            case 2:
              count=0;
              break;
            case 3:
              count=1;
              break;
          default:
              count=1;
              for(var i=3;i<n;i++){
                  if(isPrimes(i)){
                      count=count+1;
                  }
              }

      }
    return count;
}
var isPrimes=function(m){
    for(var i=2;i<Math.floor(Math.abs(m));i++){
        if(m%i==0){return false;}
    }
    return true;
}


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count=0;
  switch(n)
      {
            case 0:
              count=0;
              break;
            case 1:
              count=0;
              break;
            case 2:
              count=0;
              break;
            case 3:
              count=1;
              break;
          default:
              count=1;
              for(var i=3;i<n;i++){
                  if(isPrimes(i)){
                      count=count+1;
                  }
              }

      }
    return count;
}
var isPrimes=function(m){
    for(var i=2;i*i<=m;i++){
        if(m%i==0){return false;}
    }
    return true;
}
