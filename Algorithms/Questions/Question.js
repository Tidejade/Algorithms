var readline = require('readline');
process.stdin.setEncoding('utf-8');

var rl = readline.createInterface({input: process.stdin,
                                   output: process.stdout,
                                   prompt:''});
rl.prompt();

var TwoMade=function(num,sumOne){
    var res=num;
    var count=0;
    do {
      if((res%2)==1){count++;}
      res=Math.floor(res/=2);

    }
    while(res>0);
if(count==sumOne){return true;}else return false;

}
rl.on('line', function (data){
    let arr = data.split(' ');
    var countNum=0;
    if (arr && arr.length==3) {
      for(var i=parseInt(arr[0]);i<=parseInt(arr[1]);i++){
        if(TwoMade(i,parseInt(arr[2]))){
          countNum++;
        }
      }
      if(countNum==0){process.stdout.write('' + '-1' + '\n');}else {process.stdout.write(countNum.toString());}
}
});
