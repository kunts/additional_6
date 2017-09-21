module.exports = function zeros(expression) {
        var tempRes = fact(parseInt(expression));
        var zeroAmount = 0;
        var i = true;
        var t = 10;
        while (i){

        if((tempRes % (t)) === 0){
          zeroAmount++;

        } else {

          i = false;

        }

        t = t*10;
      }
return zeroAmount;
}



function fact(a){
var res;
if(a<=1){
res = 1;
} else {
res = a*fact(a-1);
}
return res;
}
